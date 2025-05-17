import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const web3KnowledgeTool = createTool({
  id: 'web3_knowledge',
  description: 'Search for Web3 and blockchain related information',
  inputSchema: z.object({
    query: z.string().describe('The question to search for'),
  }),
  outputSchema: z.object({
    answer: z.string(),
    sources: z.array(z.string()),
  }),
  execute: async ({ context }) => {
    const knowledgeBase = {
      'blockchain': {
        answer: '区块链是一个分布式账本技术，它允许数据以安全、透明和不可篡改的方式存储和传输。每个区块包含交易记录，并通过密码学方法链接到前一个区块。',
        sources: ['Blockchain Basics', 'Web3 Fundamentals']
      },
      'smart_contract': {
        answer: '智能合约是存储在区块链上的自动执行的程序，它们在满足特定条件时自动执行预定义的规则。它们通常用于自动化协议执行，无需中间人。',
        sources: ['Smart Contract Development', 'Ethereum Documentation']
      },
      'defi': {
        answer: 'DeFi（去中心化金融）是建立在区块链技术上的金融系统，它允许用户在没有传统金融机构参与的情况下进行借贷、交易和投资。',
        sources: ['DeFi Protocols', 'Web3 Finance']
      },
      'nft': {
        answer: 'NFT（非同质化代币）是独特的数字资产，代表所有权或真实性证明。每个 NFT 都是独一无二的，不能与其他代币互换。',
        sources: ['NFT Marketplace', 'Digital Assets']
      },
      'web3': {
        answer: 'Web3 是互联网的新范式，它基于区块链技术，强调去中心化、用户数据主权和点对点交互。它旨在创建一个更加开放和公平的互联网。',
        sources: ['Web3 Vision', 'Decentralized Web']
      }
    };

    const normalizedQuery = context.query.toLowerCase();
    
    // 简单的关键词匹配
    for (const [key, value] of Object.entries(knowledgeBase)) {
      if (normalizedQuery.includes(key)) {
        return {
          answer: value.answer,
          sources: value.sources
        };
      }
    }

    // 如果没有找到匹配的知识，返回默认回答
    return {
      answer: '抱歉，我目前没有关于这个问题的具体信息。请尝试询问关于区块链、智能合约、DeFi、NFT 或 Web3 的基本概念。',
      sources: ['General Knowledge Base']
    };
  }
}); 