import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider, Styled } from "theme-ui";
import { DefaultSeo } from "next-seo";

import config from "@config";
import theme from "@themes/default";

const Noop = ({ children }) => children;

class Site extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || Noop;
    // const { theme } = useThemeUI();

    return (
      <React.Fragment>
        <Head>
          <meta name="keywords" content={config.keywords} />
          <meta name="apple-mobile-web-app-title" content={config.siteName} />
        </Head>
        <DefaultSeo {...config.seo} />
        <ThemeProvider theme={theme}>
          <Styled.root>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Styled.root>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default Site;
