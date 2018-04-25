import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Wrapper from "./components/wrapper";

import "./_index.css";

const App = () => (
  <Router>
    <React.Fragment>
      <Route
        exact path="/er"
        component={Wrapper}
      />
      <Redirect from="/" to="/er" />
    </React.Fragment>
  </Router>
);

render(<App />, document.getElementById("root"));
