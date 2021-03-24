import React, { useEffect } from "react";

const { kakao } = window;

const Map = () => {
	useEffect(() => {
		const container = document.getElementById("myMap");
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3,
		};
		const map = new kakao.maps.Map(container, options);
	}, []);
	return (
		<div
			id="myMap"
			style={{
				width: "500px",
				height: "500px",
			}}
		></div>
	);
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

export default Map;
