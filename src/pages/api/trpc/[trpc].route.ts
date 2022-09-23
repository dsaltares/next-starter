import { createNextApiHandler } from '@trpc/server/adapters/next';
import createContext from '@server/createContext';
import router from '@server/router';

export default createNextApiHandler({
  router,
  createContext,
  batching: { enabled: true },
});
