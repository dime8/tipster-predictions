import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "../login/LoginDialog";

export default class Navbar extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { currentUserId } = this.props;
    console.log("loged user ---->>> ", currentUserId);
    return (
      <AppBar position="static">
        <Login
          open={this.state.open}
          handleClose={this.handleClose}
          login={this.props.login}
        />
        <Toolbar className="Tbar">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/creatematch" className="link">
            Add Match
          </Link>
          <Typography variant="h6" className="title">
            Matches
          </Typography>
          <Link to="/about" className="link">
            About
          </Link>
          {currentUserId !== "" ? (
            <Button color="inherit" onClick={this.props.logout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={this.handleClickOpen}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}
