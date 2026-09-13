# Acrostic

A mnemonic generator. Give it an ordered sequence you need to memorize, and it
writes a memorable sentence for it, using the first letter of each word to
match the first letter of each item.

This runs on Gemini's free tier (Google), so there's no required billing to
get it running, plus its own database (Supabase) so saved mnemonics show up
on any device you're logged into it from.

## What you'll need before deploying

1. **A Supabase project** (free tier) for the saved-mnemonics database.
2. **A free Gemini API key** from aistudio.google.com.
3. **A Vercel account** (free tier) to host it.
4. **A domain** you own, only if you want a custom address rather than the
   free `*.vercel.app` one Vercel gives you automatically.

## 1. Set up the database

1. Create a project at supabase.com.
2. Open the SQL editor in your new project and run the contents of
   `supabase/schema.sql` (in this folder).
3. In your Supabase project, go to Settings > Data API and copy the
   **Project URL**. Then go to Settings > API Keys > the Legacy API Keys
   tab, and copy the **service_role** key (not the anon key; this one is
   used server-side only and must never be exposed to the browser).

## 2. Get a Gemini API key

Go to aistudio.google.com, sign in, and create an API key. It's free, no
billing required, though it is rate limited (a handful of requests per
minute and a daily cap, which is plenty for personal use). One thing worth
knowing: on the free tier, Google's terms allow prompts and responses to be
used to improve their products; that stops if you ever enable billing on
that project. The privacy page in this app already mentions this.

## 3. Deploy to Vercel

1. Push this folder to a GitHub repository (Vercel deploys from Git).
2. At vercel.com, click "Add New Project" and import that repository.
   Vercel detects it as a Next.js app automatically.
3. Before deploying, add these environment variables in the Vercel project
   settings (Settings > Environment Variables):
   - `GEMINI_API_KEY`
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `GEMINI_MODEL` is optional, only set it if the default model name in
     `app/api/generate/route.ts` ever stops working.
4. Deploy. Vercel gives you a live `*.vercel.app` URL right away.

If you already created a Vercel project pointed at an earlier version of
this code with an `ANTHROPIC_API_KEY` variable, just remove that variable
and add `GEMINI_API_KEY` instead, then redeploy.

## 4. Connect your custom domain

In the Vercel project, go to Settings > Domains, add your domain, and follow
the DNS records it shows you in whatever registrar you bought the domain
from. Vercel issues an SSL certificate automatically once DNS resolves.

## 5. Before you consider it launched

- [x] Favicon: included at `app/icon.svg`.
- [ ] Custom domain: step 4 above.
- [ ] "Made with AI" tag: there isn't one, this is hand-written code.
- [ ] Privacy policy: a draft is at `/privacy`, not legal advice, edit the
      specifics and dates.
- [ ] Terms and conditions: same, at `/terms`.

## Notes on what was tested here versus what to check yourself

This project was rebuilt and compiled successfully in a clean install after
the Gemini swap, with no type errors. The actual Gemini and Supabase calls
couldn't be tested end to end without live keys. Once deployed, run through
a generate, save, and remove once to confirm the environment variables are
wired up correctly. If generation fails, the most likely cause is the
`GEMINI_MODEL` default in the code no longer matching a current model name,
Google renames and retires models over time, check
https://ai.google.dev/gemini-api/docs/models and set `GEMINI_MODEL` in
Vercel if needed.

## Local development

```
npm install
cp .env.example .env.local   # then fill in your keys
npm run dev
```
