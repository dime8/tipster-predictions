import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import MatchesPage from "./components/matches/MatchesPage";
import Navbar from "./components/navbar/Navbar";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Login from "./login";
import Signup from "./signup";

// Login from "./components/login/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateMatchesPage from "./components/matches/CreateMatchesPage";
import AcceptInvite from "./components/invites/AcceptInvite";
import AuthHelperMethods from "./components/login/AuthHelperMethods";

import withAuth from "./components/login/withAuth";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserId: "",
      currentUser: ""
    };
  }

  Auth = new AuthHelperMethods();

  _handleLogout = () => {
    this.Auth.logout();
    this.props.history.replace("/login");
  };
  componentDidMount() {
    const user = this.Auth.getConfirm();
    this.setState({ currentUserId: user.userid, currentUser: user });
  }

  render() {
    let imageUrl = "";
    try {
      imageUrl = require(`./static/images/cards/default.jpg`);
    } catch {
      imageUrl = require("./static/images/cards/default.jpg");
    }
    console.log("loged ---->>> ", this.state.currentUser);

    return (
      <Router>
        <div className="App">
          <Navbar
            login={this.login}
            logout={this._handleLogout}
            currentUser={this.state.currentUser}
          />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={routeProps => (
                  <MatchesPage
                    currentUser={this.state.currentUser}
                    key={this.state.currentUserId}
                  />
                )}
              />
              <Route exact path="/creatematch" component={CreateMatchesPage} />

              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/invites/:id"
                render={props => (
                  <AcceptInvite
                    key={this.props.currentUserId}
                    currentUserId={this.state.currentUserId}
                    {...props}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default withAuth(App);
