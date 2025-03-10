
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import './App.css'

function App() {
  return (
  <BrowserRouter>
    <div className="Link">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/actors">
          <Actors />
        </Route>
        <Route exact path="/directors">
          <Directors />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;