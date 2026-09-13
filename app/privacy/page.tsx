import Link from 'next/link';

export const metadata = { title: 'Privacy | Acrostic' };

export default function Privacy() {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>

      <p>Effective date: Sep 13, 2026</p>

      <h2>What Acrostic collects</h2>
      <p>
        Acrostic does not have user accounts, does not ask for your name or email address, and
        does not use cookies, analytics, or advertising trackers of any kind. What it does
        collect is limited to two things:
      </p>
      <p>
        First, the topic and the list of items you type in to generate a mnemonic. This is sent
        to Google&rsquo;s Gemini API so it can write a sentence back. It is not stored by
        Acrostic itself unless you save the result, see below.
      </p>
      <p>
        Second, if you click Save on a generated mnemonic, that sentence, its tone label, and
        the topic you gave it are stored in Acrostic&rsquo;s database so they can be shown back
        to you later. If you never click Save, nothing from that session is kept anywhere.
      </p>

      <h2>A note on the free tier</h2>
      <p>
        Acrostic currently runs on Gemini&rsquo;s free tier. On that tier, Google&rsquo;s own
        terms allow the prompts you send and the responses you get back to be used to improve
        Google&rsquo;s products. That is a real trade off of using a free AI service rather than
        a paid one, and it is worth knowing plainly rather than buried in a longer document. If
        this project ever moves to a paid Gemini tier, that data use stops.
      </p>

      <h2>How your information is used</h2>
      <p>
        The only use of anything you enter or save is to run the mnemonic generator and to show
        your saved list back to you. Nothing you type or save is sold, rented, or shared with
        advertisers, and Acrostic does not build a profile of you.
      </p>

      <h2>Other services involved</h2>
      <p>
        A few other companies are part of how Acrostic runs, each with their own privacy
        practices worth reading if you want the full picture:
      </p>
      <p>
        Google processes each generation request through the Gemini API, as described above.
        Supabase stores saved mnemonics in a database. Vercel hosts the website itself and, like
        essentially every web host, automatically logs basic technical information for security
        and performance, such as IP addresses and browser type, in server logs it controls, not
        Acrostic.
      </p>

      <h2>How long things are kept</h2>
      <p>
        A saved mnemonic stays in the database until you remove it yourself using the Remove
        button, there is no automatic expiration. Anything you type but do not save is not
        retained by Acrostic once you leave or refresh the page.
      </p>

      <h2>Your choices</h2>
      <p>
        You can remove any saved mnemonic at any time. You can also simply choose not to save
        anything, in which case using Acrostic leaves nothing behind on this end beyond the
        momentary request sent to Gemini to generate it.
      </p>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        Acrostic is a study aid and is not specifically directed at children under 13. It does
        not knowingly collect personal information from children. If you believe a child has
        submitted personal information here, contact us using the details below and it will be
        removed.
      </p>

      <h2>Security</h2>
      <p>
        Acrostic relies on the security practices of Supabase and Vercel to protect stored data
        in transit and at rest. No online service can guarantee complete security, and this is
        offered as is, without any warranty that it is immune to every possible failure.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        This policy may be updated as Acrostic changes, for example if it adds accounts, moves
        off the free tier, or adds new features. Check back here for the current version.
      </p>

      <h2>Contact</h2>
      <p>Questions about this policy can be sent to <a href="mailto:lightstrikesx2@gmail.com">lightstrikesx2@gmail.com</a>.</p>

      <p><Link href="/">Back to Acrostic</Link></p>
    </div>
  );
}
