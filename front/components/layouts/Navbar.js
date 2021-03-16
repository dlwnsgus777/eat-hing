import React, { useState } from "react";
import { useRouter } from "next/router"

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Left from "../layouts/Left";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const classes = useStyles();

    const handleToggleOpen = () => {
        setOpen(!open)
    }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={handleToggleOpen}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            여기는 로고
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Left open={open} handleToggleOpen={handleToggleOpen}/>
    </div>
  )
}

export default Navbar;