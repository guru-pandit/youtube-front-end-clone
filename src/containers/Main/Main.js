import { Route, Switch } from "react-router-dom";
import "./Main.css";

import React from "react";

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
function Subscriptions() {
  return (
    <div>
      <h1>Subscriptions</h1>
    </div>
  );
}
function Trending() {
  return (
    <div>
      <h1>Trending</h1>
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/subscriptions">
          <Subscriptions />
        </Route>
        <Route exact path="/trending">
          <Trending />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
