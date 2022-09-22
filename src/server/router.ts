import trpc from './trpc';
import getGreeting from './greetings/getGreeting';

const router = trpc.router({
  getGreeting,
});

export default router;

export type AppRouter = typeof router;
