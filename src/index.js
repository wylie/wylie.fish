import React from "react";
import { render } from "react-dom";

import Heading from "./components/heading";
import List from "./components/list";

import "./styles/_reset.css";
import "./_index.css";

const App = () => (
  <div>
    <Heading />
    <List />
  </div>
);

render(<App />, document.getElementById("root"));