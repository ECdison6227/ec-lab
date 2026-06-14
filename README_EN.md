*中文版: [README.md](README.md)*

---

# EC LAB — Design Portfolio

Personal design portfolio & UI inspiration archive.

- **Live site**: https://ec.edsionc.top
- **GitHub**: https://github.com/ECdison6227/ec-lab

Pure static site. No backend required.

---

## Local Preview

```bash
python3 server.py 4173
# Open http://localhost:4173/index.html
```

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

Each project is a single HTML/CSS/JS file. No CDN, no frameworks. View source directly.

---

## Tech Notes

- Each `preview.html` is a **single self-contained file**: no CDN, no frameworks, no external assets.
- `index.html` fetches `projects.json` and individual `meta.json` files at runtime.
- If `projects.json` fails to load, `index.html` falls back to an inline project list.

---
