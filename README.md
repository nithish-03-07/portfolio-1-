# Portfolio Template — Setup Guide

A single-page, dark-themed portfolio with an interactive particle field,
a custom trailing cursor, and a cutout hero photo. Pure HTML/CSS/JS —
no build step, no framework, no dependencies to install. One external
script is loaded from a CDN at runtime (see "Requirements" below).

---

## 1. Quick start

1. Unzip the template.
2. Open `index.html` directly in a browser — that's it, it works locally
   with no server needed.
3. To rebrand it, open **`assets/config.js`** and edit the values there.
   You do not need to touch `index.html` for basic customization.

---

## 2. Folder structure

```
portfolio/
├── index.html          ← the entire site (structure + styles + behavior)
├── README.md            ← this file
└── assets/
    ├── config.js         ← EDIT THIS to rebrand: name, links, colors, particles
    ├── hero.png           ← cutout portrait used in the hero banner
    ├── profile.png         ← portrait used in the About section
    ├── resume.pdf           ← your resume/CV, linked from nav + hero + contact
    ├── project-*.png         ← project screenshot images
```

---

## 3. Customizing with `assets/config.js`

Everything you're most likely to change lives in this one file, grouped
into four sections. Open it in any text editor.

### `content` — text on the page
Name, tagline, greeting, email/phone/GitHub *display text*, location,
resume download filename, footer copyright line.

### `links` — where things point
The actual `mailto:`, `tel:`, GitHub URL, and resume file path.
(Kept separate from `content` because the *displayed* text and the
*actual* link are often different — e.g. you might show "Nithish-03-07"
but link to a longer GitHub URL.)

### `colors` — site palette
Three CSS variables control the whole theme:
- `bg` — main background
- `bgSoft` — panel/section background
- `accent` — buttons, underlines, hover highlights

Change `accent` alone for a quick full-site color swap (e.g. to a brand
blue or green) without touching anything else.

### `particles` — the animated field
Two independent particle instances:
- `hero` — the denser field inside the top banner
- `bg` — the sparser field fixed behind the rest of the page

Each accepts:
| Key            | What it does                                             |
|----------------|-----------------------------------------------------------|
| `count`        | Number of particles                                       |
| `color`        | Particle + connecting-line color                           |
| `speedMin/Max` | Range of drift speed (particles vary randomly in between)  |
| `grabDistance` | How close your cursor must get before a line snaps to it   |
| `linkDistance` | How close two particles must be to draw a line between them|

Leave any field out to keep the built-in default.

**After editing `config.js`, just refresh the page** — no build/compile
step required.

---

## 4. Swapping images

- **Hero portrait** (`assets/hero.png`): should be a transparent-background
  cutout (PNG). The image is already masked with a soft feather in CSS
  (`.hero-portrait`) so a clean cutout blends into the dark background
  automatically — you don't need to manually fade the edges yourself.
- **About-section photo** (`assets/profile.png`): same idea, smaller
  usage — a square or portrait-oriented photo works best.
- **Project screenshots** (`assets/project-*.png`): swap in your own
  images at the same filenames, or update the `<img src="...">` paths
  in the Projects section of `index.html` if you rename files.
- **Resume** (`assets/resume.pdf`): replace with your own PDF. The
  filename it downloads as (not the file itself) is set by
  `content.resumeDownloadName` in `config.js`.

---

## 5. Editing structural content (projects, skills, experience)

Things like the list of projects, skills, and work-experience entries
are HTML blocks inside `index.html` (search for `<section id="projects">`,
`id="skills"`, `id="experience"`), since they're structural, not simple
key/value text — `config.js` intentionally doesn't try to templatize
these to keep the file simple. Copy an existing project/skill block and
edit its text/links/image to add a new entry.

---

## 6. Requirements

- The particle effect loads **tsParticles** from a CDN
  (`cdn.jsdelivr.net`) via a `<script>` tag in `index.html`. An internet
  connection is required for the particle animation to appear; the rest
  of the site works fully offline.
- No Node/npm, no build tools, no package installation needed.

---

## 7. Browser support

Built and tested against current versions of Chrome, Edge, and Firefox.
The custom trailing cursor and hover-grab particle effect are
automatically disabled on touch devices (phones/tablets) via a
`pointer: fine` media query, since a cursor effect doesn't apply there —
those users get the static layout with normal touch scrolling instead.

---

## 8. License

This template is provided for personal or commercial project use.
Replace the resume, images, and personal details with your own before
publishing — the sample content (name, email, projects) is a
placeholder from the original build and should not be reused as-is.
