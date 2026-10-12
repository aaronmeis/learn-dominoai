# Learn Domino AI

Study console for the Domino Data Lab one-day pack: governed lifecycle, control plane versus data plane, model cards, Apps, Nexus, and when another platform is better.

**Live:** https://aaronmeis.github.io/learn-dominoai/

**Pack:** `Learning/one-day-mastery/dominoai/` in the Obsidian vault. The source ledger on the site matches that note. NotebookLM reports are secondary. IL5 is not an ATO. Homepage percentages are not an SLA.

**Checked against:** Domino 6.3 (Sept 2026) on 2026-10-11.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000/ (hash routes like `#/glossary` work without a rewrite).

## What's here

- **Today:** daily challenge, failure modes, placement drills
- **Learn:** eleven study blocks, NotebookLM slide deck, six study shorts, library notes
- **Practice:** flashcards, quiz, study prompts
- **Reference:** cheatsheet, glossary, debates with run/unrun pills, 42-row source ledger

## File map

| Path | Role |
|------|------|
| `index.html` | App shell |
| `js/data.js` | Curriculum, glossary, quiz, sources, debates |
| `js/app.js` / `js/enhance.js` | Views and Today challenge |
| `library/` | Static HTML notes |
| `media/` | Shorts (MP4) and posters |
| `assets/slides/` | Deck images |
| `sw.js` | Offline shell (network-first; video not cached) |

Storage prefix is `lda:` because this origin is shared with other learn-* sites.

## Sources and freshness

Primary claims cite the source ledger (`#/refs`). Homepage stats (50% / 6× / 40% / 75%) cite the marketing homepage row; IL5 and certification wording cite the platform / trust pages. Re-check when Domino docs move past 6.3.

No Python, operator scripts, or credentials live in this public repo.
