import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import '@styles/globals.css';

type PageProps = {
  session: Session | null;
};

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<PageProps>) => (
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
);

export default App;
