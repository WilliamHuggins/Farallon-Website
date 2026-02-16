<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1L_UfUV5oje7J6do6EC-dBBBl9wFMb69K

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Vercel deployment target

This repo should deploy to:

- `will-hs-projects/farallon-website`
- https://vercel.com/will-hs-projects/farallon-website

If your Vercel project Root Directory is set to `Farallon-Website-main`, keep using `Farallon-Website-main/vercel.json`.
If Root Directory is repository root, use root `vercel.json`.

Builds now include a hard guard script (`scripts/verify-vercel-target.sh`) that fails Vercel builds when the deployment context does not match the expected Farallon project target.

Accepted production URLs for guard checks: `farallonai.com`, `www.farallonai.com`, and `farallon-website.vercel.app`.

To relink locally (CLI):

```bash
vercel link --scope will-hs-projects --project farallon-website
```


### Why your `*.vercel.app` preview updates but `farallonai.com` does not

Vercel creates **Preview** deploys for non-production branches (for example `codex/*`).
Your screenshots show those preview deploys are working, but they do **not** replace the Production deployment tied to `www.farallonai.com`.

To update `farallonai.com`:

1. Merge the branch into `main` (or set your Production Branch in Vercel to the branch you actually deploy from).
2. In Vercel project settings, confirm Production Branch = `main`.
3. If needed, use **Promote to Production** on the desired deployment.

The guard script now blocks accidental production deploys from non-`main` branches so this mismatch fails loudly instead of silently confusing preview vs production behavior.
