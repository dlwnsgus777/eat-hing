/*global kakao*/
import React, { Component } from "react";
import styled from "styled-components";

class Map extends Component {
	componentDidMount() {
		const kakaoAppkey = "30ad1e5d902fc6eed8927aea74b9c8e7";
		const script = document.createElement("script");
		script.async = true;
		script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoAppkey}&autoload=false`;
		document.head.appendChild(script);

		script.onload = () => {
			kakao.maps.load(() => {
				let container = document.getElementById("Mymap");
				let options = {
					center: new kakao.maps.LatLng(37.506502, 127.053617),
					level: 7,
				};

				const map = new window.kakao.maps.Map(container, options);
			});
		};
	}

	render() {
		return <MapContents id="Mymap"></MapContents>;
	}
}

const MapContents = styled.div`
	width: 100%;
	height: 100%;
`;

export default Map;
// export const getServerSideProps = wrapper.getServerSideProps(
// 	async (context) => {
// 		context.store.dispatch({
// 			type: GET_USER_INFO_REQUEST,
// 		});
// 		context.store.dispatch(END);
// 		await context.store.sagaTask.toPromise();
// 	},
// );
