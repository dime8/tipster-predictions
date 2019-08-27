import React, { Component } from "react";
import AuthHelperMethods from "./components/login/AuthHelperMethods";
import "./login.css";
import { Link } from "react-router-dom";
import RegisterMutation from "./mutations/RegisterMutation";

export default class Signup extends Component {
  Auth = new AuthHelperMethods();
  state = {
    username: "",
    password: "",
    confirm_password: ""
  };

  checkPassUsername = () => {
    if (this.state.username.length < 4)
      alert("Username must have 4 or more characters!");

    if (this.state.password.length < 4)
      alert("Password must have 4 or more characters!");

    if (this.state.password !== this.state.confirm_password)
      alert("Password and Confirm password must be the same!");
    return (
      this.state.username.length > 3 &&
      this.state.password > 3 &&
      this.state.password === this.state.confirm_password
    );
  };

  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.checkPassUsername() &&
      RegisterMutation(this.state.username, this.state.password, (res, err) => {
        if (res.registerUser) {
          alert("User registred!" + res.registerUser.uuid);
          this.setState({ username: "", password: "", confirm_password: "" });
          this.props.history.replace("/login");
        } else {
          alert(err[0].message);
        }
      });
  };

  componentDidMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-wrapper">
          <div className="box">
            <div className="box-header">
              <h1>Signup</h1>
            </div>
            <form className="box-form">
              <input
                className="form-item"
                placeholder="Username"
                name="username"
                type="text"
                onChange={this._handleChange}
              />
              <input
                className="form-item"
                placeholder="Password"
                name="password"
                type="password"
                onChange={this._handleChange}
              />
              <input
                className="form-item"
                placeholder="Confirm Password"
                name="confirm_password"
                type="confirm_password"
                onChange={this._handleChange}
              />
              <button className="form-submit" onClick={this.handleFormSubmit}>
                Signup
              </button>
            </form>
            <Link className="linkLoginSignup" to="/login">
              Already have an account?{" "}
              <span className="link-signup">Login</span>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
