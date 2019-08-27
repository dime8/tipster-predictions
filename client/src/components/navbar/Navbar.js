import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AuthHelperMethods from "../login/AuthHelperMethods";
import "./Navbar.css";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  state = {
    redirect: false
  };

  Auth = new AuthHelperMethods();
  _handleLogout = () => {
    this.Auth.logout();
    this.props.history.replace({
      pathname: "/login"
    });
  };
  HideNav = () => {
    const url = this.props.location.pathname;
    return url === "/login" || url === "/signup";
  };

  render() {
    if (this.HideNav()) {
      return null;
    }

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
          <Button color="inherit" onClick={() => this._handleLogout()}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withRouter(Navbar);
