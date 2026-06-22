# 瓦良格（杭州）智慧技术有限责任公司官网

工业互联网解决方案提供商官方网站，基于 Astro + React + Tailwind CSS 构建。

公司成立于 2026 年 05 月，位于浙江省杭州市余杭区，技术依托于浙江大学电气学院、浙江大学华南工业技术研究院、浙江大学华硕实验室科研团队。

## 技术栈

- **框架**: Astro 5.x（静态生成）
- **UI**: React 19 + Tailwind CSS 4
- **图标**: lucide-react
- **动画**: Framer Motion
- **构建**: Vite（通过 Astro 内置）

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev      # localhost:4321

# 构建生产版本
npm run build    # 产物输出到 dist/，含 sitemap-index.xml

# 预览生产版本
npm run preview
```

## 核心数据

以下数据集中在 `src/config/site.ts` 一处维护，全站自动更新：

| 数据 | export | 字段 |
|------|--------|------|
| 公司信息 | `COMPANY_INFO` | name、nameEn、nameEnFull、founded、email、phone、address |
| 网站元信息 | `SITE` | title、description、url、author |
| 导航菜单 | `NAV_ITEMS` | 首页、产品中心、能力展示、加入我们、关于我们 |
| 合作伙伴 | `PARTNERS` | 正泰集团、柯尔照明、浙江大学、华南工业技术研究院 |
| 产品列表 | `PRODUCTS` | software（WLG-IDE）、plc（VAR-P-500/500D/500U/X-100/X-200）、switch（WAS-8-1000、智能体交换机控制器） |
| 核心优势 | `ADVANTAGES` | 30+ 项发明专利、0.00003ms 时间精度、确定性通信、浙大技术团队 |
| 招聘信息 | `CAREERS` | 6 个岗位，3 个部门（研发部/产品部/销售部/技术支持），2 个地点（杭州/远程） |

## 项目结构

```
src/
├── components/
│   ├── home/      # 首页组件（Hero/Features/Stats/Testimonials/CTA）
│   ├── react/     # React 交互组件（JobFilter、RFQForm）
│   └── ui/        # 通用 UI 组件（Navbar/Footer/Map/ProductIcon）
├── config/
│   └── site.ts    # 单一数据源：公司、产品、招聘
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro         # 首页
│   ├── products.astro      # 产品中心
│   ├── capabilities.astro  # 能力展示
│   ├── careers.astro       # 加入我们
│   ├── about.astro         # 关于我们
│   └── contact.astro       # 联系我们
├── images/
│   ├── products/     # 10 张 WebP 产品渲染图
│   └── capabilities/ # 6 张 WebP 行业应用图
└── styles/
    └── global.css    # Tailwind 4 入口 + @theme 主题变量

public/
├── logo.png          # Logo
├── logo_min.png      # Logo（也作 favicon）
└── favicon.ico

scripts/
└── convert-to-webp.mjs  # PNG → WebP 转换脚本（已内置 sharp 依赖）
```

## 页面

| 路径 | 页面 | 主要内容 |
|------|------|----------|
| `/` | 首页 | Hero、核心业务 4 卡、统计 4 项、技术依托浙大、合作伙伴、CTA |
| `/products` | 产品中心 | 软件产品 4 项、VAR-P-500 系列、VAR-X 系列、网络设备 |
| `/capabilities` | 能力展示 | 核心技术 4 项、核心业务 6 项、6 大行业、服务流程 6 步 |
| `/careers` | 加入我们 | React `JobFilter` 过滤（部门 + 地点）、HR 邮箱 |
| `/about` | 关于我们 | 发展历程（2026 公司成立 + 现在技术攻坚）、公司概览、技术依托 3 卡、核心团队 3 卡 |
| `/contact` | 联系我们 | 联系方式 + 在线询价表单（原生 HTML + vanilla JS） |

## 部署

- 推送到 `gh-pages` 分支触发 GitHub Pages 部署
- `CNAME`：`www.varyagtech.com`
- Node 版本：20

## 开发约定

- 修改 `src/config/site.ts` 中的 `SITE`、`COMPANY_INFO`、`PRODUCTS`、`CAREERS` 等 export 即可更新全站
- 新增产品图：放入 `src/images/products/`，通过 `import xxx from "../images/products/xxx.webp"` 引用
- 新增图标：先在 `src/components/ui/ProductIcon.tsx` 中导入 lucide-react 图标并加入 `IconName` 联合类型和 `iconMap`
- React 19 兼容性：交互组件使用 `client:only="react"` 而非 `client:load`

---

## 任务追踪

### 已完成

- ✅ **获取真实产品图片**：16 项全部完成（10 个产品 + 6 个行业）
- ✅ **图片格式**：全部转换为 WebP（质量 80%）
- ✅ **公司主体更新**：更名为瓦良格（杭州）智慧技术有限责任公司（2026 年 05 月成立）
- ✅ **资质展示清理**：移除国家高新技术企业相关内容

### 进行中

- 🔄 **统计指标更新**：首页 Stats 现为 10+ 年行业经验 / 30+ 发明专利 / 10+ 核心产品 / 100% 浙大技术团队

### 未完成

- [ ] **图片优化**：懒加载、响应式 srcset
- [ ] **招聘投递入口**：JobFilter 中"立即申请"按钮当前被注释