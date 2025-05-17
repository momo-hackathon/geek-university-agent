import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { LibSQLStore } from '@mastra/libsql';
import { web3TutorWorkflow } from '@workflows/web3TutorWorkflow';
import { web3TutorAgent } from '@agents/web3TutorAgent';

export const mastra = new Mastra({
  workflows: {
    web3TutorWorkflow
  },
  agents: {
    web3TutorAgent
  },
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:",
  }),
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
