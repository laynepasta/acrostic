import Link from 'next/link';

export const metadata = { title: 'Terms | Acrostic' };

export default function Terms() {
  return (
    <div className="legal-page">
      <h1>Terms</h1>

      <p>Last updated: [add date when you publish this]</p>

      <h2>What this page covers</h2>
      <p>
        This is a starting template, not legal advice. Edit it to match how the app actually
        works, and consider having someone with legal expertise review it before launch.
      </p>

      <h2>Using Acrostic</h2>
      <p>
        Acrostic generates mnemonic sentences using AI. Generated sentences are suggestions to
        help memory, not verified facts; double check anything technical (like biochemistry
        pathway steps) against a reliable source before relying on it.
      </p>

      <h2>Your content</h2>
      <p>
        Whatever you type in to generate a mnemonic, and whatever you choose to save, is yours.
        You&rsquo;re responsible for what you enter and save.
      </p>

      <h2>No guarantees</h2>
      <p>
        Acrostic is provided as is, without warranty of any kind. It may be unavailable,
        changed, or discontinued at any time.
      </p>

      <h2>Changes</h2>
      <p>These terms may be updated as the app changes.</p>

      <p><Link href="/">Back to Acrostic</Link></p>
    </div>
  );
}
