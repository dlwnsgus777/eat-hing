import ProfileContainer from "../../components/users/ProfileContainer";

import wrapper from "../../store/configureStore";
import { GET_USER_INFO_REQUEST } from "../../reducers/account";
import { OPEN_CONTENT } from "../../reducers/openContent";
import { END } from "redux-saga";

const User = () => {
	return <ProfileContainer />;
};

export const getServerSideProps = wrapper.getServerSideProps(
	async (context) => {
		context.store.dispatch({
			type: GET_USER_INFO_REQUEST,
		});
		context.store.dispatch({
			type: OPEN_CONTENT,
		});
		context.store.dispatch(END);
		await context.store.sagaTask.toPromise();
	},
);

export default User;
