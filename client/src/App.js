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
      currentUserId: localStorage.getItem("id_token") || ""
    };
  }
  /* Create a new instance of the 'AuthHelperMethods' component at the top of the class*/
  Auth = new AuthHelperMethods();
  /* Add the following into _handleLogout*/
  _handleLogout = () => {
    this.Auth.logout();
    this.props.history.replace("/login");
  };
  componentDidMount() {
    const currentUserId = localStorage.getItem("id_token");
    this.setState({ currentUserId });
  }

  login = currentUserId => {
    localStorage.setItem("id_token", currentUserId);
    this.setState({ currentUserId });
  };

  render() {
    let imageUrl = "";
    try {
      imageUrl = require(`./static/images/cards/default.jpg`);
    } catch {
      imageUrl = require("./static/images/cards/default.jpg");
    }
    console.log("--->>> Storage: ", localStorage);

    return (
      <Router>
        <div className="App">
          <Navbar
            login={this.login}
            logout={this._handleLogout}
            currentUserId={this.state.currentUserId}
          />
          {this.state.currentUserId !== "" ? (
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/creatematch"
                  component={CreateMatchesPage}
                />
                {/* <Route exact path="/" component={MatchesPage} /> */}
                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <MatchesPage
                      currentUserId={this.state.currentUserId}
                      key={this.state.currentUserId}
                    />
                  )}
                />

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
          ) : (
            <div>
              <Typography variant="body2" color="textSecondary" component="p">
                <span className="LogIn">Please login!</span>
              </Typography>
              <CardMedia
                component="img"
                alt="sport"
                height="400"
                image={imageUrl}
                title="sport"
              />
            </div>
          )}
        </div>
      </Router>
    );
  }
}
export default withAuth(App);
