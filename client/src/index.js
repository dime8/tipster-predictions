import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as Sentry from '@sentry/browser'
Sentry.init({
    dsn: "https://ecbd9b4d85b4493480ab3a15294816b4@sentry.io/1793554",
    environment: 'development',
    release: '19fcb6f576cec6604ad25cf0699d2b41ee40be64'
})

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
