import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import _Typography from "../common/_Typography";
import _Button from "../common/_Button";
import IconButton from "@material-ui/core/IconButton";
import GamepadIcon from "@material-ui/icons/Gamepad";
// import UserAuthDialogComp from "../user/UserAuthDialogComp";
import CategoryDrawerComp from "./CategoryDrawerComp";
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import LogInCont from "../../containers/LogInCont";

// function ElevationScroll(props) {
//     const { children, window } = props;
//     // Note that you normally won't need to set the window ref as useScrollTrigger
//     // will default to window.
//     // This is only being set here because the demo is in an iframe.
//     const trigger = useScrollTrigger({
//       disableHysteresis: true,
//       threshold: 0,
//       target: window ? window() : undefined,
//     });

//     return React.cloneElement(children, {
//       elevation: trigger ? 4 : 0,
//     });
//   }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const NavigationBar = ({ onDrawerClick, onHomeClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onHomeClick}
          >
            <GamepadIcon />
          </IconButton>
          <_Typography variant="h6" className={classes.title}>
            eGameShop
          </_Typography>
          <_Button color="inherit" onClick={onHomeClick}>
            Home
          </_Button>
          <CategoryDrawerComp onClick={onDrawerClick} />
          <LogInCont />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
