# PalmistryPath — Project Reference

This file is a permanent reference document. Claude Code should read it at the start of every session to stay aligned with the project goals and conventions.

---

## Project Goal

An educational palmistry website covering beginner-to-advanced palm reading. Content is organized by skill level so visitors can progress from first principles through nuanced interpretation. The site will eventually be monetized (e.g., courses, guides, or affiliate content), but the priority in early phases is building a trustworthy, well-structured body of content.

---

## Domain

**palmistrypath.com**

---

## Tech Stack

| Layer | Tool |
|---|---|
| Site generator | [Astro](https://astro.build) (static output) |
| Content format | Markdown (`.md`) files with YAML frontmatter |
| Hosting | Cloudflare Pages |
| Version control | GitHub |
| Language | TypeScript (strict mode) |

Astro was chosen for its zero-JS-by-default approach, excellent Markdown support, and fast static output — ideal for a content-heavy site that doesn't need a heavy framework.

---

## Content Philosophy

- **Ground all content in established traditions**: Indian/Hindu palmistry, Chinese palmistry, and Western palmistry (especially Cheiro's system).
- **Flag disagreements explicitly**: when traditions interpret the same feature differently, say so clearly rather than picking one and presenting it as universal truth.
- **Never invent meanings**: if a meaning can't be sourced to a tradition, don't include it.
- **Tone**: educational, respectful, and culturally sensitive. Avoid mystical hype or unfounded claims.

---

## Folder Structure

```
palmistry-site/
├── public/                  # Static assets served as-is (favicons, images)
├── src/
│   ├── assets/              # Processed assets (images, fonts)
│   ├── components/          # Reusable Astro components
│   ├── content/
│   │   └── blog/            # Palmistry articles (content collection)
│   │       ├── beginner/    # Entry-level articles
│   │       ├── intermediate/# Mid-level articles
│   │       └── advanced/    # Deep-dive articles
│   ├── layouts/             # Page layout templates
│   ├── pages/               # Route pages (.astro files)
│   ├── styles/              # Global CSS
│   ├── consts.ts            # Site-wide constants (title, description)
│   └── content.config.ts    # Content collection schema definition
├── PROJECT.md               # This file
├── astro.config.mjs         # Astro configuration
├── tsconfig.json            # TypeScript configuration (strict)
└── package.json
```

Articles are written as Markdown files inside the appropriate skill-level subfolder. The content collection schema (in `content.config.ts`) validates frontmatter fields: `title`, `description`, `pubDate`, optional `updatedDate`, and optional `heroImage`.

---

## Conventions

- **HTML**: Use semantic elements (`<article>`, `<nav>`, `<header>`, `<main>`, `<section>`, `<aside>`) over generic `<div>` wrappers.
- **Accessibility**: Every image needs an `alt` attribute. Use proper heading hierarchy (`h1` → `h2` → `h3`). Ensure sufficient colour contrast.
- **Responsive design**: Mobile-first. Design for small screens first, then enhance for larger viewports using CSS.
- **Dependencies**: Keep them minimal. Prefer native browser features and Astro's built-in capabilities over adding npm packages.
- **TypeScript**: Strict mode is enabled. All `.ts` and `.astro` files should be fully typed.
- **Comments in code**: Only add comments when the *why* is non-obvious. Avoid restating what the code already says.

---

## Branding

| Property | Value |
|---|---|
| Site name | Palmistry Path |
| Tagline | "Read the lines. Discover the path." |
| Domain | palmistrypath.com |
| Aesthetic | Mystical and atmospheric — esoteric, evocative, ancient-arts feel |
| Tone | Educational and respectful; grounded and informative, not mystical hype |

**Colour palette (dark theme — candlelit/occult mood):**

| CSS variable | Hex | Role |
|---|---|---|
| `--color-bg` | `#0d0a1a` | Page background — deep midnight indigo |
| `--color-header-bg` | `#08060f` | Header & footer — fractionally darker, blends with bg |
| `--color-text` | `#e2d9c5` | Body text — warm cream (14:1 contrast) |
| `--color-heading` | `#e8e0d0` | Heading text — slightly brighter warm cream |
| `--accent` | `#c9a96e` | Primary gold — links, active nav, decorative elements |
| `--accent-light` | `#e0c07e` | Gold hover state |
| `--color-text-muted` | `#8c84a8` | Muted text — dates, captions (5.8:1 contrast) |
| `--color-nav-text` | `#c9b99a` | Nav links — warm off-white gold |
| `--color-nav-hover` | `#c9a96e` | Active / hover nav |

**Fonts (Google Fonts, loaded via Astro's font provider):**

| Role | Font | CSS variable |
|---|---|---|
| Headings | Cinzel | `--font-cinzel` |
| Body | Lora | `--font-lora` |

---

## Page Structure

| Page | Path | Notes |
|---|---|---|
| Home | `/` | Hero + intro copy |
| Blog | `/blog` | Article listing |
| About | `/about` | 2-paragraph project stub |
| Glossary | `/glossary` | Alphabetical term reference (stub) |

---

## Product Vision

### What Palmistry Path Is

Palmistry Path is an **educational learning platform** that teaches palmistry as a structured, observational, and interpretive practice. It is grounded in established traditions — Indian (Hasta Samudrika Shastra), Chinese palmistry, and Western palmistry (especially Cheiro's system) — and presents the subject with intellectual honesty.

It is **not** a fortune-telling service. Content should consistently reflect that palmistry is a system of pattern recognition, cultural history, and self-reflection — not a predictive science or magical art.

---

### Tone Principles

- **Educational** — structured, clear, progressively deeper
- **Grounded** — rooted in tradition and source material, not invention
- **Curious** — treats the subject with genuine interest, not ironic detachment
- **Respectful** — honours the cultural origins of each tradition
- **Atmospheric** — the site's mood is mystical, but the writing is not woo-woo or salesy

---

### Phrasing Guidelines

These apply to all content written for or generated on behalf of this site:

| Instead of… | Use… |
|---|---|
| "this line means…" | "traditionally associated with…" |
| "this indicates…" | "often interpreted as…" |
| "this shows that…" | "may suggest…" |

Additional rules:
- Always note when traditions disagree on the meaning of a feature
- Never claim palmistry predicts the future
- Never suggest palmistry replaces professional medical, legal, or financial advice

---

### Eventual Product Features (Long-Term Roadmap — Do Not Build Yet)

These are directions, not current tasks. Nothing here should be built until the content base justifies it.

- Lesson library organised by category and difficulty level
- Interactive hand map with clickable regions linked to lessons
- Practice and interpretation exercises — **not** multiple-choice quizzes (palmistry has no single correct answers; exercises should develop observational skill)
- Glossary cross-linked from lesson content
- Reading journal for users to save personal observations
- Progress tracking across lessons
- Possible future membership tier

---

### Build Philosophy

The site evolves in phases:

1. **Content first** — build a trustworthy, well-structured body of articles
2. **Structure second** — organise content into a coherent learning path
3. **Interactivity third** — add exercises, maps, and cross-linking once the content supports them
4. **Accounts and membership last** — only when there is something worth gating

Do not add features without earned content underneath them.

---

### Things Explicitly NOT To Do (Until Much Later, If Ever)

- Do not add a pricing or membership page until there is something to sell
- Do not add multiple-choice quizzes with "correct" answers
- Do not add user accounts or authentication until the content base justifies it
- Do not add fake testimonials, fake user counts, or unearned social proof
- Do not make claims about palmistry's predictive accuracy

---

### Disclaimer (To Add to Footer or About Page in a Future Session)

> *Palmistry Path is for education, personal reflection, and exploration of a centuries-old interpretive tradition. It is not a substitute for professional medical, legal, or financial advice.*

---

## Working Agreement with the User

The user is new to web development. Claude Code should:

1. **Explain choices** — briefly describe *why* before doing something non-obvious.
2. **Ask before major changes** — any decision that affects architecture, naming conventions, or the content model should be confirmed first.
3. **Prefer editing existing files** over creating new ones when the task allows it.
4. **Keep responses concise** — avoid lengthy preamble; get to the result efficiently to conserve tokens and the user's time.
5. **Read this file at session start** — before writing any code, check PROJECT.md to stay aligned with the above.
