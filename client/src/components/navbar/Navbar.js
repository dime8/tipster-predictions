import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "../login/LoginDialog";

const currentUserId = "086670ad-c4c8-4546-ae1e-063c52f0cde0";
//const currentUserId = "ce1c1300-a5dc-4533-a10a-5103278bbfb6";

export default class Navbar extends Component {
  state = { open: false };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.login(currentUserId);
  };

  render() {
    return (
      <AppBar position="static">
        <Login open={this.state.open} handleClose={this.handleClose} />
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
          <Button color="inherit" onClick={this.handleClickOpen}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
