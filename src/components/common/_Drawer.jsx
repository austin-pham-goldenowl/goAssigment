import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import _Button from "./_Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const _Drawer = ({ text, list, onClick, ...props }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (list, side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Divider />
        {list.map((text, index) => (
          <div>
            <Divider />
            <ListItem button key={index} onClick={() => onClick(index)}>
              <ListItemText primary={text} />
            </ListItem>
            <Divider />
          </div>
        ))}
        <Divider />
      </List>
    </div>
  );

  //   const fullList = (list, side) => (
  //     <div
  //       className={classes.fullList}
  //       role="presentation"
  //       onClick={toggleDrawer(side, false)}
  //       onKeyDown={toggleDrawer(side, false)}
  //     >
  //       <List>
  //         {list.map((text, index) => (
  //           <ListItem button key={text}>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         ))}
  //       </List>
  //     </div>
  //   );

  return (
    <div>
      {/* <Button onClick={toggleDrawer("left", true)}>Open Left</Button> */}
      <_Button color="inherit" onClick={toggleDrawer("right", true)}>
        {text}
      </_Button>
      {/* <Button onClick={toggleDrawer("top", true)}>Open Top</Button>
      <Button onClick={toggleDrawer("bottom", true)}>Open Bottom</Button> */}
      {/* <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
      </SwipeableDrawer> */}
      {/* <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
      >
        {fullList("top")}
      </SwipeableDrawer> */}
      {/* <SwipeableDrawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
      >
        {fullList("bottom")}
      </SwipeableDrawer> */}
      <SwipeableDrawer
        {...props}
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {sideList(list, "right")}
      </SwipeableDrawer>
    </div>
  );
};

export default _Drawer;
