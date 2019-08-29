import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import AuthHelperMethods from "../authentication/AuthHelperMethods";
import "./Navbar.css";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.Auth = new AuthHelperMethods();
  }

  _handleLogout = () => {
    this.Auth.logout();
    this.props.history.replace({
      pathname: "/login"
    });
  };
  hideNav = () => {
    return !this.Auth.loggedIn();
  };

  render() {
    if (this.hideNav()) {
      return null;
    }

    return (
      <AppBar position="static">
        <Toolbar className="Tbar">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/create-match" className="link">
            Add Match
          </Link>
          <Typography variant="h6" className="title">
            Matches
          </Typography>
          <Link to="/about" className="link">
            About
          </Link>
          <Typography variant="h6" className="user">
            {localStorage.getItem("username")}
          </Typography>
          <Link
            to="/login"
            className="link"
            onClick={() => this._handleLogout()}
          >
            Logout
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withRouter(Navbar);
