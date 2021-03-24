import React from "react";

import { LOG_OUT_REQUEST } from "../../reducers/account";
import { END } from "redux-saga";
import { useSelector, useDispatch } from "react-redux";

import ProfileCard from "./ProfileCard";

const ProfileContainer = () => {
	const { userInfo } = useSelector((state) => state.account);
	const dispatch = useDispatch();

	const clicklogOutBtn = () => {
		dispatch({ type: LOG_OUT_REQUEST });
	};

	const clickMyPostBtn = () => {
		console.log("get my post");
	};

	return (
		<>
			<ProfileCard
				user={userInfo}
				clicklogOutBtn={clicklogOutBtn}
				clickMyPostBtn={clickMyPostBtn}
			/>
		</>
	);
};

export default ProfileContainer;
