'use client';

import { useState } from 'react';
import Link from 'next/link';

type Mnemonic = { sentence: string; tone?: string; note?: string };

const EXAMPLES: Record<string, { topic: string; items: string[] }> = {
  krebs: {
    topic: 'Krebs cycle substrates',
    items: ['Citrate', 'Isocitrate', 'Alpha-ketoglutarate', 'Succinyl-CoA', 'Succinate', 'Fumarate', 'Malate', 'Oxaloacetate']
  },
  glycolysis: {
    topic: 'Glycolysis intermediates',
    items: [
      'Glucose', 'Glucose 6-phosphate', 'Fructose 6-phosphate', 'Fructose 1,6-bisphosphate',
      'DHAP and G3P', '1,3-Bisphosphoglycerate', '3-Phosphoglycerate', '2-Phosphoglycerate',
      'Phosphoenolpyruvate', 'Pyruvate'
    ]
  },
  strings: {
    topic: 'Guitar strings, low to high',
    items: ['E', 'A', 'D', 'G', 'B', 'E']
  }
};

const PALETTE = ['var(--accent)', 'var(--sage)', 'var(--slate)', 'var(--rose)'];

function firstLetter(str: string) {
  const m = str.match(/[a-zA-Z]/);
  return m ? m[0].toUpperCase() : '?';
}

function ThinkingDots() {
  return (
    <span className="thinking-dots" aria-hidden="true">
      <span></span><span></span><span></span>
    </span>
  );
}

export default function Home() {
  const [topic, setTopic] = useState('');
  const [itemsText, setItemsText] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [statusError, setStatusError] = useState(false);
  const [results, setResults] = useState<Mnemonic[]>([]);

  const items = itemsText.split('\n').map((s) => s.trim()).filter(Boolean);

  function useExample(key: string) {
    const ex = EXAMPLES[key];
    setTopic(ex.topic);
    setItemsText(ex.items.join('\n'));
  }

  async function generate() {
    if (items.length < 2) {
      setStatusMsg('Add at least two things to memorize, one per line.');
      setStatusError(true);
      return;
    }

    setLoading(true);
    setStatusMsg('');
    setStatusError(false);
    setResults([]);

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, items })
      });
      const data = await res.json();

      if (!res.ok || !data.mnemonics) {
        throw new Error(data.error || 'failed');
      }

      setResults(data.mnemonics);
    } catch {
      setStatusMsg("Couldn't write one just now. Check your connection and try again.");
      setStatusError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="wrap">
      <header>
        <p className="wordmark"><span className="drop">A</span>crostic</p>
        <p className="tagline">
          Give it a sequence you need to memorize in order. It writes you a sentence to remember it by.
        </p>
      </header>

      <div className="field">
        <label htmlFor="topic">Topic (optional)</label>
        <input
          id="topic"
          type="text"
          placeholder="Krebs cycle substrates"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="items">What do you need to memorize, in order? One thing per line.</label>
        <textarea
          id="items"
          placeholder={'Citrate\nIsocitrate\nAlpha-ketoglutarate\nSuccinyl-CoA\nSuccinate\nFumarate\nMalate\nOxaloacetate'}
          value={itemsText}
          onChange={(e) => setItemsText(e.target.value)}
        />
      </div>

      <div className="examples">
        <button className="example-chip" onClick={() => useExample('krebs')}>Krebs cycle</button>
        <button className="example-chip" onClick={() => useExample('glycolysis')}>Glycolysis</button>
        <button className="example-chip" onClick={() => useExample('strings')}>Guitar strings</button>
      </div>

      <button className="primary" onClick={generate} disabled={loading}>
        {loading ? (
          <>Thinking of a sentence<ThinkingDots /></>
        ) : (
          'Write me a mnemonic'
        )}
      </button>

      {statusMsg && <div className={`status${statusError ? ' error' : ''}`}>{statusMsg}</div>}

      {results.length > 0 && (
        <section className="results">
          <h2>Options</h2>
          {results.map((m, idx) => {
            const words = m.sentence.trim().split(/\s+/);
            const aligned = words.length === items.length;
            const color = PALETTE[idx % PALETTE.length];
            return (
              <div
                className="candidate"
                key={idx}
                style={{ ['--candidate-color' as any]: color }}
              >
                <p className="tone">{m.tone || 'Option'}</p>

                {aligned ? (
                  <div className="tile-row">
                    {items.map((item, i) => {
                      const itemLetter = firstLetter(item);
                      const wordLetter = firstLetter(words[i]);
                      const match = itemLetter === wordLetter;
                      return (
                        <div className="tile-col" style={{ animationDelay: `${i * 35}ms` }} key={i}>
                          <span className="tile-index">{i + 1}</span>
                          <span className={`tile-letter${match ? ' match' : ''}`}>{itemLetter}</span>
                          <span className="tile-word" title={item}>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="plain-items">In order: {items.join(', ')}</p>
                )}

                <p className="sentence">{m.sentence}</p>
                {m.note && <p className="note">{m.note}</p>}

                <div className="candidate-actions">
                  <CopyButton text={m.sentence} />
                </div>
              </div>
            );
          })}
          <div style={{ marginTop: 20 }}>
            <button className="text" onClick={generate}>Try different ones</button>
          </div>
        </section>
      )}

      <footer className="legal">
        <Link href="/privacy">Privacy</Link> &nbsp;&middot;&nbsp; <Link href="/terms">Terms</Link>
      </footer>
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="text"
      onClick={() => {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        });
      }}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}
