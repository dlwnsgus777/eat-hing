import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";

import ProfileContainer from "../users/ProfileContainer";
import SearchInput from "../SearchInputField";

import { useSelector, useDispatch } from "react-redux";
import { OPEN_CONTENT } from "../../reducers/openContent";

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

function NavMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const { isOpen } = useSelector((state) => state.openContent);
	const router = useRouter();
	const dispatch = useDispatch();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const openContnent = (url) => {
		setAnchorEl(null);
		if (!isOpen) {
			dispatch({ type: OPEN_CONTENT });
			router.push(url);
		}
		router.push(url);
	};

	return (
		<div>
			<IconButton
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={() => openContnent("/user")}>Profile</MenuItem>
				<MenuItem onClick={() => openContnent("/test")}>My account</MenuItem>
				<MenuItem onClick={() => openContnent("/user")}>Logout</MenuItem>
			</Menu>
		</div>
	);
}

function Navbar() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const { isOpen } = useSelector((state) => state.openContent);
	const { userInfo } = useSelector((state) => state.account);

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: isOpen,
				})}
				color="default"
			>
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						????????? ??????
					</Typography>
					<SearchInput />
					<NavMenu />
					{userInfo ? (
						<div>
							<Button
								aria-describedby={id}
								variant="contained"
								color="default"
								onClick={handleClick}
								className={classes.buttonColor}
							>
								Profile
							</Button>
							<Popover
								id={id}
								open={open}
								anchorEl={anchorEl}
								onClose={handleClose}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "center",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "center",
								}}
							>
								<ProfileContainer />
							</Popover>
						</div>
					) : (
						<Button color="inherit">Login</Button>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
