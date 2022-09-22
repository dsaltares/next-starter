import {
  useMutation as useMutationBase,
  useQueryClient,
  type QueryKey,
} from '@tanstack/react-query';
import { type Draft, produce } from 'immer';

type UseMutationArgs<Input, Cache> = {
  cacheKey: QueryKey;
  mutationFn: (input: Input) => Promise<unknown>;
  cacheUpdater: (cache: Draft<Cache>, input: Input) => void;
};

const useMutation = <Input, Cache>({
  cacheKey,
  mutationFn,
  cacheUpdater,
}: UseMutationArgs<Input, Cache>) => {
  const queryClient = useQueryClient();
  return useMutationBase(mutationFn, {
    onMutate: async (input) => {
      const previousData = queryClient.getQueryData<Cache>(cacheKey);

      if (previousData && cacheUpdater) {
        await queryClient.cancelQueries(cacheKey);

        const result = produce(previousData, (draft) => {
          cacheUpdater(draft, input);
        });

        queryClient.setQueryData(cacheKey, result);

        return {
          previousData,
        };
      }

      return {};
    },
    onError: async (_error, _args, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(cacheKey, context.previousData);
      }
    },
    onSettled: () => queryClient.invalidateQueries(cacheKey),
  });
};

export default useMutation;
