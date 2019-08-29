import React, { Component } from "react";
import MatchesPage from "./routes/MatchesPage";
import Navbar from "./components/navbar/Navbar";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import CreateMatchesPage from "./routes/CreateMatchesPage";
import AcceptInvite from "./components/invites/AcceptInvite";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import PrivateComponent from "./utils/PrivateComponent";
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
              <PrivateComponent component={MatchesPage} exact path="/" />
              <PrivateComponent
                component={CreateMatchesPage}
                exact
                path="/create-match"
              />
              <PrivateComponent
                component={CreateMatchesPage}
                exact
                path="/match/:id"
              />
              <PrivateComponent exact path="/about" component={About} />
              <PrivateComponent
                component={AcceptInvite}
                exact
                path="/invites/:id"
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
