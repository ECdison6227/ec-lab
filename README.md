# EC LAB — 设计作品集

个人设计作品集与 UI 灵感存档。

- **线上地址**: https://ec.edsionc.top
- **GitHub**: https://github.com/ECdison6227/ec-lab

纯静态站点，无需后端。

---

## 本地预览

```bash
python3 server.py 4173
# 打开 http://localhost:4173/index.html
```

---

## 项目列表

| # | 项目名称 | 风格关键词 |
|---|---------|-----------|
| 01 | EC Global Payments Hero | 黑色毛玻璃、3D 球体、金色粒子 |
| 02 | Ostraka UI Cards | 类纸纹理、等宽字体、复古终端 |
| 03 | EC LAB Charging Progress | 液态进度、玻璃拟态、贝塞尔曲线 |
| 04 | EC Blue Glass Triptych | 蓝色玻璃、三列视差、弥散光晕 |
| 05 | EC Flip Word Notes | 翻页便签、分栏笔记、弹性过渡 |
| 06 | Pixel Icon Library | 像素图标、即时搜索、网格瀑布 |
| 07 | Fluid Interactive Cards | 液态渐变、流体变形、动态光晕 |
| 08 | Visual Notes Magnifier | 放大渐变、悬浮面板、光影映射 |
| 09 | Craft Family Design System | 玻璃拟态、氛围光、Dock 导航 |

每个项目都是单文件 HTML/CSS/JS，无 CDN、无框架，可直接查看源码。

---

## 技术说明

- 每个 `preview.html` 都是**单文件自包含**：无 CDN、无框架、无外部资源。
- `index.html` 运行时拉取 `projects.json` 和各个 `meta.json`。
- 如果 `projects.json` 加载失败，`index.html` 会回退到内联项目列表。

---

*English version: [README_EN.md](README_EN.md)*
