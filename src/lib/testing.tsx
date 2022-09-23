/* eslint-disable no-console */
/* eslint-disable import/export */
import React, { type ReactNode } from 'react';
import { render } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const customRender = (
  ui: React.ReactElement,
  providerData: ProviderData = {}
) => render(ui, { wrapper: createProviders(providerData) });

type ProviderData = {
  session?: Session;
};

type NewType = ReactNode;

type ChildrenProps = {
  children?: NewType;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    error: () => {},
  },
});

const createProviders = ({ session }: ProviderData) => {
  const Providers = ({ children }: ChildrenProps) => (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </QueryClientProvider>
  );

  return Providers;
};

export * from '@testing-library/react';

export { customRender as render };
