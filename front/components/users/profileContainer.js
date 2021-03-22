import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import { GET_USER_INFO_REQUEST } from "../../reducers/account";
import { END } from "redux-saga";
import { useSelector } from "react-redux";
import { TextareaAutosize } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: 200,
		// display: 'flex',
		// '& > *': {
		//   margin: theme.spacing(1),
		// },
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	Avatar: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
		width: 75,
		height: 75,
		margin: "a auto",
	},
	buttonColor: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		color: "white",
	},
	buttonAlign: {
		justifyContent: "space-between",
	},
}));

const ProfileCardContainer = ({ user }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3} justify="center">
				<CardContent>
					<Grid item xs={12}>
						<Avatar className={classes.Avatar}>H</Avatar>
					</Grid>
					<Grid item xs={6}>
						<Typography variant="h6">{user && user.userName}</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="subtitle1">이메일</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="subtitle1">내 글 보기</Typography>
					</Grid>
				</CardContent>
			</Grid>
			<Divider />
			<CardActions className={classes.buttonAlign}>
				<Button className={classes.buttonColor} size="small">
					정보변경
				</Button>
				<Button className={classes.buttonColor} size="small">
					로그아웃
				</Button>
			</CardActions>
		</div>
	);
};

export default React.memo(ProfileCardContainer);
