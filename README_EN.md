> 中文版: [README.md](README.md)

---

# EC LAB — My Personal UI Design Portfolio

Hey, welcome to my little design corner 👋

This is where I keep all the UI experiments I find interesting — glassmorphism, liquid animations, pixel art, magnifier light effects, you name it. Whenever a design idea makes me go *"oh, this is cool"*, I build a static demo of it and drop it here. Every project lives in a single HTML file — no frameworks, no CDN, no build step. **Open it, read the code, copy what you like.**

> 💡 If you also like to tinker with UI, feel free to browse. Found something you like? Just fork or copy it.
> 🎨 Live preview: [**ec.edsionc.top**](https://ec.edsionc.top)
> ⭐ Drop a star if you enjoy the work

---

## How to use the code here

Each project folder has just three files:

```
project-name/
├── preview.html   ← Complete HTML/CSS/JS with styles and interactions
├── meta.json      ← Prompt and design token metadata
└── README.md      ← Design notes (optional)
```

**Just use it:**
1. Open `preview.html` and pick the part you like
2. Copy & paste it into your own project
3. Want to recolor it? Search for `var(--xxx)` in the CSS and change a few variables

**Use it as a reference:**
- **Prompts**: Every `meta.json` `prompt` field is ready to feed to GPT / Claude / Cursor — the AI will generate new pages in the same style for you
- **CSS Tokens**: Colors, fonts, spacing, radii, shadows — all named and ready to copy

---

## Projects

| # | Project | Style Keywords |
|---|---------|----------------|
| 01 | EC Global Payments Hero | Dark glassmorphism, 3D sphere, gold particles |
| 02 | Ostraka UI Cards | Paper texture, monospace, retro terminal |
| 03 | EC LAB Charging Progress | Liquid progress, glassmorphism, Bezier curves |
| 04 | EC Blue Glass Triptych | Blue glass, triptych parallax, diffused glow |
| 05 | EC Flip Word Notes | Flip cards, split notes, elastic transitions |
| 06 | Pixel Icon Library | Pixel icons, instant search, masonry grid |
| 07 | Fluid Interactive Cards | Fluid gradient, morphing blobs, dynamic glow |
| 08 | Visual Notes Magnifier | Magnifier gradient, floating panels, light mapping |
| 09 | Craft Family Design System | Glassmorphism, ambient light, Dock navigation |

---

## Local preview

```bash
# Option 1: Python (easiest)
python3 -m http.server 4173

# Option 2: Just open it
# Double-click index.html (some project prompts may not load fully)
```

Then open `http://localhost:4173/index.html`.

---

## Tech notes

- **Zero dependencies**: no CDN, no frameworks, no build tools — just vanilla browser
- **Pure static**: deploy anywhere — GitHub Pages, Cloudflare Pages, Netlify, Vercel, or any static host
- **Hackable**: CSS variables are centralized in `:root` — change one value, the whole theme updates
- **Responsive**: every project works on desktop and mobile

---

## If you like what you see

- ⭐ Star the repo
- 🔁 Fork it and remix
- 🐦 Send me screenshots of your own work — happy to chat design anytime

— Let's make UI a little more fun.
