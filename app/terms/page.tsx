import Link from 'next/link';

export const metadata = { title: 'Terms | Acrostic' };

export default function Terms() {
  return (
    <div className="legal-page">
      <h1>Terms and Conditions</h1>

      <p>Effective date: Sep 13, 2026</p>

      <p>
        This is a genuine starting set of terms reflecting what Acrostic actually does today. It
        is not legal advice, and it was not written by a lawyer. If Acrostic ever has real users
        beyond personal, testing, or friends and family use, have someone with legal expertise
        review it, and fill in the governing law section below with wherever you are actually
        based.
      </p>

      <h2>Accepting these terms</h2>
      <p>
        By using Acrostic, you agree to these terms. If you do not agree with them, the only
        request is that you not use the site.
      </p>

      <h2>What Acrostic is</h2>
      <p>
        Acrostic takes an ordered sequence of things you want to memorize and uses an AI model
        (currently Google&rsquo;s Gemini) to write a mnemonic sentence for it. It is intended as
        a study and memory aid for personal use.
      </p>

      <h2>AI generated content is not verified</h2>
      <p>
        The sentences Acrostic generates are memory aids, not verified facts. The AI model can
        occasionally misalign a letter, misunderstand an item, or simply write something less
        useful than intended. Double check anything with real stakes, such as biology or
        chemistry pathway steps you are studying for an exam, against a textbook or your course
        material rather than relying on Acrostic alone.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Acrostic is meant to be used the way it looks, to generate mnemonics for legitimate
        study or memorization purposes. Please do not attempt to use it to generate harmful,
        illegal, or abusive content, to overload or disrupt the service, or to interfere with
        anyone else&rsquo;s use of it.
      </p>

      <h2>Your content</h2>
      <p>
        The topics and item lists you type in, and anything you choose to save, are yours. You
        are responsible for what you enter, for example not typing in anything private or
        sensitive that you would not want processed by a third party AI service, see the
        Privacy Policy for how that works.
      </p>

      <h2>No accounts, no guarantee of permanence</h2>
      <p>
        Acrostic does not currently have user accounts or logins. Saved mnemonics are stored in
        a shared database without being tied to an individual identity. Because of that, there
        is no way to restrict who can see or remove a saved entry, and no guarantee that saved
        data will be preserved indefinitely if the project changes or is discontinued.
      </p>

      <h2>No warranty</h2>
      <p>
        Acrostic is provided as is and as available, without warranties of any kind, whether
        expressed or implied, including that it will be uninterrupted, error free, or fit for
        any particular purpose.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Acrostic and whoever operates it are not liable
        for any indirect, incidental, or consequential damages arising from your use of the
        site, including reliance on a generated mnemonic that turns out to be inaccurate.
      </p>

      <h2>Changes to the service or these terms</h2>
      <p>
        Acrostic may be changed, paused, or discontinued at any time. These terms may be updated
        as the app changes, check back here for the current version.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India.
      </p>

      <h2>Contact</h2>
      <p>Questions about these terms can be sent to <a href="mailto:lightstrikesx2@gmail.com">lightstrikesx2@gmail.com</a>.</p>

      <p><Link href="/">Back to Acrostic</Link></p>
    </div>
  );
}
