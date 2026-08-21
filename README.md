# Glumčević — Static Website

A modern, responsive static website concept for **Glumčević**, a certified REHAU partner focused on PVC and aluminium joinery.

## Stack

- HTML5
- Tailwind CSS via CDN
- Swiper.js
- Vanilla JavaScript
- No backend
- No build step
- Static-hosting friendly (e.g. GitHub Pages)

## Project structure

```text
.
├── index.html
├── README.md
└── assets/
    ├── images/
    │   ├── hero/
    │   │   ├── hero-1.*
    │   │   ├── hero-2.*
    │   │   └── hero-3.*
    │   ├── prozori/
    │   │   ├── prozori-1.*
    │   │   ├── prozori-2.*
    │   │   ├── prozori-3.*
    │   │   └── prozori-4.*
    │   └── vrata/
    │       ├── vrata-1.*
    │       ├── vrata-2.*
    │       └── vrata-3.*
    └── js/
        └── ...
```

## Recommended image dimensions

| Group | Filename pattern | Recommended size | Aspect |
|---|---|---:|---:|
| Hero | `hero-1`, `hero-2`, `hero-3` | 1920 × 1100 px | ~16:9 |
| PVC windows | `prozori-1` … `prozori-4` | 1200 × 900 px | 4:3 |
| PVC doors | `vrata-1` … `vrata-3` | 1000 × 1300 px | portrait |

Use high-quality photographs and export them as **WebP** where practical. Keep filenames stable so the HTML does not need to change when photographs are replaced.

## Brand colors

- Brand dark blue: `#3a4f89`
- Brand light blue: `#5b81a5`
- REHAU accent: `#dd0060`
- Raw aluminium: `#8a8f94`
- Door brown: `#8a6a52`
- Footer: `#26365f`

White remains the primary background for the PVC window section. Other sections use subtle variations of blue, grey and warm brown.

## Contact form

The contact form is frontend-only. It collects the user's choices and opens their local email client with a structured `mailto:` message. There is no backend or database dependency.

## Images

The repository can initially contain generated SVG placeholders. Replace them later with real photographs using the same filenames and dimensions/aspect ratios.

## Deployment

The project is designed to work as a static site without a custom Tailwind build pipeline.

For GitHub Pages, publish the repository (or the appropriate branch/folder) as a static site and make sure `index.html` is at the published root.

## Status

This is a working design/demo version. Content, spacing, photography, accessibility details and final copy can be refined after the overall structure is approved.
