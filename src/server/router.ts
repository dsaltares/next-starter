import trpc from './trpc';

const router = trpc.router({});

export default router;

export type AppRouter = typeof router;
