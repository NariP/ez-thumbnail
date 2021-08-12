import Head from 'next/head';
import { AppProps } from 'next/app';
import React from 'react';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
        <title>Ez Thumbnail</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;