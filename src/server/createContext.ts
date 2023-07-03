import type { inferAsyncReturnType } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@pages/api/auth/[...nextauth].route';

const createContext = async ({ req, res }: CreateNextContextOptions) => ({
  session: await getServerSession(req, res, authOptions),
});

export default createContext;

export type Context = inferAsyncReturnType<typeof createContext>;
