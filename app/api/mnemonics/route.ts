import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

export async function GET() {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('mnemonics')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return NextResponse.json({ mnemonics: data });
  } catch (err) {
    return NextResponse.json({ error: 'Could not load saved mnemonics.' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!body.sentence || typeof body.sentence !== 'string') {
    return NextResponse.json({ error: 'A sentence is required.' }, { status: 400 });
  }

  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('mnemonics')
      .insert({
        topic: body.topic || null,
        sentence: body.sentence,
        tone: body.tone || null
      })
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ mnemonic: data });
  } catch (err) {
    return NextResponse.json({ error: 'Could not save that mnemonic.' }, { status: 500 });
  }
}
