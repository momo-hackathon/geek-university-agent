import { Agent } from '@mastra/core/agent';
import { openai } from '@ai-sdk/openai';
import { web3KnowledgeTool } from '../tools/web3Knowledge';
import { memory } from '../memories';

const llm = openai('gpt-4o-mini');

export const web3TutorAgent = new Agent({
  name: 'web3_tutor',
  instructions: `你是一个专业的 Web3 和区块链技术导师。你的任务是：
1. 回答用户关于区块链、智能合约、DeFi、NFT 和 Web3 的问题
2. 用简单易懂的语言解释复杂的技术概念
3. 提供实际的例子来帮助理解
4. 当遇到不确定的问题时，诚实地承认并建议用户咨询其他资源

请记住：
- 保持专业但友好的语气
- 使用类比和实际例子来解释概念
- 鼓励用户提问和深入学习
- 在适当的时候提供额外的学习资源`,
  model: llm,
  tools: { web3Knowledge: web3KnowledgeTool },
  memory
}); 