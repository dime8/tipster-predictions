import decode from "jwt-decode";
import LoginMutation from "../../mutations/LoginMutation";
import jwt from "jsonwebtoken";

export default class AuthHelperMethods {
  login = (username, password) => {
    return LoginMutation(username, password, (res, err) => {
      console.log("printanje greska", err, "rezultat ", res.login);
      if (res.login) {
        const token = jwt.sign(
          {
            ...res.login.jwtToken
          },
          "chelseafc"
        );
        this.setToken(token); // Setting the token in localStorage
        return Promise.resolve(res);
      } else {
        err
          ? alert("Data not correct: " + err[0].message)
          : alert("Data not correct. ");
      }
    });
  };

  loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // Getting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  };

  isTokenExpired = token => {
    try {
      const decoded = decode(token);
      console.log("Dekodirani token:", decoded, " vrijeme ", Date.now());
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired.
        return true;
      } else return false;
    } catch (err) {
      console.log("expired check failed! Line 42: AuthService.js");
      return false;
    }
  };

  setToken = idToken => {
    // Saves user token to localStorage
    console.log("postavljanje tokena", idToken);

    localStorage.setItem("token", idToken);
  };

  getToken = () => {
    // Retrieves the user token from localStorage

    const token = localStorage.getItem("token");
    console.log("preuzimanje tokena", token);
    return token;
  };

  logout = () => {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("token");
  };

  getConfirm = () => {
    // Using jwt-decode npm package to decode the token
    let answer = decode(this.getToken());
    console.log("Recieved answer!");
    return answer;
  };

  fetch = (url, options) => {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    if (this.loggedIn()) {
      headers["Authorization"] = "Bearer " + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json());
  };

  _checkStatus = response => {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 to 300
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  };
}
