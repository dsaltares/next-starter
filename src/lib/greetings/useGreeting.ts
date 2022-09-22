import { useQuery } from '@tanstack/react-query';
import api from '@lib/api';
import type { GetGreetingInput } from '@server/greetings/types';
import QueryKeys from './queryKeys';

const useGreeting = (input: GetGreetingInput) =>
  useQuery(QueryKeys.greeting(input.name), () => api.getGreeting.query(input));

export default useGreeting;
