import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
    //   const { currentUser } = this.props;
    //   console.log("loged user ---->>> ", currentUser);
    return (
      <AppBar position="static">
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
          <Button color="inherit" onClick={this.props.logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
