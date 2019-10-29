import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "../home-page";
import Characters from "../characters";
import CharacterPage from "../character-page";
import NotFound from "../not-found";
import Header from "../header";
import './main.css';

const ROUTES = {
  HOME: "/",
  CHARACTERS: "/characters",
  CHARACTER_BY_ID: "/character/:characterId"
};

const Main = () => {
  return (
    <div id={123}>
      <Header />
      <Router>
        <Switch>
          <Route exact component={HomePage} path={ROUTES.HOME} />{" "}
          <Route
            exact
            component={CharacterPage}
            path={ROUTES.CHARACTER_BY_ID}
          />{" "}
          <Route exact component={Characters} path={ROUTES.CHARACTERS} />{" "}
          <Route component={NotFound} />{" "}
        </Switch>{" "}
      </Router>
    </div>
  );
};

export default Main;