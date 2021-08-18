import Head from 'next/head';
import { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import globalStyle from '../styles/globalStyle';
import { theme } from '../styles/theme';
import { Layout } from '../commons/Layout';

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
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <Layout theme={theme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
