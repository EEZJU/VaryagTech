# AGENTS.md — VaryagTech Website

## 项目概述

杭州瓦良格智造有限公司官网。Astro 5 + React 19 + Tailwind CSS 4 单页应用。

## 技术栈

- **框架**: Astro 5.x（静态生成）
- **UI**: React 19 + Tailwind CSS 4
- **动画**: Framer Motion
- **构建**: Vite（通过 Astro 内置）

## 常用命令

```bash
npm run dev      # 开发服务器 localhost:4321
npm run build    # 构建到 dist/
npm run preview  # 预览构建产物
```

## 架构要点

- **内容配置**: 所有公司信息、产品数据、导航、招聘职位集中在 `src/config/site.ts`
- **React 组件 hydration**:
  - `client:load` — 立即 hydrate（Navbar 等）
  - `client:only="react"` — 仅客户端渲染（JobFilter 等 React 19 兼容性问题组件）
- **Tailwind CSS 4**: 通过 `@tailwindcss/vite` 插件接入，使用 `@import "tailwindcss"` + `@theme {}` 指令定义主题变量（非传统配置文件）

## 开发注意事项

- **React 19 兼容性**: 部分组件（JobFilter、RFQForm）已改用 `client:only="react"`。避免混用 `client:load` 和 React 19 hooks
- **产品图片**: 所有产品图片和行业图片已齐全（见 README 底部清单）
- **图片转换**: `scripts/convert-to-webp.mjs` — 需先 `npm install sharp`，运行 `node scripts/convert-to-webp.mjs` 将 `src/images/` 下的 PNG 转为 WebP（保持原分辨率，质量 80%）
- **公司信息**: 修改 `src/config/site.ts` 中的 `SITE`、`COMPANY_INFO`、`NAV_ITEMS`、`PRODUCTS`、`CAREERS` 等 export 即可更新

## 文件结构

```
src/
├── config/site.ts      # 全局配置
├── components/
│   ├── home/           # Astro 首页组件
│   ├── react/          # React 交互组件
│   └── ui/             # 通用 UI 组件
├── layouts/Layout.astro
├── pages/              # 路由页面
└── styles/global.css   # Tailwind 4 入口
```

## CI / 部署

- 推送到 `gh-pages` 分支触发 GitHub Pages 部署
- 构建命令：`npm run build`，产物在 `dist/`
- Node 版本：20

## 测试

无测试套件（无 `*.test.*` / `*.spec.*` 文件）
