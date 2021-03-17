import '../styles/globals.css'

import Layout from "../components/layouts/Layout";
import React from 'react';
import Head from "next/head"

import wrapper from "../store/configureStore";

function EatHing({ Component, pageProps }) {
    React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <> 
      <Head>
        <meta charSet="utf-8" />
        <title>미식 로드</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default wrapper.withRedux(EatHing)//EatHing
