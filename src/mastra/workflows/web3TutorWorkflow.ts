import { Workflow } from '@mastra/core/workflows';
import { web3TutorAgent } from '../agents/web3TutorAgent';
import { z } from 'zod';

const workflow = new Workflow({
  name: 'web3_tutor_workflow',
  triggerSchema: z.object({
    question: z.string().describe('The Web3 or blockchain related question from the user'),
    context: z.object({
      userId: z.string(),
      sessionId: z.string(),
      previousQuestions: z.array(z.string()).optional(),
    }).optional(),
  }),
})
  .step({
    id: 'process-question',
    description: 'Process the user question and generate a response',
    execute: async ({ context, mastra }) => {
      const { question, context: userContext } = context.inputData;
      
      const response = await web3TutorAgent.stream([
        {
          role: 'user',
          content: question,
        },
      ]);

      let answer = '';
      for await (const chunk of response.textStream) {
        answer += chunk;
      }

      return {
        answer,
        context: userContext,
      };
    },
  });

// 提交工作流
export const web3TutorWorkflow = workflow.commit(); 