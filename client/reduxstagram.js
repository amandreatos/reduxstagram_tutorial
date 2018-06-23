import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";
import { Router, Route, IndexRoute } from "react-router";
import css from "./styles/style.styl";

import { Provider } from "react-redux";
import store, { history } from "./store";

import Raven from "raven-js";
import { sentry_url, logException } from "./data/config";

// Raven.config(sentry_url).install();

// logException(new Error("download failed!"), {
//   email: "anthony@321webmarketing.com"
// });


// Raven.captureMessage('Something bad happend!');
// Raven.showReportDialog();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
