# CV Builder — Vercel-ready

A minimal, production-friendly Next.js (App Router) CV builder:
- Tailwind CSS
- LocalStorage autosave using Zustand
- Two templates (Classic ATS, Modern Clean)
- Client-side **PDF** export via `@react-pdf/renderer`
- Client-side **DOCX** export via `docx`
- Deployed easily to **Vercel**

## Quick start

```bash
pnpm i    # or npm i / yarn
pnpm dev  # http://localhost:3000
```

## Deploy to Vercel
- Push this folder to a GitHub repo.
- Import the repo into Vercel.
- Framework: Next.js, Build command: `next build`, Output: `.next`

No serverless functions required. Exports run client-side.

## Notes
- PDF rendering uses a simplified layout to guarantee consistent output.
- For pixel-perfect PDF, consider a serverless Puppeteer microservice later.
