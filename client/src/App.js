import React from "react";
import "./App.css";
import Routes from "./Routes";
import AuthHelperMethods from "./components/authentication/AuthHelperMethods";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: localStorage.getItem("currentUser") || ""
    };
  }
  Auth = new AuthHelperMethods();

  componentDidMount() {
    // const currentUser = this.Auth.getConfirm();
    this.setState({ currentUser: localStorage.getItem("currentUser") || "" });
  }

  render() {
    console.log("App rendering!!! Loged user", this.state.currentUser);
    return (
      <Routes
        currentUser={this.state.currentUser}
        setCurrentUser={this.setCurrentUser}
      />
    );
  }
}
export default App;
