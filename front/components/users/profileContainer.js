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

import { GET_USER_INFO_REQUEST } from "../../reducers/account";
import { END } from "redux-saga";
import { useSelector } from "react-redux";
import { TextareaAutosize } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
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
}));

const ProfileCardContainer = ({ user }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root} variant="outlined">
			<Grid container spacing={3} justify="center">
				<CardContent>
					<Grid item xs={6}>
						<Avatar className={classes.Avatar}>H</Avatar>
					</Grid>
					<Grid item xs={6}>
						<Typography
							className={classes.title}
							color="textSecondary"
							gutterBottom
						>
							{user && user.userId}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h5" component="h2">
							{user && user.userName}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h5" component="h2">
							{user && user.userName}
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h5" component="h2">
							{user && user.userName}
						</Typography>
					</Grid>
				</CardContent>
			</Grid>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
};

export default React.memo(ProfileCardContainer);
