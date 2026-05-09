# 杭州瓦良格智造有限公司官网

工业互联网解决方案提供商官方网站，基于 Astro + React + Tailwind CSS 构建。

## 技术栈

- **框架**: Astro 5.x
- **UI**: React 19 + Tailwind CSS 4
- **动画**: Framer Motion

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 项目结构

```
src/
├── components/     # 组件
│   ├── home/      # 首页组件
│   ├── react/    # React 组件
│   └── ui/       # UI 组件
├── config/        # 配置文件
├── layouts/      # 布局
├── pages/        # 页面
└── styles/       # 样式

public/
├── logo.png      # Logo
├── logo_min.png  # Logo
└── favicon.ico   # Favicon
```

## 页面

- 首页 `/`
- 产品中心 `/products`
- 能力展示 `/capabilities`
- 加入我们 `/careers`
- 关于我们 `/about`
- 联系我们 `/contact`

## 开发

修改配置文件 `src/config/site.ts` 可更新公司信息。

---

## TODO: 页面图片预留位任务

> 状态：已完成 | 更新日期：2026-05-09

### 已完成

- ✅ **获取真实产品图片**：16项全部完成（10个产品 + 6个行业）
- ✅ **图片格式**：全部转换为 WebP（质量 80%）

### 未完成

- [ ] **图片优化**：懒加载、响应式 srcset
