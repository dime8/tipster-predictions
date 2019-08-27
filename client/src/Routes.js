import React, { Component } from "react";
import MatchesPage from "./routes/MatchesPage";
import Navbar from "./components/navbar/Navbar";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import CreateMatchesPage from "./routes/CreateMatchesPage";
import AcceptInvite from "./routes/AcceptInvite";
import Login from "./components/authentication/login";
import Signup from "./components/authentication/signup";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={MatchesPage} />
              <Route exact path="/creatematch" component={CreateMatchesPage} />

              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/invites/:id"
                render={props => (
                  <AcceptInvite
                    key={this.props.currentUserId}
                    currentUser={localStorage.getItem("currentUser")}
                    {...props}
                  />
                )}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
