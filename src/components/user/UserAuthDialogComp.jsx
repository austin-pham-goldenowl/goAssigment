import React from "react";
import _Dialog from "../common/_Dialog";
import _DialogTitle from "../common/_DialogTitle";
import _DialogContent from "../common/_DialogContent";
// import _DialogContentText from "../common/_DialogContentText";
// import _DialogActions from "../common/_DialogActions";
import _TextInput from "../common/_TextInput";
// import _Checkbox from "../common/_Checkbox";
import _Button from "../common/_Button";
import _Typography from "../common/_Typography";
// import Avatar from "@material-ui/core/Avatar";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import GamepadIcon from "@material-ui/icons/Gamepad";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { Grid } from "@material-ui/core";

const UserAuthDialogComp = ({
  userName,
  password,
  loginError,
  isLoginSuccess,
  handleUserNameChange,
  handlePasswordChange,
  onSubmit,
  logout
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <_Button
        color="inherit"
        onClick={!isLoginSuccess ? handleClickOpen : logout}
      >
        {!isLoginSuccess ? "Sign In" : "Sign Out"}
      </_Button>
      <_Dialog
        open={!isLoginSuccess ? open : !isLoginSuccess}
        onClose={handleClose}
      >
        <_DialogTitle>
          <center>
            <GamepadIcon color={"secondary"} fontSize={"large"} />
            <_Typography component={"h1"} variant={"h5"}>
              Sign In
            </_Typography>
          </center>
        </_DialogTitle>
        <_DialogContent>
          <form onSubmit={onSubmit}>
            <_TextInput
              disabled={isLoginSuccess}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Username"
              name="userName"
              autoComplete="username"
              onChange={handleUserNameChange}
              value={userName}
              autoFocus
            />
            <_TextInput
              disabled={isLoginSuccess}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
              value={password}
            />
            <Grid container>
              <_Button type="submit" color="primary">
                Log In
              </_Button>
              <_Button onClick={handleClose} color="primary">
                Cancel
              </_Button>
            </Grid>
            <div className="message">
              {loginError && (
                <SnackbarContent
                  aria-describedby="client-snackbar"
                  style={{ marginTop: 5, backgroundColor: "#800000" }}
                  message={
                    <span id="client-snackbar">{loginError.message}</span>
                  }
                />
              )}
            </div>
          </form>
        </_DialogContent>
      </_Dialog>
    </div>
  );
};

export default UserAuthDialogComp;
