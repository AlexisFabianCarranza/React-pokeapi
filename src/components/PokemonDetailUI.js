import React from "react";
import Grid from "@material-ui/core/Grid";
import PokemonCard from "./PokemonCard";

export default ({ pokemonInfo }) => {
  return pokemonInfo ? (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item sm={12} md={6} lg={9} xs={12}>
        <PokemonCard pokemonInfo={pokemonInfo} showButtonDetails={false}>
          <div style={{ backgroundColor: "red" }}>
            <h1>Prueba</h1>
          </div>
        </PokemonCard>
      </Grid>
    </Grid>
  ) : (
    <h1>No existe el pokemon que estas buscando</h1>
  );
};
