> English version: [README_EN.md](README_EN.md)

---

<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="EC LAB — 个人 UI 设计实验库">
</p>

<p align="center">
  <a href="https://ec.edsionc.top" target="_blank"><strong>ec.edsionc.top</strong></a> · 单文件 HTML/CSS/JS 实验 · 打开即用，复制即改
</p>

---

## 这是什么

**EC LAB** 是我存放 UI 灵感的实验库。玻璃拟态、液态动效、像素风、翻页便签、面孔转场……凡是让我觉得"这个有意思"的设计想法，我都会做成一版纯静态 demo 放进来。

每个项目都是**单个 HTML 文件**，没有框架、没有 CDN、没有打包步骤。你可以直接打开、阅读源码、复制喜欢的片段到自己的项目里。

<p align="center">
  <img src="./assets/readme/showcase.png" width="100%" alt="EC LAB 项目展示墙：8 个单文件前端实验的预览图">
</p>

## 怎么使用

每个项目文件夹只有三样东西：

```
project-name/
├── preview.html   ← 完整的 HTML/CSS/JS，自带样式 + 交互
├── meta.json      ← 提示词和设计 token 元数据
└── README.md      ← 设计说明
```

**直接用：**

1. 打开 `preview.html`
2. 选中你喜欢的代码片段
3. 复制粘贴到自己的项目
4. 改 CSS 变量 `var(--xxx)` 就能换主题色

**作为 AI 参考：**

- `meta.json` 里的 `prompt` / `html_prompt` 可以直接喂给 GPT / Claude / Cursor，让 AI 照着风格生成新页面
- `css` 字段里的设计 token（颜色、字体、圆角、阴影）可以直接复用

## 项目列表

| # | 项目 | 风格关键词 |
|---|------|-----------|
| 01 | EC Global Payments Hero | 黑色毛玻璃、3D 球体、金色粒子 |
| 02 | Ostraka UI Cards | 类纸纹理、等宽字体、复古终端 |
| 03 | EC LAB Charging Progress | 液态进度、玻璃拟态、贝塞尔曲线 |
| 04 | EC Blue Glass Triptych | 蓝色玻璃、三列视差、弥散光晕 |
| 05 | EC Flip Word Notes | 翻页便签、分栏笔记、弹性过渡 |
| 06 | Pixel Icon Library | 像素图标、即时搜索、网格瀑布 |
| 07 | Fluid Interactive Cards | 液态渐变、流体变形、动态光晕 |
| 08 | Visual Notes Magnifier | 放大渐变、悬浮面板、光影映射 |
| 09 | Craft Family Design System | 玻璃拟态、氛围光、Dock 导航 |
| 10 | Code-G Artifact | 滚动转场、面孔入口、3D 视差 |

## 本地预览

```bash
# 方式 1：Python（推荐）
python3 -m http.server 4173

# 方式 2：直接打开 index.html
# 部分项目通过 file:// 协议加载 meta.json 可能不完整
```

然后访问 `http://localhost:4173/index.html`。

## 技术说明

- **零依赖**：无 CDN、无框架、无打包工具，浏览器原生实现
- **纯静态**：可部署到 GitHub Pages、Cloudflare Pages、Netlify、Vercel 或任意静态服务器
- **可二次开发**：CSS 变量集中在 `:root`，改一个值全站生效
- **响应式**：所有项目在桌面和移动端都做了适配

---

<p align="center">
  ⭐ 喜欢就点个 Star · 🔁 欢迎 Fork 改着玩
</p>

