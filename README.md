# Geek University Agent

一个基于 Mastra 框架构建的智能代理系统，用于提供大学相关的智能服务。

## 技术栈

- **框架**: Mastra
- **语言**: TypeScript
- **AI 集成**:
  - OpenAI
  - Google AI
  - Cohere
- **数据库支持**:
  - MongoDB
  - PostgreSQL
  - LibSQL
- **向量存储**:
  - Pinecone
- **前端**:
  - React
  - React Router DOM

## 项目结构

```
src/
├── mastra/
│   ├── agents/      # AI 代理定义
│   ├── memories/    # 记忆存储模块
│   ├── rag/         # 检索增强生成模块
│   ├── tools/       # 工具函数
│   ├── workflows/   # 工作流程定义
│   └── index.ts     # 主入口文件
```

## 安装

1. 确保已安装 Node.js 和 pnpm
2. 克隆项目
3. 安装依赖：
```bash
pnpm install
```

## 开发

启动开发服务器：
```bash
pnpm dev
```

## 构建

构建生产版本：
```bash
pnpm build
```

## 编译 TypeScript

编译 TypeScript 代码：
```bash
pnpm compile
```

## 主要功能

- AI 代理系统
- 检索增强生成 (RAG)
- 多数据库支持
- 向量存储集成
- 智能工作流程

## 依赖

主要依赖包括：
- @mastra/core
- @mastra/libsql
- @mastra/memory
- @mastra/mongodb
- @mastra/pg
- @mastra/pinecone
- @mastra/rag
- 以及多个 AI SDK 集成

## 许可证

ISC 