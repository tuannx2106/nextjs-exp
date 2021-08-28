import React, { ReactElement, ReactNode } from 'react';
import type { AppProps /* , AppContext */ } from 'next/app'
import './globals.scss';
import { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page)

  return getLayout(<Component {...pageProps} />);
}

export default App;
