# Fox Hunt Digital · Advisory site

Vite + React + TypeScript single-page site, built from the "Training Log" design
(source export in `design/`). Deploys to Netlify.

## Develop

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build to dist/
```

## Where things live

- `src/content.ts`: all copy, stats, plans, and the two service-site links (`serviceSites[].href`).
- `src/components/`: one component + CSS file per section.
- `src/styles/global.css`: fonts, color tokens (`--accent` etc.), shared classes.

## Lead form (Netlify Forms)

`LeadForm.tsx` posts to Netlify via `fetch`. Netlify only detects forms in static HTML,
so a hidden copy of the `lead` form lives in `index.html`. **If you add or rename a field,
update both.** Submissions show under Site → Forms in Netlify; turn on email notifications there.

Form posts don't work under `npm run dev`. Test locally with `netlify dev` or on a deploy preview.
