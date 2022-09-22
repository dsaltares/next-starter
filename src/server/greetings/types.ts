import { z } from 'zod';

export const GetGreetingInput = z.object({
  name: z.string(),
});
export const GetGreetingOutput = z.object({
  greeting: z.string(),
});

export type GetGreetingInput = z.infer<typeof GetGreetingInput>;
export type GetGreetingOutput = z.infer<typeof GetGreetingOutput>;
