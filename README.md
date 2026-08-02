# Albert Addo — Portfolio

Personal engineering portfolio built with Next.js 15, React 18, TypeScript, and
Tailwind CSS. Eleven project case studies, each with its own detail page.

---

## Before you deploy: two placeholders to replace

| What            | Where                       | How                                                                                                                                       |
| --------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Resume PDF**  | `public/AlbertAddoResume.pdf` | Delete the placeholder, drop your real resume in with the same filename (or use any name and update `resumeFile` in `src/data/profile.ts`). |
| **Headshot**    | `public/img/albert.jpg`     | **Now the hero image at the top of the home page.** Replace with a portrait, at least 840×1050. It is displayed at a 4:5 aspect with `object-cover`, so a square photo will crop top and bottom. |

Then open `src/data/profile.ts` and check the lines marked `TODO`.

There is no GitHub link anywhere on the site. If you want one later, add
`github: "https://github.com/..."` to `profile` in `src/data/profile.ts`, then
add a link to it in `components/hero.tsx` and `components/contact.tsx`
alongside the LinkedIn entries.

---

## Running it locally

```bash
npm install     # first time only
npm run dev     # then open http://localhost:3000
```

`npm run build` produces the production build. `npm start` serves it.

---

## Where everything lives

```
src/
├── data/
│   ├── profile.ts      ← name, links, email, education, experience, skills
│   └── projects.ts     ← ALL project content: cards + detail pages
└── app/
    ├── page.tsx                    home page
    ├── layout.tsx                  fonts + site metadata
    ├── globals.css                 design tokens (colours, type, components)
    ├── about/page.tsx              long-form about page
    ├── projects/page.tsx           all-projects index
    ├── projects/[slug]/page.tsx    project detail template
    └── components/                 hero, about, experience, skills,
                                    projects, contact, nav, footer,
                                    projectbody (renders detail pages)
public/
├── AlbertAddoResume.pdf
└── img/                            all project figures and photos
```

**You should almost never need to edit a component.** Content lives in
`src/data/`.

---

## Adding a project

Append an object to the `projects` array in `src/data/projects.ts`. The card,
the detail page, the contents rail, and the prev/next links all generate
themselves. Drop any figures into `public/img/`.

Available block kinds inside a section:

| Kind       | Use                                                                  |
| ---------- | -------------------------------------------------------------------- |
| `prose`    | A paragraph.                                                         |
| `list`     | Bullets. Add `ordered: true` for a numbered list.                    |
| `figure`   | One image plus caption. Add `contain: true` for plots and CAD.       |
| `figures`  | Two images side by side.                                             |
| `table`    | `head[]` and `rows[][]`. Add `highlight: n` to shade the chosen row. |
| `equation` | Monospaced equation block.                                           |
| `callout`  | Amber-ruled aside for the takeaway.                                  |

Set `featured: true` to put a project on the home page. Everything appears on
`/projects` regardless.

**Convention:** the featured projects are kept at the top of the array, so the
first six entries are the six on the home page and `/projects` opens with the
same six in the same order. Reordering is just moving a block; the cards, the
index, and the prev/next links all follow automatically.

---

## Design system

Tokens are CSS variables at the top of `src/app/globals.css`.

- **Paper** `#F4F6F8` · **Ink** `#0E141B` · **Navy** `#153D63` · **Amber**
  `#C2571A` (annotation only)
- **Sora** for display, **Inter** for body, **IBM Plex Mono** for every number,
  label, and caption
- Utility classes: `.panel`, `.stat`, `.chip`, `.figure-frame`, `.data-table`,
  `.equation`, `.callout`, `.section-kicker`, `.rule-label`

Fonts are self-hosted through `@fontsource`, so the build works offline and no
request goes to Google on page load.

---

## A note on `npm audit`

This project pins `next@^15.5.22` and uses an `overrides` block to force
patched `sharp` and `postcss` into the tree. As shipped, `npm audit` reports
zero vulnerabilities.

If a future advisory appears, **do not run `npm audit fix --force`.** npm
resolves Next.js advisories by proposing a downgrade to `next@9.3.3`, a
release from 2020 that would not build this project at all. Instead, bump the
specific package: `npm install next@latest`, then rebuild and check the site
still renders.

The deprecation warnings you may see during `npm install` (`rimraf`, `glob`,
`inflight`, `@humanwhocodes/*`) come from transitive build-time dependencies.
They are not shipped to browsers and are safe to ignore.

---

## Deploying

See **`DEPLOY.md`** for the complete walkthrough, written for the GitHub
account `bertkaddo` and the repository `albert-portfolio`: replacing the
placeholders, committing under the right identity, clearing stale Keychain
credentials, creating the repo, importing to Vercel, and troubleshooting.
