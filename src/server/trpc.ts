import { initTRPC, TRPCError } from '@trpc/server';
import type { Session } from 'next-auth';
import type { Context } from './createContext';

interface Meta {
  withoutAuth: boolean;
  [key: string]: unknown;
}

export type ProcedureArgs<TInput> = {
  ctx: {
    session: Session | null;
  };
  meta?: Meta;
  input: TInput;
};
export type Procedure<TInput, TOutput> = (
  args: ProcedureArgs<TInput>
) => Promise<TOutput>;

const trpc = initTRPC.context<Context>().meta<Meta>().create();

const isAuthed = trpc.middleware(async ({ meta, next, ctx }) => {
  if (!meta?.withoutAuth && !ctx.session) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({ ctx });
});

export const procedure = trpc.procedure.use(isAuthed);

export default trpc;
