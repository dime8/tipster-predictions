import React, { Component } from "react";

/* We want to import our 'AuthHelperMethods' component in order to send a login request */
import AuthHelperMethods from "../../utils/AuthHelperMethods";
import { Link } from "react-router-dom";
import { logAndTrackError } from '../../utils/log'

import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.Auth = new AuthHelperMethods();
  }
  /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */

  /* Fired off every time the use enters something into the input fields */
  _Change = e => {

    try {
      console.log("err")
      throw new Error('err for sentry')
    } catch (err) {
      logAndTrackError(err)
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
    this.Auth.login(this.state.username, this.state.password)
      .then(res => {
        if (res === false) {
          logAndTrackError(new Error('Sentry test error'))

          return alert("Sorry those credentials don't exist!");
        }

        this.props.history.replace({
          pathname: "/",
          state: res.login.jwtToken.userid
        });
      })
      .catch(err => {

        alert(err);
      });
  };

  componentDidMount() {
    /* Here is a great place to redirect someone who is already logged in to the protected route */
    if (this.Auth.loggedIn()) this.props.history.replace("/");
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-wrapper">
          <div className="box">
            <div className="box-header">
              <h1>Login</h1>
            </div>
            <form className="box-form">
              <input
                className="form-item"
                placeholder="Username"
                name="username"
                type="text"
                onChange={this._Change}
              />
              <input
                className="form-item"
                placeholder="Password"
                name="password"
                type="password"
                onChange={this._handleChange}
              />
              <button className="form-submit" onClick={this.handleFormSubmit}>
                Login
              </button>
            </form>
            <Link className="linkLoginSignup" to="/signup">
              Don't have an account? <span className="link-signup">Signup</span>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Login;
