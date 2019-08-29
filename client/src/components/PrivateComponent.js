import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthHelperMethods from "../utils/AuthHelperMethods";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const Auth = new AuthHelperMethods();

  return (
    <Route
      {...rest}
      render={props => {
        return Auth.loggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
