export const SITE = {
  title: '瓦良格（杭州）智慧技术有限责任公司',
  description: '工控和物联网领域数智系统解决方案提供商，致力于智能传感器、控制器、通信网络设备的研发，开创具有特色的兼容确定性通信可定义以太网DDCE',
  url: 'https://varyagtech.com',
  author: '瓦良格（杭州）智慧技术有限责任公司',
} as const;

export const COMPANY_INFO = {
  name: '瓦良格（杭州）智慧技术有限责任公司',
  nameEn: 'VaryagTech',
  nameEnFull: 'Hangzhou Varyag Intelligent Technology Co., Ltd.',
  founded: '2026年05月',
  email: 'hr@varyagtech.com',
  phone: '13905810758',
  address: '浙江省杭州市余杭区五常街道五常大道132号D座801室',
  addressEn: 'Room 801, Building D, No. 132 Wuchang Avenue, Wuchang Street, Yuhang District, Hangzhou, Zhejiang, China',
} as const;

export const SOCIAL_LINKS = {
  linkedin: '',
  twitter: '',
  facebook: '',
} as const;

export const NAV_ITEMS = [
  { label: '首页', href: '/' },
  { label: '产品中心', href: '/products' },
  { label: '能力展示', href: '/capabilities' },
  { label: '加入我们', href: '/careers' },
  { label: '关于我们', href: '/about' },
] as const;

export const PARTNERS = [
  { name: '正泰集团', code: '股票代码: 601877', type: '国内能源管控第一梯队' },
  { name: '柯尔照明', type: '全屋智能家居系统供应商' },
  { name: '菲达环保', code: '股票代码: 600526', type: '国内大气污染治理龙头' },
  { name: '浙江大学', type: '技术依托单位' },
] as const;

export const PRODUCTS = {
  software: [
    { name: 'WLG-IDE', description: '基于WEB的低代码组态软件', type: 'software' },
  ],
  plc: [
    { name: 'VAR-P-500 高端系列', description: '双核240MHz处理器，8.5MB工作存储器', type: 'plc' },
    { name: 'VAR-P-500D 基础系列', description: '双核240MHz处理器，8.5MB工作存储器', type: 'plc' },
    { name: 'VAR-P-500U 拓展系列', description: '双核240MHz处理器，支持更多IO', type: 'plc' },
    { name: 'VAR-X-100 基础款', description: '1.2GHz双核处理器，支持Linux', type: 'plc' },
    { name: 'VAR-X-200 运动控制版', description: '1.2GHz双核处理器，运动控制', type: 'plc' },
  ],
  switch: [
    { name: 'WAS-8-1000', description: '工业交换机，千兆互联、环网冗余', type: 'switch' },
    { name: '智能体交换机控制器', description: '集中控制与信息采集', type: 'switch' },
  ],
} as const;

export const ADVANTAGES = [
  {
    title: '30+项发明专利',
    description: '自主研发，拥有三十多项发明专利技术',
  },
  {
    title: '0.00003ms时间精度',
    description: '微秒级时间精度，助力高精度控制',
  },
  {
    title: '确定性通信',
    description: '软件定义冗余，支持多冗余链路',
  },
  {
    title: '浙大技术团队',
    description: '核心团队来自浙江大学电气学院、华硕智能系统实验室',
  },
] as const;

export const CAREERS = {
  departments: ['全部', '研发部', '产品部', '销售部', '技术支持'] as const,
  locations: ['全部', '杭州', '远程'] as const,
  jobs: [
    {
      id: 1,
      title: '嵌入式软件工程师',
      department: '研发部',
      location: '杭州',
      type: '全职',
      description: '负责PLC产品嵌入式软件开发和维护',
      requirements: [
        '本科及以上学历，计算机、电子相关专业',
        '3年以上嵌入式软件开发经验',
        '熟悉C/C++编程，了解实时操作系统',
      ],
    },
    {
      id: 2,
      title: '上位机软件工程师',
      department: '研发部',
      location: '杭州',
      type: '全职',
      description: '负责上位机软件架构设计与开发',
      requirements: [
        '本科及以上学历，软件工程相关专业',
        '熟悉Qt或Electron开发',
        '有工业软件或SCADA开发经验优先',
      ],
    },
    {
      id: 3,
      title: '硬件工程师',
      department: '研发部',
      location: '杭州',
      type: '全职',
      description: '负责硬件电路设计及调试',
      requirements: [
        '本科及以上学历，电子信息相关专业',
        '熟悉模拟电路和数字电路设计',
        '有ARM或FPGA开发经验优先',
      ],
    },
    {
      id: 4,
      title: '产品经理',
      department: '产品部',
      location: '杭州',
      type: '全职',
      description: '负责工业自动化产品规划与设计',
      requirements: [
        '本科及以上学历，3年以上产品经验',
        '熟悉工业自动化产品市场',
        '具备良好的需求分析和产品设计能力',
      ],
    },
    {
      id: 5,
      title: '销售工程师',
      department: '销售部',
      location: '杭州',
      type: '全职',
      description: '负责区域市场开拓与客户维护',
      requirements: [
        '大专及以上学历，专业不限',
        '1年以上工业产品销售经验',
        '良好的沟通能力和抗压能力',
      ],
    },
    {
      id: 6,
      title: '技术支持工程师',
      department: '技术支持',
      location: '远程',
      type: '全职',
      description: '为客户提供技术支持与解决方案',
      requirements: [
        '本科及以上学历，自动化相关专业',
        '熟悉PLC编程和工业通信协议',
        '良好的客户服务意识',
      ],
    },
  ],
} as const;