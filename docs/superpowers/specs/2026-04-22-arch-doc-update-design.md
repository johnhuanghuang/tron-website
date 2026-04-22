# 架构文档同步更新设计

**日期：** 2026-04-22
**任务：** 将 PRD v1.4 变更同步到架构文档 `VUqrd7KIsoBjOtxTP5iccXg3nab`
**原则：** 保持架构文档整体架构不变，仅同步 PRD 相关变更

---

## 一、变更范围

| 架构文档位置 | PRD 来源 | 变更类型 |
|---|---|---|
| 1.1 技术栈表格（动画行） | PRD 十九、技术规范 | 文字更新 |
| 3.1（现为"数据层策略"） | PRD 三、3.1 + 3.7 | 完全替换为 Header 导航规格 |
| 3.2 i18n → 3.3 | — | 编号顺延 |
| 3.3 组件渲染 → 3.4 | — | 编号顺延 |
| 三、核心架构决策 | PRD 十五、Tron AI | 新增 Tron AI 说明（Modal触发） |
| 四、页面结构表 | PRD 二、页面总览 | 扩展到24页 |
| **五、Start 相关页面** | PRD 五 | **新增整章** |
| 七、Phase 4 | PRD 二十、待办事项 | 新增 Start 页面开发任务 |

---

## 二、技术栈变更

**动画技术更新：**

| 行 | 原内容 | 更新后 |
|---|---|---|
| 动画 | Framer Motion | CSS Transitions |
| 说明 | Spring Physics 动效系统 | CSS Transitions（避免SSR createContext错误） |

**图标规范（备注说明）：**

| 原名 | 更新为 |
|---|---|
| Link | LinkSimple |
| Globe | GlobeSimple |
| FileCheck | SealCheck |
| Phishing/PhishingArc | ShieldWarning |
| Document | FileText |
| Exchange | ArrowsLeftRight |
| Votes | Graph |

---

## 三、Header 导航规格（3.1 新内容）

### 3.1 顶部导航栏（Header）

基于 PRD 三、3.1-3.8 整理，完整规格如下：

#### 3.1.1 导航结构

顶部固定导航栏，包含 **6 个主导航分类** + 独立 Developers 入口按钮：

- Start（新用户入口）
- Build（开发者资源）
- Ecosystem（生态导航）
- Participate（社区参与）
- More（更多）
- Developers 按钮（跳转 `/developers`）

#### 3.1.2 Start 下拉菜单（8项）

| # | 名称 | 路径/行为 | 说明 |
|---|---|---|---|
| a | Get TRX | `/trx` | TRX 获取介绍页 |
| b | Get Tron USDT | `/usdt` | Tron USDT(TRC20)介绍页 |
| c | Select a Wallet | `/wallets` | TRON 链钱包页面 |
| d | Developers | `/developers` | 跳转 Developer Center |
| e | Explorer | `https://tronscan.org/` | 新窗口打开 |
| f | Whitepaper | `/whitepaper` | 新窗口打开 PDF |
| g | FAQ | `/faq` | 常见问题页 |
| h | Tron AI | Modal 触发 | 无独立页面，点击打开对话弹窗 |

#### 3.1.3 Build 下拉菜单

定位：开发者资源

- Developer Hub → `/developers`
- Documentation → `/developers/docs`
- API Reference → `/developers/api`
- SDKs → `/developers/sdk`
- Cookbook → `/developers/cookbook`
- Grants → `/developers/grants`
- Office Hours → `/developers/office-hours`

#### 3.1.4 Ecosystem 下拉菜单

定位：生态导航

- All Products → `/ecosystem`
- DeFi → `/ecosystem?tab=defi`
- Storage → `/ecosystem?tab=storage`
- Cross-Chain → `/ecosystem?tab=crosschain`
- Stablecoin → `/ecosystem?tab=stablecoin`
- NFT → `/ecosystem?tab=nft`
- Games → `/ecosystem?tab=games`

#### 3.1.5 Participate 下拉菜单

- Events → `/events`
- Hackathons → `/events`
- Grants → `/programs`
- Community → `https://discord.gg/trondao`（新窗口）
- Governance → `/about#governance`

#### 3.1.6 More 下拉菜单

- About → `/about`
- Roadmap → `/roadmap`
- Whitepaper → `/whitepaper`
- Security → `/security`
- Contact → `/contact`

#### 3.1.7 右上角功能按钮

- **Tron AI 按钮**（原 AI Search）：点击打开 Tron AI 对话弹窗（Modal）
- **Start Building 按钮**：跳转 `/developers`

#### 3.1.8 Header 交互

- 滚动时 Header 缩小（带 logo 缩小动画）
- 移动端：汉堡菜单（收起所有导航）

---

## 四、Tron AI 更新（核心架构决策章）

### 更新位置：3.3 组件渲染策略 + AI 问答助手小节

**变更说明：**

- "AI Search" → "Tron AI"（全局更名）
- AI 对话入口：Header 右侧 "Tron AI" 按钮
- **Tron AI 不设独立页面**，功能为点击按钮打开 Modal 对话窗口
- Modal 内可输入问题，回答 TRON 相关问题（文档/开发者文档/链上数据/新闻）

**API Route：** `POST /api/ai-search`
**Request：** `{ message, history }`
**Response：** `{ reply, sources }`
**前端组件：** `AISearchModal`（Modal 弹窗）+ `ChatMessage`（消息气泡）

---

## 五、新增第五章：Start 相关页面详细功能规格

### 五、Start 相关页面详细功能规格

基于 PRD 第五章，完整描述 4 个 Start 相关页面的功能规格。

#### 5.1 TRX 介绍页 `/trx`

**页面目标：** 引导用户了解并获取 TRX（TRON 网络原生代币）

**功能特性：**

- Hero 区域：标题 + 副标题
- 如何获取 TRX（4种方式卡片）：CEX 购买 / DEX / 跨链桥 / 质押收益
- 为什么需要 TRX（3个核心价值）：Utility / Staking / Governance
- 主流交易所列表：Binance / OKX / HTX / KuCoin / Poloniex / Coinbase / Kraken / Gate.io
- CTA：Start Using TRX → /ecosystem

#### 5.2 Tron USDT 介绍页 `/usdt`

**页面目标：** 介绍 Tron USDT（TRC20-USDT），引导用户获取和使用

**功能特性：**

- Hero 区域：标题 + 副标题
- 什么是 Tron USDT：1-2 段说明文字
- 如何获取 Tron USDT（4种方式）：CEX 购买 / 跨链桥 / DEX / DeFi 收益
- 优势特点（3张卡片）：Zero Gas Fees / 2000+ TPS / Native to TRON
- 使用场景：DeFi / 汇款支付 / 交易 / 资产储存
- CTA：Explore DeFi → /ecosystem，Get a Wallet → /wallets

#### 5.3 TRON 链钱包页面 `/wallets`

**页面目标：** 帮助用户选择适合的 TRON 链钱包

**功能特性：**

- Hero 区域：标题 + 副标题
- 钱包分类浏览（4类）：
  - Browser Wallets：TronLink / Klever
  - Mobile Wallets：TronWallet / Klever / TokenPocket / Bitget Wallet
  - Hardware Wallets：Ledger / Trezor
  - Extension Wallets：TronLink Chrome/Firefox
- 每款钱包：图标 + 名称 + 简介 + 平台标签 + CTA 链接
- 安全提示（5条）：助记词保护 / 谨防钓鱼 / 软件更新 / 硬件钱包 / 警惕空投

#### 5.4 Tron AI（Modal 触发，无独立页面）

> Tron AI 不设独立页面，功能为点击 Header 右侧按钮，打开 AI 对话弹窗（Modal）。

**入口：** Header 右侧 "Tron AI" 按钮（图标：ChatCircle）

**功能需求：**

- 回答 TRON 相关问题（文档/开发者文档）
- 推荐相关生态产品
- 回答链上数据问题（TVL/TPS/Gas）
- 回复新闻资讯

**技术实现：**

- AI 模型：MiniMax M2.7
- API Route：`POST /api/ai-search`
- 组件：`AISearchModal` + `ChatMessage`

---

## 六、第四章页面结构更新

**原13页 → 更新为24页：**

| # | 页面 | 路径 | 优先级 | 状态 |
|---|---|---|---|---|
| 1 | 首页 | `/` | P0 | ✅ |
| 2 | Start（新用户入口） | `/start` | P0 | ✅ |
| 3 | Get TRX | `/trx` | P1 | ✅ |
| 4 | Get Tron USDT | `/usdt` | P1 | ✅ |
| 5 | Select a Wallet | `/wallets` | P1 | ✅ |
| 6 | FAQ | `/faq` | P1 | ✅ |
| 7 | 开发者中心 | `/developers` | P0 | ✅ |
| 8 | 文档 | `/developers/docs` | P0 | ✅ |
| 9 | 文档 [slug] | `/developers/docs/[...slug]` | P0 | ✅ |
| 10 | API Reference | `/developers/api` | P0 | ✅ |
| 11 | Cookbook | `/developers/cookbook` | P0 | ✅ |
| 12 | Grants | `/developers/grants` | P0 | ✅ |
| 13 | Office Hours | `/developers/office-hours` | P0 | ✅ |
| 14 | SDKs | `/developers/sdk` | P0 | ✅ |
| 15 | 生态产品 | `/ecosystem` | P1 | ✅ |
| 16 | 生态产品详情 | `/ecosystem/[slug]` | P1 | ✅ |
| 17 | 资助计划 | `/programs` | P1 | ✅ |
| 18 | 活动中心 | `/events` | P1 | ✅ |
| 19 | 新闻中心 | `/news` | P2 | ✅ |
| 20 | 安全中心 | `/security` | P1 | ✅ |
| 21 | 关于我们 | `/about` | P2 | ✅ |
| 22 | 路线图 | `/roadmap` | P2 | ✅ |
| 23 | 白皮书 | `/whitepaper` | P2 | ✅ |
| 24 | 联系我们 | `/contact` | P3 | ✅ |

> **Tron AI 说明：** Tron AI 不设独立页面，功能为点击 Header 右侧按钮打开 AI 对话弹窗（Modal）。

---

## 七、第七章 Phase 4 补充任务

**Phase 4 原任务：**

- 生态首页 + 单产品子页 + JustLend/SunSwap/BTTC + Programs + MVB

**Phase 4 补充任务（Start 页面）：**

- `/trx` 页面开发：Hero + 获取TRX（4种方式）+ 核心价值 + 交易所列表 + CTA
- `/usdt` 页面开发：Hero + Tron USDT介绍 + 获取方式 + 优势 + 使用场景 + CTA
- `/wallets` 页面开发：Hero + 钱包分类浏览（4类）+ 安全提示
- `/faq` 页面开发：FAQ 列表页（参考原官网 tron.network）
- Tron AI Modal 触发：Header 按钮 + AISearchModal + ChatMessage + `/api/ai-search`

---

## 八、写入策略

由于 Feishu `write` 为全量替换，采用以下策略：

1. **保留架构文档所有现有格式**：表格（Tables）、代码块（Code blocks）、ASCII 图表、分隔线等全部保留
2. **仅对受影响的内容块做精确替换**：
   - 技术栈表格的"动画"行单元格文字
   - 3.1 整个章节内容块（从小标题到下一个3.x之前的内容）
   - 页面结构表格内容（保留表格结构，更新行数据）
   - Phase 4 todo list（追加新任务）
3. **新增章节插入**：在四、页面结构与路由 之前，插入新的五、Start 相关页面
4. **章节编号自动顺延**：插入后六→七→八→九→十（附录不变）

**feishu_doc write 调用次数：1次（整文档替换）**
