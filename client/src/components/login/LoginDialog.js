import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CardMedia from "@material-ui/core/CardMedia";
import "./Login.css";

class Login extends React.Component {
  render() {
    const { open, handleClose } = this.props;
    let imageUrl = "";
    try {
      imageUrl = require(`../../static/images/login.svg`);
    } catch {
      imageUrl = require("../../static/images/cards/default.jpg");
    }
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <CardMedia
              component="img"
              alt="login"
              height="100"
              image={imageUrl}
              title="login"
            />
            <DialogContentText />
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Username"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions className="login">
            <Button className="buttons" onClick={handleClose}>
              Login
            </Button>
            <Button onClick={handleClose}>Register</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Login;
