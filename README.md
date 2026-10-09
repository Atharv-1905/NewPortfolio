# Atharv Bhosale — Portfolio

A cinematic, editorial one-page portfolio (dark / dusk aesthetic, serif display type,
numbered case index). Pure HTML + CSS + vanilla JS — no build step, no dependencies.

## Run it

Just open `index.html` in a browser, or serve the folder:

```bash
cd portfolio
python -m http.server 8080   # → http://localhost:8080
```

## Replace the placeholders with your media

All visuals are generated SVG placeholders. Replace them with your own images —
keep the same filenames, or update the matching `<img src="...">` in `index.html`.

| File                    | Used for                                   |
|-------------------------|--------------------------------------------|
| `images/hero.svg`       | Full-screen hero (wide shot, ≥1920px wide) |
| `images/work-01.svg`    | Case 01 — ML Model Monitoring & Drift      |
| `images/work-02.svg`    | Case 02 — MindTrace AI                     |
| `images/work-03.svg`    | Case 03 — MatRisk AI                       |
| `images/work-04.svg`    | Case 04 — IBM Customer Churn MLOps         |
| `images/portrait.svg`   | About-section portrait                     |

Tips: dusk/warm-toned photos match the palette (#c9905a amber on near-black).
JPG/PNG/WebP all work; for fast loads export hero at ~1920w, case images ~1600w.

## Update before publishing (search `TODO` in index.html)

1. **Case links** — "View case" for project 01 and 02 currently points to your
   GitHub profile. Swap in the exact repo URLs once public.
2. **LinkedIn** — the link assumes `linkedin.com/in/atharv-bhosale`; verify yours.
3. **Certification pills** — currently generic links (Coursera / Udemy homepages);
   replace with your actual certificate verification URLs.
4. **Résumé** — drop your final PDF at `assets/Atharv-Bhosale-Resume.pdf`
   (a copy of your uploaded resume is already there).
5. **Meta** — update the `<title>` / `<meta name="description">` if you reword anything.

## Structure

```
portfolio/
├── index.html      ← everything (styles + script inlined)
├── images/         ← placeholder visuals (replace these)
└── assets/         ← résumé PDF
```

Fonts load from Google Fonts (Fraunces + Inter + JetBrains Mono) with graceful
system fallbacks offline. Honors `prefers-reduced-motion`.
