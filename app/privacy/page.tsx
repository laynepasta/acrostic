import Link from 'next/link';

export const metadata = { title: 'Privacy | Acrostic' };

export default function Privacy() {
  return (
    <div className="legal-page">
      <h1>Privacy</h1>

      <p>Last updated: [add date when you publish this]</p>

      <h2>What this page covers</h2>
      <p>
        This is a starting template, not legal advice. Read it, edit the specifics
        so they match what the app actually does, and consider having someone with
        legal expertise review it before you rely on it publicly.
      </p>

      <h2>What Acrostic collects</h2>
      <p>
        The topic and items you type in are sent to Google&rsquo;s Gemini API to generate a
        mnemonic. If you choose to save a mnemonic, the sentence, its tone label, and the topic
        you gave it are stored in the app&rsquo;s database so you can see it again later.
        Acrostic does not currently ask for your name, email, or any account information, and
        does not use cookies or analytics trackers.
      </p>

      <h2>A note on the free tier</h2>
      <p>
        This app runs on Gemini&rsquo;s free tier. On that tier, Google&rsquo;s terms allow
        prompts and responses to be used to improve their products; that stops being true if
        this project ever moves to a paid Gemini tier. Worth knowing since it&rsquo;s a real
        difference from services that never do that, paid or not.
      </p>

      <h2>How it&rsquo;s used</h2>
      <p>
        Saved mnemonics are used only to show your saved list back to you. Nothing you enter is
        sold or shared with advertisers.
      </p>

      <h2>Third parties</h2>
      <p>
        Generation requests are processed by Google (Gemini API). Saved data is stored with
        Supabase. Both providers have their own privacy practices, worth linking to here once
        you&rsquo;ve reviewed them.
      </p>

      <h2>Questions</h2>
      <p>Add a contact email here once you have one for this project.</p>

      <p><Link href="/">Back to Acrostic</Link></p>
    </div>
  );
}
