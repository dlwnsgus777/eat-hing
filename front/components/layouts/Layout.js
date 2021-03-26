import React, { useCallback, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import clsx from "clsx";
import Footer from "./Footer";
import Left from "./Left";
import EatingMap from "../EatingMap";
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
		height: `100%`,
	},
	title: {
		flexGrow: 1,
	},
	buttonColor: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		color: "white",
	},
	eatingMapStyle: {
		overflow: "hidden",
	},
}));
function Layout({ children }) {
	const [open, setOpen] = useState(false);
	const classes = useStyles();
	const { isOpen } = useSelector((state) => state.openContent);
	const handleToggleOpen = () => {
		setOpen(!open);
	};
	return (
		<>
			<Navbar open={open} handleToggleOpen={handleToggleOpen} />
			<Left open={open} handleToggleOpen={handleToggleOpen}>
				<div>{children}</div>
			</Left>
			<EatingMap className={classes.eatingMapStyle}></EatingMap>
			{/* <Footer /> */}
		</>
	);
}

export default Layout;
