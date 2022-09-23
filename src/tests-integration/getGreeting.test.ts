import { getGreeting } from '@server/greetings/getGreeting';

describe('getGreeting', () => {
  it('forms greeting', async () => {
    const greeting = await getGreeting({
      ctx: { session: null },
      input: { name: 'World' },
    });
    expect(greeting).toEqual({ greeting: 'Hello World' });
  });
});
