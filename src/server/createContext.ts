import type { inferAsyncReturnType } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getSession } from 'next-auth/react';

const createContext = async ({ req }: CreateNextContextOptions) => ({
  session: await getSession({ req }),
});

export default createContext;

export type Context = inferAsyncReturnType<typeof createContext>;
