# TRON 官网升级 PRD v1.3

**日期：** 2026-04-22
**状态：** 进行中
**维护人：** John Huang / TRON Website Team

---

## 一、顶部导航栏（Header）

### 1.1 导航结构

顶部固定导航栏，包含 6 个主导航分类（Start、Build、Ecosystem、Participate、More）和一个独立的 Developers 入口按钮。

### 1.2 Start 下拉菜单（PRD v1.3 新增）

| 菜单项 | 跳转链接 | 说明 |
|---|---|---|
| Get TRX | `/trx` | TRX 获取介绍页 |
| Get Tron USDT | `/usdt` | Tron USDT (TRC20) 介绍页 |
| Select a Wallet | `/wallets` | 支持 TRON 链的全部钱包页面 |
| Developers | `/developers` | Developer Center 首页 |
| Explorer | `https://tronscan.org/` | TRON 区块链浏览器（新窗口） |
| Whitepaper | `/whitepaper` | 白皮书 PDF 下载页 |
| FAQ | `/faq` | 常见问题页 |
| Tron AI | `/tron-ai` | AI 助手页面（原 AI Search 改名） |

### 1.3 Build 下拉菜单

| 菜单项 | 跳转链接 |
|---|---|
| Developer Hub | `/developers` |
| Documentation | `/developers/docs` |
| API Reference | `/developers/api` |
| SDKs | `/developers/sdk` |
| Cookbook | `/developers/cookbook` |
| Grants | `/developers/grants` |
| Office Hours | `/developers/office-hours` |

### 1.4 Ecosystem 下拉菜单

| 菜单项 | 跳转链接 |
|---|---|
| All Products | `/ecosystem` |
| DeFi | `/ecosystem?tab=defi` |
| Storage | `/ecosystem?tab=storage` |
| Cross-Chain | `/ecosystem?tab=crosschain` |
| Stablecoin | `/ecosystem?tab=stablecoin` |
| NFT | `/ecosystem?tab=nft` |
| Games | `/ecosystem?tab=games` |

### 1.5 Participate 下拉菜单

| 菜单项 | 跳转链接 |
|---|---|
| Events | `/events` |
| Hackathons | `/events` |
| Grants | `/programs` |
| Community | `https://discord.gg/trondao`（新窗口） |
| Governance | `/about#governance` |

### 1.6 More 下拉菜单

| 菜单项 | 跳转链接 |
|---|---|
| About | `/about` |
| Roadmap | `/roadmap` |
| Whitepaper | `/whitepaper` |
| Security | `/security` |
| Contact | `/contact` |

### 1.7 右上角功能按钮

- **Tron AI 按钮**（原 AI Search）：点击打开 AI 助手弹窗
- **Start Building 按钮**：跳转 `/developers`

---

## 二、页面清单与状态

| # | 页面名称 | 路径 | 状态 | 备注 |
|---|---|---|---|---|
| 1 | 首页 | `/` | ✅ 完成 | Hero + Stats + Ecosystem + Dev + News + Events |
| 2 | Start | `/start` | ✅ 完成 | 新用户入口页 |
| 3 | Get TRX | `/trx` | 🔄 进行中 | 子 agent 创建中 |
| 4 | Get Tron USDT | `/usdt` | 🔄 进行中 | 子 agent 创建中 |
| 5 | Select a Wallet | `/wallets` | 🔄 进行中 | 子 agent 创建中 |
| 6 | Developer Center | `/developers` | ✅ 完成 | 4 个入口卡片 |
| 7 | AI Search → Tron AI | `/tron-ai` | 🔄 进行中 | 子 agent 创建中 |
| 8 | FAQ | `/faq` | 🔄 进行中 | 子 agent 创建中 |
| 9 | Documentation | `/developers/docs` | ✅ 完成 | DevSidebar + DocRenderer |
| 10 | Documentation [slug] | `/developers/docs/[...slug]` | ✅ 完成 | 含 TOC |
| 11 | API Reference | `/developers/api` | ✅ 完成 | |
| 12 | Cookbook | `/developers/cookbook` | ✅ 完成 | |
| 13 | Grants | `/developers/grants` | ✅ 完成 | |
| 14 | Office Hours | `/developers/office-hours` | ✅ 完成 | |
| 15 | SDKs | `/developers/sdk` | ✅ 完成 | |
| 16 | Ecosystem 首页 | `/ecosystem` | ✅ 完成 | Hero + CategoryTabs + 12 产品卡片 |
| 17 | Ecosystem 产品页 | `/ecosystem/[slug]` | ✅ 完成 | Stats + Tutorial + News |
| 18 | Programs | `/programs` | ✅ 完成 | 三大资助 + MVB + FAQ |
| 19 | Events | `/events` | ✅ 完成 | 活动卡片 + Hackathon 系列 |
| 20 | News | `/news` | ✅ 完成 | 分类标签 + 侧边栏订阅 |
| 21 | Security | `/security` | ✅ 完成 | Bug Bounty + 审计信息 |
| 22 | About | `/about` | ✅ 完成 | 使命 + 团队 + 合作 |
| 23 | Roadmap | `/roadmap` | ✅ 完成 | 4 阶段时间轴 |
| 24 | Whitepaper | `/whitepaper` | ✅ 完成 | 技术架构 + PDF 下载 |
| 25 | Contact | `/contact` | ✅ 完成 | 联系表单 |

---

## 三、页面功能详细要求

### 3.1 /ecosystem 生态产品首页
- Hero：200+ DApps / $12B+ TVL / 1亿+ 用户
- CategoryTabs：All / DeFi / Storage / Cross-Chain / Stablecoin / Games / Exchange / Governance / Reserve / Partner / Utility
- 产品网格：桌面 4 列 / 平板 2 列 / 手机 1 列
- 产品卡片：图标 + 名称 + 分类标签 + 简介 + TVL 数据 + 外链图标 + hover 效果
- 12 个产品数据

### 3.2 /ecosystem/[slug] 产品详情页
- Hero：产品图标 + 名称 + 分类标签 + 官方链接
- 4 格产品数据：TVL / 用户数 / 24h Volume / 审计状态
- 产品描述（fullDescription）
- 合约地址（可点击复制）
- Tutorial 步骤（连接钱包 → 操作）
- 最新 News（3 条）

### 3.3 /programs 资助计划
- 三类资助卡片：TVL Incentive / Gas Grants / Ecosystem Fund
- MVB Program 专区（季度选拔 + 入选权益）
- 申请流程说明
- FAQ Accordion

### 3.4 /events 活动中心
- Hero：线下活动与全球黑客松
- 即将举行的活动卡片（日期 / 地点 / 奖金池）
- 往期活动回顾
- TRON 黑客松系列（奖金池展示）

### 3.5 /news 新闻中心
- 分类标签：全部 / 产品更新 / 生态合作 / 活动回顾 / 开发者 / 机构
- 新闻列表（卡片格式）
- 侧边栏：热门标签 + 邮件订阅表单 + 社交分享

### 3.6 /security 安全中心
- 安全最佳实践
- Bug Bounty 计划
- 审计机构信息

### 3.7 /about 关于
- TRON 使命
- 团队成员
- 合作伙伴（Samsung / Crypto.com / Poloniex）

### 3.8 /roadmap 路线图
- 4 阶段时间轴（Phase 1-4，2020-2026）
- 各阶段里程碑

### 3.9 /whitepaper 白皮书
- 技术架构说明（共识机制 / TPS / 跨链）
- PDF 下载（`/whitepaper-tron-en.pdf`）

### 3.10 /contact 联系页面
- 表单：姓名 / 邮箱 / 主题 / 内容
- 社交媒体链接

### 3.11 /trx（新增）
- Get TRX 介绍页
- 获取方式：CEX / SunSwap DEX / 跨链桥 / 质押收益
- 为什么需要 TRX（Utility / Staking / Governance）
- 主流交易所列表

### 3.12 /usdt（新增）
- Tron USDT (TRC20-USDT) 介绍
- 获取方式：CEX / BTTC 跨链 / SunSwap / DeFi
- 优势：零 gas 费 / 2000 TPS / 原生支持

### 3.13 /wallets（新增）
- 钱包选择页
- 分类：Browser / Mobile / Hardware / Extensions
- 推荐钱包：TronLink / Klever / Ledger / TronWallet / TokenPocket
- 安全提示

### 3.14 /faq（新增）
- 8-10 个常见问题（FAQ Accordion）
- 主题：TRON 是什么 / TRX 获取 / USDT / DApp 使用 / 费用 / 安全

### 3.15 /tron-ai（新增）
- Tron AI 专属页面（原 AI Search 改名）
- 全屏聊天界面（复用 AISearchModal）
- 功能特点展示
- 示例问题按钮

---

## 四、技术规范

### 4.1 技术栈
- **Framework**: Next.js 16 (App Router + Turbopack)
- **UI**: 无框架，纯 CSS + CSS Variables
- **动画**: 全部使用 CSS transitions，禁止 framer-motion
- **图标**: Phosphor Icons (`@phosphor-icons/react`)
- **字体**: Geist（Next.js 默认）

### 4.2 样式规范
- CSS 变量主题：`--color-primary`（TRON 红）、`--color-bg-primary`、`--color-text-primary`
- 背景色：`#0A0A0B`（深黑）
- 主色调：`#FF3B30`（TRON 红）
- 圆角：`rounded-4xl`（大卡片）、`rounded-xl`（小元素）
- 响应式：桌面 4 列 → 平板 2 列 → 手机 1 列

### 4.3 组件规范
- 所有页面组件标记 `"use client"`
- Header / Footer 使用 `StaticHeader` / `StaticFooter` 避免 framer-motion SSR 问题
- 图标名称需验证存在于 `@phosphor-icons/react`
- 禁止在服务端组件中直接导入客户端组件

### 4.4 构建要求
- `npm run build` 必须全部通过
- 24+ 路由全部生成成功
- 无 TypeScript 错误

---

## 五、待完成事项

- [ ] `/trx` 页面（子 agent 进行中）
- [ ] `/usdt` 页面（子 agent 进行中）
- [ ] `/wallets` 页面（子 agent 进行中）
- [ ] `/faq` 页面（子 agent 进行中）
- [ ] `/tron-ai` 页面（子 agent 进行中）
- [ ] Build 验证并推送

---

## 六、PRD 更新记录

| 版本 | 日期 | 变更内容 |
|---|---|---|
| v1.2 | 2026-04-22 | Phase 4 增加 Ecosystem / Programs / Events / News / Security / About / Roadmap / Whitepaper / Contact |
| v1.3 | 2026-04-22 | Header 重构（Start 菜单 8 项）、新增 5 个页面（TRX / USDT / Wallets / FAQ / Tron AI）、AI Search 改名为 Tron AI |
