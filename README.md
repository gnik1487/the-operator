# The Operator

AI automation for consultants & solo operators. Shown, not sold.

## Stack

Astro 4 · Plain CSS (dark-mode-first) · Cloudflare Pages

## Dev

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Deploy

Cloudflare Pages → connect to this repo → build command `npm run build` → output dir `dist/`.

Auto-deploys on push to `main`.

## Add new articles

1. Create `src/content/blog/NN-slug.md` with frontmatter matching the schema in `src/content/config.ts`
2. Push to main → Cloudflare builds automatically
