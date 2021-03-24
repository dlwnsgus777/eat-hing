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
		width: 60,
		height: 60,
		margin: "0 auto",
	},
	logoutBtnColor: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		color: "white",
	},
	infoBtnColor: {
		background: "linear-gradient(45deg, #0b66dd 30%, #0a8eb2 90%)",
		color: "white",
	},
	postsBtnColor: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		color: "white",
		margin: "0 auto",
		display: "block",
	},
	buttonAlign: {
		justifyContent: "flex-end",
	},
	emailTextColor: {
		color: "gray",
		marginBottom: 20,
	},
}));

const ProfileCard = ({ user, clicklogOutBtn, clickMyPostBtn }) => {
	const classes = useStyles();
	console.log(window);
	return (
		<div className={classes.root}>
			<Grid container justify="center">
				<CardContent style={{ paddingBottom: 15 }}>
					<Grid item xs={12}>
						<Avatar className={classes.Avatar}>H</Avatar>
					</Grid>
					<Grid item xs={6}>
						<Typography variant="h6">{user && user.userName}</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="subtitle1" className={classes.emailTextColor}>
							{user && user.userEmail}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Button
							onClick={clickMyPostBtn}
							className={classes.postsBtnColor}
							size="small"
						>
							내 글 보기
						</Button>
					</Grid>
				</CardContent>
			</Grid>
			<Divider />
			<CardActions className={classes.buttonAlign}>
				{false && (
					<Button className={classes.infoBtnColor} size="small">
						정보변경
					</Button>
				)}
				<Button
					onClick={clicklogOutBtn}
					className={classes.logoutBtnColor}
					size="small"
				>
					로그아웃
				</Button>
			</CardActions>
		</div>
	);
};

export default React.memo(ProfileCard);
