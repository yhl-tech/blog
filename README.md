# 亮仔 — personal site

VitePress site for 亮仔, a frontend engineer. The about page is a short bio. The projects page links only to public GitHub repositories under [yhl-tech](https://github.com/yhl-tech). The articles section is a real page with no posts yet.

The site copy is Chinese. This README is English so the repository is readable in a job search. VitePress does not publish it: `.vitepress/config.mts` sets `srcExclude` to `README.md`.

## Stack

- [VitePress](https://vitepress.dev/) 1.6 (Vue)
- pnpm (lockfile version 9)
- Node.js 18 or newer

## Run locally

```bash
pnpm install
pnpm docs:dev
```

VitePress prints the local URL (port 5173 unless that port is taken).

```bash
pnpm docs:build     # writes .vitepress/dist
pnpm docs:preview   # serves the production build
```

`pnpm docs:build` fails on broken internal links. Do not turn `ignoreDeadLinks` back on to hide them.

## Deploy on Vercel

There is no working public URL for this site. The homepage currently set on the GitHub repo, `https://blog-ten-omega-95.vercel.app`, returns 404. This README does not treat that host as the live site. Leave the GitHub website field empty until a new deployment responds.

`vercel.json` already sets:

| Setting | Value |
| --- | --- |
| Install command | `pnpm install` |
| Build command | `pnpm docs:build` |
| Output directory | `.vitepress/dist` |

Redeploy:

1. Import `https://github.com/yhl-tech/blog` in Vercel (framework preset Other is fine; the config file supplies the commands).
2. Deploy the default branch after the portfolio cleanup is merged.
3. Open the deployment URL Vercel assigns and confirm `/`, `/about/`, `/projects/`, and `/articles/` load.
4. Only then paste that URL into GitHub → Settings → General → Website.
5. Until step 4, clear `https://blog-ten-omega-95.vercel.app` from the website field.

## Content status

| Page | What is true today |
| --- | --- |
| Home | Name, short intro, and links to the three real pages. |
| About | Bio already in the repo. Contact is GitHub only. LinkedIn and X/Twitter are omitted because this repo does not publish those profiles. |
| Articles | No posts. The sidebar does not list titles that have no file. |
| Projects | [docFlow](https://github.com/yhl-tech/docFlow), [dataFactory](https://github.com/yhl-tech/dataFactory) with [dataFactory-server](https://github.com/yhl-tech/dataFactory-server), [xlcs](https://github.com/yhl-tech/xlcs), and this repo. No demo URLs. Descriptions follow each repo's README or package metadata. |

`public/favicon.ico` is not in the repo. The theme config does not point at one.

VitePress starter pages (`markdown-examples.md`, `api-examples.md`) are removed.

## Add a post

1. Add `articles/<slug>.md`.
2. Link it from `articles/index.md`.
3. If the articles section needs a sidebar, add that sidebar in `.vitepress/config.mts` only for files that exist.
4. Run `pnpm docs:build` before pushing.

## What not to commit

`.gitignore` covers dependencies, local env files, Vercel metadata, and generated output:

- `node_modules/`
- `.next/` (leftover Next.js output; this site does not use Next.js)
- `.vitepress/cache/`
- `.vitepress/dist/`
- `.vercel/`
