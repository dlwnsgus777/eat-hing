/* global kakao */

import React, { useEffect, useState, useRef } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";

const drawerWidth = 480;

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	title: {
		flexGrow: 1,
	},
	buttonColor: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		color: "white",
	},
}));

export default function EatingMap(props) {
	const [open, setOpen] = useState(false);
	const classes = useStyles();
	const { isOpen } = useSelector((state) => state.openContent);
	const { markerPositions, size } = props;
	const [kakaoMap, setKakaoMap] = useState(null);
	const [markers, setMarkers] = useState([]);

	const container = useRef();

	useEffect(() => {
		// const script = document.createElement("script");
		// script.src =
		// 	"https://dapi.kakao.com/v2/maps/sdk.js?appkey=cfea133f48888d7fa4487e105db35248&autoload=false";
		// document.head.appendChild(script);

		// script.onload = () => {
		kakao.maps.load(() => {
			const center = new kakao.maps.LatLng(37.50802, 127.062835);
			const options = {
				center,
				level: 3,
			};
			const map = new kakao.maps.Map(container.current, options);
			//setMapCenter(center);
			setKakaoMap(map);
		});
		// };
	}, [container]);

	// useEffect(() => {
	// 	if (kakaoMap === null) {
	// 		return;
	// 	}

	// 	// save center position
	// 	const center = kakaoMap.getCenter();

	// 	// change viewport size
	// 	const [width, height] = size;
	// 	container.current.style.width = `${width}px`;
	// 	container.current.style.height = `${height}px`;

	// 	// relayout and...
	// 	kakaoMap.relayout();
	// 	// restore
	// 	kakaoMap.setCenter(center);
	// }, [kakaoMap, size]);

	// useEffect(() => {
	// 	if (kakaoMap === null) {
	// 		return;
	// 	}

	// 	const positions = markerPositions.map(
	// 		(pos) => new kakao.maps.LatLng(...pos),
	// 	);

	// 	setMarkers((markers) => {
	// 		// clear prev markers
	// 		markers.forEach((marker) => marker.setMap(null));

	// 		// assign new markers
	// 		return positions.map(
	// 			(position) => new kakao.maps.Marker({ map: kakaoMap, position }),
	// 		);
	// 	});

	// 	if (positions.length > 0) {
	// 		const bounds = positions.reduce(
	// 			(bounds, latlng) => bounds.extend(latlng),
	// 			new kakao.maps.LatLngBounds(),
	// 		);

	// 		kakaoMap.setBounds(bounds);
	// 	}
	// }, [kakaoMap, markerPositions]);

	return (
		<div
			id="container"
			ref={container}
			className={clsx(classes.appBar, {
				[classes.appBarShift]: isOpen,
			})}
			style={{ width: "100%", height: 950 }}
		/>
	);
}

// import React from 'react';

// export default EatingMap;
