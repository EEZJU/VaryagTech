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

> 状态：WIP | 创建日期：2026-04-28 | 更新日期：2026-05-09

### 内容变更记录

| 日期 | 变更内容 |
|------|----------|
| 2026-04-28 | 加入我们页面：JobFilter 从 client:load 改为 client:only="react"，修复 React 19 点击交互问题 |
| 2026-04-28 | 在线询价表单：从 React 组件改为纯 Astro/HTML 实现，修复 React 19 兼容性问题 |
| 2026-04-28 | 在线询价表单：提交后提示"请拨打我们的电话XXX进行详细咨询" |
| 2026-04-28 | 能力展示页：WLG-IDE details 与产品中心描述统一 |
| 2026-04-28 | 软件区块描述：改为"组态、边缘计算、网关、安全控制软件产品" |
| 2026-04-28 | 智能体交换机控制器：更新为完整的瓦良格智能体交换机控制器描述 |
| 2026-04-28 | E3系列PLC：Badge改为"E3系列"，3款产品参数根据官方描述更新 |
| 2026-04-28 | X2系列PLC：Badge改为"X2系列"，基础款/运动控制版参数根据官方描述更新 |
| 2026-04-28 | 移除 capabilities.astro 中未使用的 COMPANY_INFO 导入 |
| 2026-04-28 | 能力展示页：应用行业区块 6 个行业卡片添加图片占位符 |
| 2026-04-28 | 产品中心页：软件产品区块从 2 列功能描述改为 4 卡片产品展示 |
| 2026-04-28 | 产品中心页：智能体交换机控制器从网络设备移至软件产品区块 |
| 2026-04-28 | 产品中心页：网络设备区块添加"更多型号"占位虚框 |
| 2026-05-09 | 能力展示页：应用行业 6 个行业卡片已全部添加实图（2×3 布局） |
| 2026-05-09 | 产品中心页：VAR-X 系列（X100/X200）已替换为实图，移除文字描述 |

### 图片实际使用情况

| # | 区块 | 页面 | 状态 | 图片路径/说明 |
|---|------|------|------|---------------|
| 1 | WLG-IDE 组态软件 | 产品中心-软件 | ✅ 已实图 | `src/images/products/IDE_render.png` |
| 2 | 智能体交换机控制器 | 产品中心-软件 | ✅ 已实图 | `src/images/products/SDN_render.png` |
| 3 | 瓦良格能源管控平台 | 产品中心-软件 | ✅ 已实图 | `src/images/products/EMS_render.png` |
| 4 | 工业安全网关软件 | 产品中心-软件 | ✅ 已实图 | `src/images/products/VSE_render.png` |
| 5 | VAR-P-500 (高端) | 产品中心-PLC | ✅ 已实图 | `src/images/products/VAR-P-500_render.png` |
| 6 | VAR-P-500D (基础) | 产品中心-PLC | ✅ 已实图 | `src/images/products/VAR-P-500D_render.png` |
| 7 | VAR-P-500U (拓展) | 产品中心-PLC | ✅ 已实图 | `src/images/products/VAR-P-500U_render.png` |
| 8 | VAR-X-100 (基础款) | 产品中心-PLC | ✅ 已实图 | `src/images/products/VAR-X-100_render.png` |
| 9 | VAR-X-200 (运动控制版) | 产品中心-PLC | ✅ 已实图 | `src/images/products/VAR-X-200_render.png` |
| 10 | WAS-8-1000 工业交换机 | 产品中心-网络设备 | ✅ 已实图 | `src/images/products/WAS-8-1000_render.png` |
| 11 | 综合能源 | 能力展示 | ✅ 已实图 | `src/images/capabilities/integrate_energy.png` |
| 12 | 智能电网 | 能力展示 | ✅ 已实图 | `src/images/capabilities/smart_grid.png` |
| 13 | 智能制造 | 能力展示 | ✅ 已实图 | `src/images/capabilities/smart_manufacturing.png` |
| 14 | 轨道交通 | 能力展示 | ✅ 已实图 | `src/images/capabilities/rail_transit.png` |
| 15 | 能源矿山 | 能力展示 | ✅ 已实图 | `src/images/capabilities/energy_mining.png` |
| 16 | 化工制药 | 能力展示 | ✅ 已实图 | `src/images/capabilities/chemical_pharma.png` |

### 未完成事项

- [x] **获取真实产品图片**：16项全部完成
- [ ] **图片优化**：WebP 格式转换、懒加载、响应式 srcset
