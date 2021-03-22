import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { GET_USER_INFO_REQUEST } from "../../reducers/account";
import { END } from "redux-saga";
import { useSelector } from "react-redux";

import ProfileCardContainer from "./profileContainer";

const ProfileCard = () => {
	const user = useSelector((state) => state.account.userInfo);

	return (
		<>
			<ProfileCardContainer user={user} />
		</>
	);
};

export default React.memo(ProfileCard);
