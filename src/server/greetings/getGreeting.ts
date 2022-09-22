import { type Procedure, procedure } from '@server/trpc';
import { GetGreetingInput, GetGreetingOutput } from './types';

export const getGreeting: Procedure<
  GetGreetingInput,
  GetGreetingOutput
> = async ({ input: { name } }) => ({
  greeting: `Hello ${name}`,
});

export default procedure
  .input(GetGreetingInput)
  .output(GetGreetingOutput)
  .query(getGreeting);
