import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DashboardPage from "../../pages/DashboardPage";
import PokemonDetailPage from "../../pages/PokemonDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/pokemon/:pokemonId" component={PokemonDetailPage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
