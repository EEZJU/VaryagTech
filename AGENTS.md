# AGENTS.md — VaryagTech Website

## 项目概述

瓦良格（杭州）智慧技术有限责任公司官网（成立于 2026 年 05 月，杭州市余杭区）。Astro 5 + React 19 + Tailwind CSS 4 单页应用，静态部署到 GitHub Pages（域名 varyagtech.com）。

## 技术栈

- **框架**: Astro 5.16（静态生成）
- **UI**: React 19 + Tailwind CSS 4.1
- **图标**: lucide-react（封装于 `ProductIcon.tsx`）
- **构建**: Vite（通过 Astro 内置）+ `@tailwindcss/vite`
- **sitemap**: `@astrojs/sitemap`

## 常用命令

```bash
npm run dev      # 开发服务器 localhost:4321
npm run build    # 构建到 dist/（含 sitemap-index.xml）
npm run preview  # 预览构建产物
npm run astro    # 直接调用 astro CLI
```

## 架构要点

- **内容配置**: 所有公司信息、产品数据、导航、招聘职位集中在 `src/config/site.ts`，单一 export 源
  - 主要 export：`SITE`、`COMPANY_INFO`、`SOCIAL_LINKS`、`NAV_ITEMS`、`PARTNERS`、`PRODUCTS`（按 software/plc/switch 分组）、`ADVANTAGES`、`CAREERS`
- **React 组件 hydration**：
  - `client:load` — 立即 hydrate（如需要）
  - `client:only="react"` — 仅客户端渲染（`JobFilter`，React 19 兼容性问题组件）
- **首页构成**: `index.astro` 组合 `Hero → Features → Stats → Testimonials → CTA`
- **Tailwind CSS 4**: 通过 `@tailwindcss/vite` 插件接入，使用 `@import "tailwindcss"` + `@theme {}` 指令定义主题变量（非传统 `tailwind.config.js`）；主题色定义在 `src/styles/global.css`

## 开发注意事项

- **React 19 兼容性**: `JobFilter`（`src/components/react/JobFilter.tsx`）已改用 `client:only="react"`。避免混用 `client:load` 和 React 19 hooks
- **图片处理**: 产品图片在 `src/images/` 目录，通过 Astro 资产导入（`import img from "../images/products/xxx.webp"`），不是放在 `public/`。当前已有 16 张 WebP（10 产品 + 6 行业），位于 `src/images/products/` 和 `src/images/capabilities/`
  - 转换脚本：`node scripts/convert-to-webp.mjs`（需先 `npm install sharp`，依赖已包含在 package.json）
- **图标系统**: `src/components/ui/ProductIcon.tsx` 封装了 lucide-react 图标，提供类型安全的 `IconName` 类型（100+ 预设名称），导出 `Icon` 组件
- **表单实现**: 两种模式并存：
  - `contact.astro` 使用原生 HTML 表单 + vanilla JS（`<script>` 内联处理 submit）
  - `careers.astro` 使用 React `JobFilter` 组件（`client:only="react"`）
- **地图组件**: `src/components/ui/Map.astro` 使用 OpenStreetMap embed iframe，硬编码坐标（`30.0568, 119.8969`），与 `COMPANY_INFO.address` 仅用于外链查询
- **公司信息**: 修改 `src/config/site.ts` 中的 `COMPANY_INFO.name`、`COMPANY_INFO.founded`、`PRODUCTS`、`CAREERS.jobs` 等即可更新全站
- **保留的副本文件**: 根目录和 `src/` 中存在若干 `*_copy.astro` / `*_copy.ts` 文件（如 `about_copy.astro`、`site_copy.ts`、`Hero_copy.astro`、`Footer_copy.astro`），未被任何代码引用，是旧版本遗留，删除前请确认无引用

## 工具链注意

- **无 lint/format 配置**: 没有 ESLint、Prettier 等代码质量工具
- **无 CI 工作流**: `.github/` 目录为空，部署通过推送 `gh-pages` 分支触发 GitHub Pages
- **无测试套件**: 没有 `*.test.*` 或 `*.spec.*` 文件
- **TypeScript**: `tsconfig.json` extends `astro/tsconfigs/strict`；`allowJs: true` 允许 `.mjs` 脚本
- **包管理**: `package-lock.json` 已存在，使用 npm

## 文件结构

```
src/
├── config/site.ts             # 全局配置（公司、产品、招聘）
├── components/
│   ├── home/                  # Astro 首页组件（Hero/Features/Stats/Testimonials/CTA）
│   ├── react/                 # React 交互组件（JobFilter、RFQForm）
│   └── ui/                    # 通用 UI 组件（Navbar/Footer/Map/ProductIcon）
├── layouts/Layout.astro       # 全局布局（中文 lang，挂载 Navbar + Footer）
├── pages/                     # 路由页面
│   ├── index.astro            # 首页
│   ├── products.astro         # 产品中心
│   ├── capabilities.astro     # 能力展示
│   ├── careers.astro          # 加入我们
│   ├── about.astro            # 关于我们
│   └── contact.astro          # 联系我们
├── images/                    # 图片资产（products/、capabilities/）
└── styles/global.css          # Tailwind 4 入口 + 主题变量

public/
├── logo.png / logo_min.png    # Logo（favicon 使用 logo_min.png）
├── favicon.ico
└── images/                    # 空目录

scripts/
└── convert-to-webp.mjs        # PNG → WebP 转换脚本（已内置 sharp 依赖）

astro.config.mjs               # Astro 配置（react + tailwindcss + sitemap）
tsconfig.json                  # TS 配置
CNAME                          # www.varyagtech.com
```

## 页面路由

| 路径 | 文件 | 说明 |
|------|------|------|
| `/` | `index.astro` | 首页：Hero + 核心业务 + Stats + 技术依托 + 合作伙伴 + CTA |
| `/products` | `products.astro` | 产品中心：软件、E3 PLC、X2 PLC、网络设备 |
| `/capabilities` | `capabilities.astro` | 能力展示：核心技术、核心业务、应用行业、服务流程 |
| `/careers` | `careers.astro` | 加入我们：React `JobFilter` 过滤 + HR 邮箱 |
| `/about` | `about.astro` | 关于我们：发展历程（2026 + 现在）、公司概览（2 项）、技术依托（3 卡）、核心团队（3 卡） |
| `/contact` | `contact.astro` | 联系方式 + 在线询价表单（vanilla JS） |

## CI / 部署

- 推送到 `gh-pages` 分支触发 GitHub Pages 部署
- `CNAME` 内容：`www.varyagtech.com`
- 构建命令：`npm run build`，产物在 `dist/`，自动生成 `sitemap-index.xml`
- Node 版本：20