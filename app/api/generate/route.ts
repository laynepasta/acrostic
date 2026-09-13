import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const SYSTEM_PROMPT =
  'You write mnemonic sentences (acrostics) for ordered lists of things people need to memorize. ' +
  'Rules: each mnemonic sentence must have exactly the same number of words as there are items, in the same order, ' +
  'and the first letter of word N must match the first letter of item N, case-insensitive. ' +
  'Prefer a natural, vivid, or funny sentence over a string of unrelated words; a small scene or image helps recall. ' +
  'Do not use em dashes or hyphens as punctuation in the sentence or note. ' +
  'Return 3 distinct options with noticeably different tones. ' +
  'Respond with ONLY valid JSON, no markdown fences, no commentary, matching exactly this shape: ' +
  '{"mnemonics":[{"sentence":"string","tone":"one or two word label, e.g. Vivid, Classic, Playful, Plain","note":"one short sentence on the imagery or memory hook"}]}';

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const topic = typeof body.topic === 'string' ? body.topic.trim() : '';
  const items = Array.isArray(body.items)
    ? body.items.map((i: unknown) => String(i).trim()).filter(Boolean)
    : [];

  if (items.length < 2) {
    return NextResponse.json({ error: 'Add at least two items.' }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Server is missing a Gemini API key.' },
      { status: 500 }
    );
  }

  // Overridable via an env var in case Google renames or retires this model later,
  // without needing a code change and redeploy. Check
  // https://ai.google.dev/gemini-api/docs/models for the current recommended
  // lightweight, free-tier model if this ever stops working.
  const model = process.env.GEMINI_MODEL || 'gemini-3.1-flash-lite';

  const userMessage =
    `Topic: ${topic || '(untitled)'}\nItems in order:\n` +
    items.map((it: string, i: number) => `${i + 1}. ${it}`).join('\n');

  try {
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model,
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        responseMimeType: 'application/json'
      }
    });

    const raw = response.text ?? '';
    const clean = raw.replace(/^```json\s*|^```\s*|```$/g, '').trim();
    const parsed = JSON.parse(clean);

    if (!parsed.mnemonics || !Array.isArray(parsed.mnemonics) || !parsed.mnemonics.length) {
      throw new Error('Model returned no mnemonics.');
    }

    return NextResponse.json(parsed);
  } catch (err) {
    console.error('POST /api/generate failed:', err);
    return NextResponse.json(
      { error: "Couldn't generate a mnemonic just now." },
      { status: 502 }
    );
  }
}
