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

	return (
		<>
			<Head>
				<title>미식 로드</title>
			</Head>
			<Layout>
				<Component />
			</Layout>
		</>
	);
}

export default wrapper.withRedux(EatHing); //EatHing
