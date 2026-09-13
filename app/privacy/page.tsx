import Link from 'next/link';

export const metadata = { title: 'Privacy | Acrostic' };

export default function Privacy() {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>

      <p>Effective date: Sep 13, 2026</p>

      <p>
        This is a genuine policy reflecting what Acrostic actually does today, written to be
        honest and specific rather than generic. It is not legal advice, and it was not written
        by a lawyer. If Acrostic ever has real users beyond personal, testing, or friends and
        family use, have someone with legal expertise review it, since privacy requirements vary
        by where your users are located.
      </p>

      <h2>What Acrostic collects</h2>
      <p>
        Acrostic does not have user accounts, does not ask for your name or email address, does
        not use cookies, analytics, or advertising trackers, and does not store anything you
        type in on its own servers or in any database.
      </p>
      <p>
        The only thing that happens with what you type is that the topic and the list of items
        you enter are sent to Google&rsquo;s Gemini API so it can write a mnemonic sentence back.
        Once that response is shown to you, Acrostic itself keeps nothing from that exchange.
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
        The only use of anything you enter is to generate a mnemonic and show it back to you in
        that moment. Nothing you type is sold, rented, or shared with advertisers, and Acrostic
        does not build a profile of you.
      </p>

      <h2>Other services involved</h2>
      <p>
        Google processes each generation request through the Gemini API, as described above.
        Vercel hosts the website itself and, like essentially every web host, automatically logs
        basic technical information for security and performance, such as IP addresses and
        browser type, in server logs it controls, not Acrostic.
      </p>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        Acrostic is a study aid and is not specifically directed at children under 13. It does
        not knowingly collect personal information from children. If you believe a child has
        submitted personal information here, contact us using the details below.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        This policy may be updated as Acrostic changes, for example if it adds accounts or moves
        off the free tier. Check back here for the current version.
      </p>

      <h2>Contact</h2>
      <p>Questions about this policy can be sent to <a href="mailto:lightstrikesx2@gmail.com">lightstrikesx2@gmail.com</a>.</p>

      <p><Link href="/">Back to Acrostic</Link></p>
    </div>
  );
}
