import '../styles/globals.css'

import Layout from "../components/layouts/Layout";
import Head from "next/head"

import wrapper from "../store/configureStore";

function EatHing({ Component, pageProps }) {
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

export default EatHing// wrapper.withRedux(EatHing)
