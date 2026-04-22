# Phase 4 - Ecosystem & Programs 设计文档

**日期：** 2026-04-22
**状态：** 进行中
**基于：** TRON 官网升级 PRD v1.2

---

## 一、/ecosystem 生态产品首页

### 1.1 页面结构

```
Hero Section
  标题：TRON 生态矩阵
  副标题：200+ DApps / $12B+ TVL / 1亿+ 用户
  分类 Tab：全部 / DeFi / Storage / 跨链 / Stablecoin / NFT / Games
  产品网格
  底部 CTA：探索完整生态 →
```

### 1.2 Hero Section
- 标题 60px，字体 Bold
- 副标题数据用大字体突出
- 背景：深色渐变 + TRON 橙色光晕效果

### 1.3 分类 Tab
- 横向排列，点击切换筛选
- Active Tab：白色/10 背景（非橙色）
- Inactive：text-white/60

### 1.4 产品网格
- 响应式：桌面 4 列，平板 2 列，手机 1 列
- 12 个产品卡片（与首页生态区一致）
- Tab 切换时有 filter 动画

### 1.5 产品卡片
- 图标（64x64）
- 产品名称 + 分类标签
- 简介（2 行，截断）
- 关键数据（TVL / 24h 交易量等）
- ↗ 外链图标
- Hover：放大 + 橙色边框

---

## 二、/ecosystem/[product] 单产品页

### 2.1 页面结构

```
Product Hero
  图标 + 名称 + 分类标签
  官方链接 →
产品数据（4 格）
  TVL / 用户数 / 合约地址 / 审计状态
产品描述
核心合约地址（可复制）
安全审计信息
教程步骤（连接钱包 → 质押 → 使用）
相关新闻（3 条）
```

### 2.2 产品数据卡片
- 4 格网格
- 数值大字体 + 单位
- 来源标注

### 2.3 合约地址
- 可点击复制按钮
- 链接到 TRONScan

---

## 三、/programs 资助计划页

### 3.1 页面结构

```
Hero
  标题：TRON 生态资助计划 — Always Available
  副标题
三类资助卡片（与 /developers/grants 一致，但更详细）
  TVL Incentive
  Gas Grants
  Ecosystem Fund
MVB Program 专区
申请流程说明
FAQ
```

### 3.2 资助卡片内容
- 资助名称
- 金额/比例
- 申请条件
- 申请流程
- 案例展示（已获资助项目）
- CTA 按钮 → 外部表单

### 3.3 MVB Program
- 类似 BNBChain MVB
- 季度选拔
- 入选权益：技术支持 + 市场曝光 + $50,000 + 融资对接

---

## 四、/events 活动中心页

### 4.1 页面结构

```
Hero
  标题：线下活动与全球黑客松
即将举行的活动（卡片列表）
  活动名称 / 日期 / 地点 / 类型
  奖金池（黑客松）
  报名 CTA
往期活动回顾
  视频/PPT 下载
TRON 黑客松系列
  奖金池展示
  获奖项目
```

---

## 五、/news 新闻中心页

### 5.1 页面结构

```
Hero
  标题：TRON 最新动态
分类标签：全部 / 产品更新 / 生态合作 / 活动回顾 / 开发者 / 机构
新闻列表（分页，每页 10 条）
侧边栏
  热门标签
  订阅新闻（邮件表单）
  社交分享
```

---

## 六、其他页面（简化实现）

| 页面 | 路径 | 实现方式 |
|---|---|---|
| Security | /security | 单页：安全指南 + Bug Bounty + 审计机构 |
| About | /about | 单页：TRON 基金会 + 团队 + 合作伙伴 |
| Roadmap | /roadmap | 可视化时间轴，4 阶段 |
| Whitepaper | /whitepaper | PDF 嵌入或下载链接 |
| Contact | /contact | 表单：姓名/邮箱/主题/内容 |

---

## 七、技术实现

### 页面文件结构
```
app/
├── ecosystem/
│   ├── page.tsx              # 生态首页
│   ├── [slug]/page.tsx       # 单产品页
│   └── layout.tsx
├── programs/page.tsx         # 资助计划
├── events/page.tsx           # 活动中心
├── news/page.tsx             # 新闻中心
├── security/page.tsx         # 安全中心
├── about/page.tsx           # 关于
├── roadmap/page.tsx          # 路线图
├── whitepaper/page.tsx       # 白皮书
└── contact/page.tsx         # 联系我们
```

### 数据
- 生态产品：复用 `app/page.tsx` 中的 `ecosystemProducts` 数据
- 资助计划：静态数据（可后续接表单）
- 活动：静态数据（可后续接 CMS）
- 新闻：静态数据（可后续接 CMS）

### 依赖
- `react-markdown` - 新闻/白皮书渲染
- 无需新增依赖

---

## 八、实施顺序

1. `/ecosystem` - 生态产品首页（最复杂，先做）
2. `/ecosystem/[slug]` - 单产品页
3. `/programs` - 资助计划
4. `/events` - 活动中心
5. `/news` - 新闻中心
6. `/security` - 安全中心
7. `/about` - 关于
8. `/roadmap` - 路线图
9. `/whitepaper` - 白皮书
10. `/contact` - 联系我们
