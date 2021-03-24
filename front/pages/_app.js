import "../styles/globals.css";

import Layout from "../components/layouts/Layout";
import React from "react";
import Head from "next/head";

import wrapper from "../store/configureStore";

function EatHing({ Component }) {
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	const kakaoAppkey = "30ad1e5d902fc6eed8927aea74b9c8e7";

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>미식 로드</title>
				<link rel="icon" href="/favicon.ico" />
				<script
					type="text/javascript"
					src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoAppkey}&libraries=services,clusterer,drawing`}
				></script>
			</Head>
			<Layout>
				<Component />
			</Layout>
		</>
	);
}

export default wrapper.withRedux(EatHing); //EatHing
