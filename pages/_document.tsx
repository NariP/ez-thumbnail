import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="블로그 썸네일을 만드는 웹 서비스" />
          <meta
            name="keywords"
            content="블로그썸네일, 티스토리 썸네일, til 썸네일, 썸네일제작"
          />
          <meta
            property="og:title"
            content="Ez Thumbnail - 쉽고 빠르게 만드는 블로그 썸네일"
          />
          <meta property="og:site_name" content="Ez Thumbnail" />
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}
