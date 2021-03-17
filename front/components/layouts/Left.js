import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { useSelector, useDispatch } from 'react-redux';
import { CLOSE_CONTENT } from "../../reducers/openContent"

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

function Left({children}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.openContent)

  const closeContnent = () => {
    return dispatch({type: CLOSE_CONTENT})
  }

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
        <Divider />
        <div>{children}</div>
        <Divider />
      </Drawer>
  )
}

export default Left;
