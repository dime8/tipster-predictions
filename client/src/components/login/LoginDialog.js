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
import RegisterMutation from "../../mutations/RegisterMutation";

import "./Login.css";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    confirm_password: "",
    register: false
  };
  updateField = (fieldName, inputValue) => {
    console.log(fieldName, inputValue);
    this.setState({ [fieldName]: inputValue });
  };
  login_register = () => {
    this.setState({ register: !this.state.register });
  };
  clearData = () => {
    this.setState({
      username: "",
      password: "",
      confirm_password: "",
      register: false
    });
    this.props.handleClose();
  };

  checkPassUsername = () => {
    if (this.state.username.length < 4)
      alert("Username must have 4 or more characters!");

    if (this.state.password.length < 4)
      alert("Password must have 4 or more characters!");

    if (this.state.password !== this.state.confirm_password)
      alert("Password and Confirm password must be the same!");
    return (
      this.state.username.length > 3 &&
      this.state.password > 3 &&
      this.state.password === this.state.confirm_password
    );
  };

  handleLoginRegister = (username, password) => {
    if (!this.state.register) {
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
    } else {
      this.checkPassUsername() &&
        RegisterMutation(username, password, (res, err) => {
          console.log("printanje greska", err, "rezultat ", res);
          if (res.registerUser) {
            this.props.handleClose();
            alert("User registred!" + res.registerUser.uuid);
            this.setState({ username: "", password: "", confirm_password: "" });
          } else {
            alert(err[0].message);
          }
        });
    }
  };
  render() {
    const { open } = this.props;
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
          onClose={this.clearData}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            {this.state.register ? "Register" : "Login"}
          </DialogTitle>
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
              onChange={e => this.updateField(e.target.id, e.target.value)}
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              value={this.state.password}
              onChange={e => this.updateField(e.target.id, e.target.value)}
            />
            {this.state.register && (
              <TextField
                margin="dense"
                id="confirm_password"
                label="Confirm Password"
                type="password"
                fullWidth
                value={this.state.confirm_password}
                onChange={e => this.updateField(e.target.id, e.target.value)}
              />
            )}
          </DialogContent>
          <DialogActions className="login">
            <Button
              className="buttons"
              onClick={() =>
                this.handleLoginRegister(
                  this.state.username,
                  this.state.password
                )
              }
            >
              {this.state.register ? "Register" : "Login"}
            </Button>
            <Button
              className="switchButton"
              onClick={() => this.login_register()}
            >
              {this.state.register ? "login" : "register"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Login;
