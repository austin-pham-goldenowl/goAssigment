import React from "react";
import _Dialog from "../common/_Dialog";
import _DialogTitle from "../common/_DialogTitle";
import _DialogContent from "../common/_DialogContent";
import _DialogContentText from "../common/_DialogContentText";
import _DialogActions from "../common/_DialogActions";
import _TextInput from "../common/_TextInput";
import _Checkbox from "../common/_Checkbox";
import _Button from "../common/_Button";
import _Typography from "../common/_Typography";
import Avatar from "@material-ui/core/Avatar";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import GamepadIcon from "@material-ui/icons/Gamepad";

const UserAuthDialogComp = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <_Button color="inherit" onClick={handleClickOpen}>
        Sign In
      </_Button>
      <_Dialog open={open} onClose={handleClose}>
        <_DialogTitle>
          <center>
            <GamepadIcon color={"secondary"} fontSize={"large"} />
            <_Typography component={"h1"} variant={"h5"}>
              Sign In
            </_Typography>
          </center>
        </_DialogTitle>
        <_DialogContent>
          <_TextInput
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <_TextInput
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <_Checkbox label={"Remember Me"} />
        </_DialogContent>
        <_DialogActions>
          <_Button onClick={handleClose} color="primary">
            Log In
          </_Button>
          <_Button onClick={handleClose} color="primary">
            Cancel
          </_Button>
        </_DialogActions>
      </_Dialog>
    </div>
  );
};

export default UserAuthDialogComp;
