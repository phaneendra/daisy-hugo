import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import htmlescape from "htmlescape";
import config from "config";
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '@theme/academic';

const __NEXT_CONFIG__ = { ...config };
// exclude server config
delete __NEXT_CONFIG__.server;

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <link rel="icon" href="/icons/favicon.ico" />

          <link rel="manifest" href="/manifest.json" />

          <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon_32.png" />
          <link rel="icon" type="image/png" sizes="48x48" href="/icons/icon_48.png" />
          <link rel="icon" type="image/png" sizes="128x128" href="/icons/icon_128.png" />
          <link rel="icon" type="image/png" sizes="256x256" href="/icons/icon_256.png" />
          <meta name="msapplication-TileImage" content="/icons/icon_150.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon_180.png" />

          <meta name="apple-mobile-web-app-title" content={config.get("siteName")} />

          <meta name="msapplication-TileColor" content={theme.palette.primary.main} />

          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />

          {/* 
            <script>
                  Add a Google Analytics script here.
            </script>
          */}

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

        </Head>
        <body>
          <Main />
          <script
            id="__NEXT_CONFIG__"
            type="application/json"
            // nonce={this.props.nonce}
            // crossOrigin={this.props.crossOrigin || process.crossOrigin}
            dangerouslySetInnerHTML={{
              __html: htmlescape(__NEXT_CONFIG__)
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};