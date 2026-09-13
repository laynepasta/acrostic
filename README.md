# Acrostic

A mnemonic generator. Give it an ordered sequence you need to memorize, and it
writes a memorable sentence for it, using the first letter of each word to
match the first letter of each item.

This runs on Gemini's free tier (Google), so there's no required billing to
get it running. Nothing is stored anywhere, each visit is independent.

## What you'll need before deploying

1. **A free Gemini API key** from aistudio.google.com.
2. **A Vercel account** (free tier) to host it.
3. **A domain** you own, only if you want a custom address rather than the
   free `*.vercel.app` one Vercel gives you automatically.

## 1. Get a Gemini API key

Go to aistudio.google.com, sign in, and create an API key. It's free, no
billing required, though it is rate limited (a handful of requests per
minute and a daily cap, which is plenty for personal use). One thing worth
knowing: on the free tier, Google's terms allow prompts and responses to be
used to improve their products; that stops if you ever enable billing on
that project. The privacy page in this app already mentions this.

## 2. Deploy to Vercel

1. Push this folder to a GitHub repository (Vercel deploys from Git).
2. At vercel.com, click "Add New Project" and import that repository.
   Vercel detects it as a Next.js app automatically.
3. Before deploying, add this environment variable in the Vercel project
   settings (Settings > Environment Variables):
   - `GEMINI_API_KEY`
   - `GEMINI_MODEL` is optional, only set it if the default model name in
     `app/api/generate/route.ts` ever stops working.
4. Deploy. Vercel gives you a live `*.vercel.app` URL right away.

## 3. Connect your custom domain

In the Vercel project, go to Settings > Domains, add your domain, and follow
the DNS records it shows you in whatever registrar you bought the domain
from. Vercel issues an SSL certificate automatically once DNS resolves.

## 4. Before you consider it launched

- [x] Favicon: included at `app/icon.svg`.
- [ ] Custom domain: step 3 above.
- [ ] "Made with AI" tag: there isn't one, this is hand-written code.
- [x] Privacy policy: at `/privacy`. Add your effective date.
- [x] Terms and conditions: at `/terms`. Add your effective date.

## Local development

```
npm install
cp .env.example .env.local   # then fill in your key
npm run dev
```
