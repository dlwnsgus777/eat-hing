import React, { useEffect } from "react";
import wrapper from "../store/configureStore";
import { OPEN_CONTENT } from "../reducers/openContent";
import { END } from "redux-saga";
import EatingMap from "../components/EatingMap";

const Home = () => {
	// return <EatingMap />;
	return <div>asd</div>
};

export const getServerSideProps = wrapper.getServerSideProps(
	async (context) => {
		context.store.dispatch({
			type: OPEN_CONTENT,
		});
		context.store.dispatch(END);
		await context.store.sagaTask.toPromise();
	},
);

export default Home;
