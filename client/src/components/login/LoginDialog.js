import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CardMedia from "@material-ui/core/CardMedia";
import LoginMutation from "../../mutations/LoginMutation";

import "./Login.css";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  updateField = (fieldName, inputValue) => {
    console.log(fieldName, inputValue);
    this.setState({ [fieldName]: inputValue });
  };
  handleLogin = (username, password) => {
    LoginMutation(username, password, (res, err) => {
      console.log("printanje greska", err, "rezultat ", res);
      if (res.login) {
        this.props.login(res.login.uuid);
        this.props.handleClose();
        this.setState({ username: "", password: "" });
      } else {
        alert("Data not correct: " + err[0].message);
      }
    });
  };
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
              value={this.state.username}
              onChange={e => this.updateField("username", e.target.value)}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              value={this.state.password}
              onChange={e => this.updateField("password", e.target.value)}
            />
          </DialogContent>
          <DialogActions className="login">
            <Button
              className="buttons"
              onClick={() =>
                this.handleLogin(this.state.username, this.state.password)
              }
            >
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
