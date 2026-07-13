> English version: [README_EN.md](README_EN.md)

---

# EC LAB — 我的个人 UI 设计作品集

嗨，欢迎来到我的设计角落 👋

这里是我平时把玩各种 UI 灵感的存档库——玻璃拟态、液态动效、像素风、放大镜光影……凡是我觉得「这个有意思」的设计想法，我都会做一版纯静态的 demo 放进来。每一个项目都只用一个 HTML 文件，没有框架、没有 CDN、没有打包工具，**直接打开就能看，复制粘贴就能用**。

> 💡 如果你也是个喜欢折腾 UI 的朋友，欢迎来逛逛，看到喜欢的样式直接 fork / copy 走就行。
> 🎨 在线预览：[**ec.edsionc.top**](https://ec.edsionc.top)
> ⭐ 喜欢就点个 Star 呗～

---

## 怎么用这里的代码

每个项目文件夹里只有三样东西：

```
project-name/
├── preview.html   ← 完整的 HTML/CSS/JS，自带样式 + 交互
├── meta.json      ← 提示词和设计 token 元数据
└── README.md      ← 设计说明（可选）
```

**直接用：**
1. 打开 `preview.html`，选中你喜欢的某一块代码
2. 复制粘贴到自己的项目里
3. 想改成自己的主题色？搜 CSS 里的 `var(--xxx)` 改几个变量就行

**作为参考：**
- 提示词：每个 `meta.json` 的 `prompt` 字段可以直接喂给 GPT / Claude / Cursor，AI 就能照着风格给你生成新的页面
- CSS Tokens：色彩、字体、间距、圆角、阴影……全都命名好了，可以直接抄走

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
| 09 | Code-G Artifact | 滚动转场、面孔入口、3D 视差 |
| 09 | Craft Family Design System | 玻璃拟态、氛围光、Dock 导航 |

---

## 本地预览

```bash
# 方式 1：Python（最简单的）
python3 -m http.server 4173

# 方式 2：直接双击
# 打开 index.html 即可（部分项目提示词可能加载不全）
```

然后打开 `http://localhost:4173/index.html`。

---

## 技术说明

- **零依赖**：无 CDN、无框架、无打包工具，浏览器原生实现
- **纯静态**：可直接部署到 GitHub Pages、Cloudflare Pages、Netlify、Vercel 或任何静态服务器
- **可二次开发**：CSS 变量都集中在 `:root`，改一个值全站生效
- **响应式**：所有项目在桌面和移动端都做了适配

---

## 喜欢的话

- ⭐ 给仓库点个 Star
- 🔁 Fork 一份改改玩
- 🐦 看到好的设计截图欢迎发我：作品展示 / 私下交流都行

—— 一起把 UI 这件事做得更有意思一点。
