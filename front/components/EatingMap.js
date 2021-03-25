/* global kakao */

// import React, { useEffect, useState, useRef } from "react";

// export default function EatingMap(props) {
// 	const { markerPositions, size } = props;
// 	const [kakaoMap, setKakaoMap] = useState(null);
// 	const [markers, setMarkers] = useState([]);

// 	const container = useRef();

// 	useEffect(() => {
// 		// const script = document.createElement("script");
// 		// script.src =
// 		// 	"https://dapi.kakao.com/v2/maps/sdk.js?appkey=cfea133f48888d7fa4487e105db35248&autoload=false";
// 		// document.head.appendChild(script);

// 		// script.onload = () => {
// 		kakao.maps.load(() => {
// 			const center = new kakao.maps.LatLng(37.50802, 127.062835);
// 			const options = {
// 				center,
// 				level: 3,
// 			};
// 			const map = new kakao.maps.Map(container.current, options);
// 			//setMapCenter(center);
// 			setKakaoMap(map);
// 		});
// 		// };
// 	}, [container]);

// 	// useEffect(() => {
// 	// 	if (kakaoMap === null) {
// 	// 		return;
// 	// 	}

// 	// 	// save center position
// 	// 	const center = kakaoMap.getCenter();

// 	// 	// change viewport size
// 	// 	const [width, height] = size;
// 	// 	container.current.style.width = `${width}px`;
// 	// 	container.current.style.height = `${height}px`;

// 	// 	// relayout and...
// 	// 	kakaoMap.relayout();
// 	// 	// restore
// 	// 	kakaoMap.setCenter(center);
// 	// }, [kakaoMap, size]);

// 	// useEffect(() => {
// 	// 	if (kakaoMap === null) {
// 	// 		return;
// 	// 	}

// 	// 	const positions = markerPositions.map(
// 	// 		(pos) => new kakao.maps.LatLng(...pos),
// 	// 	);

// 	// 	setMarkers((markers) => {
// 	// 		// clear prev markers
// 	// 		markers.forEach((marker) => marker.setMap(null));

// 	// 		// assign new markers
// 	// 		return positions.map(
// 	// 			(position) => new kakao.maps.Marker({ map: kakaoMap, position }),
// 	// 		);
// 	// 	});

// 	// 	if (positions.length > 0) {
// 	// 		const bounds = positions.reduce(
// 	// 			(bounds, latlng) => bounds.extend(latlng),
// 	// 			new kakao.maps.LatLngBounds(),
// 	// 		);

// 	// 		kakaoMap.setBounds(bounds);
// 	// 	}
// 	// }, [kakaoMap, markerPositions]);

// 	return (
// 			<div
// 				id="container"
// 				ref={container}
// 				style={{ width: "100%", height: 300 }}
// 			/>
// 	);
// }

// import React from 'react';
import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_CONTENT } from "../reducers/openContent"

const drawerWidth = 480;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

function EatingMap(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.openContent)

  const closeContnent = () => {
    return dispatch({type: CLOSE_CONTENT})
  }
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

  return (
     <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={closeContnent}>
            <CloseIcon />
          </IconButton>
        </div>
 			<div
 				id="container"
 				ref={container}
 				style={{ width: "100%", height: 300 }}
 			/>
      </Drawer>
  )
}

export default EatingMap;
