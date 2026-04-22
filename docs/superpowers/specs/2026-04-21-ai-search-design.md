# AI Search 功能设计文档

**日期：** 2026-04-21
**状态：** 已批准

---

## 概述

在 TRON 官网首页导航栏添加 AI Search 功能入口，为用户提供智能问答服务，帮助用户查找文档、解决问题、探索生态产品。

---

## 功能需求

1. 查找官网内的文档，特别是开发者文档
2. 根据用户遇到的问题，依据开发者文档与相关工具回复用户，并推荐相关文档
3. 根据用户的需要，引导相关生态产品
4. 回答跟 TRON 链相关的数据问题
5. 回答跟 TRON 链相关的资讯新闻（以官网资讯为主）

---

## 技术方案

### 入口位置
- Header 导航栏右侧 Search 图标按钮改为 AI Search 入口
- 点击后打开全屏模态对话框

### 前端组件

#### AISearchModal
- 全屏/大尺寸模态对话框
- 包含：
  - 标题栏（AI Search + 关闭按钮）
  - 对话列表区域（滚动）
  - 底部输入框 + 发送按钮

#### 对话消息
- 用户消息：右对齐，白色背景
- AI 消息：左对齐，深色背景，支持 Markdown 渲染
- 支持链接点击跳转（文档、产品、新闻等）

### 后端架构

```
用户输入 → Next.js API Route (/api/ai-search) → MiniMax M2.7 API → 格式化回复 → 前端展示
```

### API Route 设计

**Endpoint:** `POST /api/ai-search`

**Request:**
```json
{
  "message": "用户输入内容",
  "history": [
    { "role": "user", "content": "之前的问题" },
    { "role": "assistant", "content": "之前的回复" }
  ]
}
```

**Response:**
```json
{
  "reply": "AI 回复内容（Markdown 格式）",
  "sources": [
    { "title": "文档标题", "url": "链接", "type": "doc|product|news|data" }
  ]
}
```

### System Prompt 设计

```
你是一个 TRON 区块链的智能助手。你的职责是：

1. 回答 TRON 相关的所有问题，包括：
   - 链上数据（TVL、TPS、Gas 费、节点数、区块高等）
   - 生态产品使用和问题排查
   - 开发者文档指引

2. 根据用户问题，提供：
   - 清晰的解决方案或步骤
   - 相关文档链接
   - 相关生态产品推荐

3. 如果问题超出 TRON 范围（如其他链、钱包问题等），引导用户访问对应资源。

4. 回复格式：
   - 使用 Markdown
   - 重要信息用列表或表格呈现
   - 提供可点击的链接

上下文信息：
- 官网：https://tron.network
- 开发者文档：https://developers.tron.network
- 生态产品列表：[从数据库/配置中获取]
- 最新新闻：[从数据库/配置中获取]
- 链上数据：[实时或缓存数据]
```

### 数据来源

#### 开发者文档
- 使用 TRON 官方开发者文档内容
- 可以预先抓取或使用文档 API

#### 生态产品
- 从现有 `ecosystemProducts` 数据中获取
- 12 个产品的名称、描述、链接

#### 新闻/活动
- 从首页 News/Events 数据中获取
- 3 条最新新闻 + 3 个活动

#### 链上数据
- 使用现有页面中的静态数据
- 或后续接入 TRON API 获取实时数据

---

## 错误处理

| 情况 | 处理方式 |
|------|----------|
| API 超时 | 显示 "请求超时，请稍后重试" |
| API 错误 | 显示 "服务暂时不可用，请稍后重试" |
| 无法回答的问题 | 引导用户访问开发者文档或提交工单 |

---

## 组件结构

```
app/
├── api/
│   └── ai-search/
│       └── route.ts          # API Route
├── components/
│   ├── layout/
│   │   └── Header.tsx         # 修改现有 Header
│   └── ai/
│       ├── AISearchModal.tsx  # 主模态框
│       ├── ChatMessage.tsx    # 消息组件
│       └── index.ts
└── lib/
    └── prompts/
        └── tron-assistant.ts  # System Prompt 配置
```

---

## 实施步骤

1. 创建 AI 组件（Modal、ChatMessage）
2. 修改 Header，集成 AI Search 入口
3. 创建 API Route，调用 MiniMax M2.7
4. 配置 System Prompt
5. 集成生态产品/新闻数据
6. 测试和调优
7. 部署到生产环境

---

## 依赖项

- `framer-motion` - 动画效果（已安装）
- `react-markdown` - Markdown 渲染
- MiniMax API Key（需配置）
