# Acrostic

A mnemonic generator. Give it an ordered sequence you need to memorize, and it
writes a memorable sentence for it, using the first letter of each word to
match the first letter of each item.

This is a real Next.js app with its own backend (API routes) and its own
database (Supabase), so saved mnemonics show up on any device you're logged
into it from, not just the browser you generated them in. It's already been
built and type-checked successfully in a clean install.

## What you'll need before deploying

1. **A Supabase project** (free tier is fine) for the saved-mnemonics database.
2. **Your own Anthropic API key** from console.anthropic.com. This is separate
   from your claude.ai account and has its own billing based on usage.
3. **A Vercel account** (free tier is fine) to host it.
4. **A domain** you own, if you want a custom domain rather than the free
   `*.vercel.app` address Vercel gives you.

## 1. Set up the database

1. Create a project at supabase.com.
2. Open the SQL editor in your new project and run the contents of
   `supabase/schema.sql` (in this folder). That creates the one table this
   app needs.
3. In your Supabase project settings, under API, copy the **Project URL**
   and the **service_role key** (not the anon key; the service role key is
   used server-side only and must never be exposed to the browser).

## 2. Get an Anthropic API key

Go to console.anthropic.com, create a key, and note it down. You'll add
usage-based billing there; this is separate from any claude.ai subscription.

## 3. Deploy to Vercel

1. Push this folder to a GitHub repository (Vercel deploys from Git).
2. At vercel.com, click "Add New Project" and import that repository.
   Vercel will detect it as a Next.js app automatically.
3. Before deploying, add these three environment variables in the Vercel
   project settings (Settings > Environment Variables):
   - `ANTHROPIC_API_KEY`
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Deploy. Vercel gives you a live `*.vercel.app` URL right away.

## 4. Connect your custom domain

In the Vercel project, go to Settings > Domains, add your domain, and follow
the DNS records it shows you (usually one A record or CNAME) in whatever
registrar you bought the domain from. Vercel issues an SSL certificate for it
automatically once DNS resolves, typically within a few minutes to an hour.

## 5. Before you consider it launched

Checking this against your own launch checklist:
- [x] Favicon: included at `app/icon.svg`, matches the app's palette.
- [ ] Custom domain: step 4 above.
- [ ] "Made with AI" tag: there isn't one, this is hand-written code, not a
      no-code builder, so there's nothing to remove.
- [ ] Privacy policy: a starting draft is at `/privacy`, but it's a
      template, not legal advice, edit the specifics and dates.
- [ ] Terms and conditions: same, at `/terms`.

## Notes on what was tested here versus what to check yourself

This project was scaffolded, installed, and built in a clean environment, and
the build completed successfully with no type errors, so the code itself is
sound. Two things couldn't be verified from here and are worth checking after
your first deploy:
- The build log may show a warning about failing to optimize the Google
  Fonts stylesheet. That's specific to this sandbox's restricted network; on
  Vercel's build servers it should resolve normally. If it doesn't, the
  fonts still load at runtime via the `<link>` tag either way, it's a minor
  optimization, not a functional dependency.
- The actual Anthropic and Supabase calls couldn't be tested end to end
  without live API keys. Once deployed, run through a generate, save, and
  remove once to confirm the environment variables are wired up correctly.

## Local development

```
npm install
cp .env.example .env.local   # then fill in your keys
npm run dev
```
