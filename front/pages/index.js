import React, { useEffect } from "react";

import Map from "../components/Map";

const Home = () => {
	return <Map />;
};

// export const getServerSideProps = wrapper.getServerSideProps(
// 	async (context) => {
// 		context.store.dispatch({
// 			type: GET_USER_INFO_REQUEST,
// 		});
// 		context.store.dispatch(END);
// 		await context.store.sagaTask.toPromise();
// 	},
// );

export default Home;
