import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PokemonImages from "./PokemonImages";
import Divider from "@material-ui/core/Divider";
import capitalizeFirstLetter from "../utils/helpers/capitalizeFirstLetter";
import PokemonTitle from "./PokemonTitle";
import PokemonDetailRow from "./PokemonDetailRow";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import PokemonStats from "./PokemonStats";

export default ({ pokemonInfo }) => {
  console.log(pokemonInfo);
  return pokemonInfo ? (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item sm={12} md={7} lg={7} xs={12}>
        <Paper style={{ margin: 20, borderRadius: 10, padding: 10 }}>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid
              item
              container
              sm={12}
              md={12}
              lg={12}
              xs={12}
              justify="center"
            >
              <Grid item sm={12} md={6} lg={6} xs={12}>
                <PokemonImages pokemonInfo={pokemonInfo} />
              </Grid>
            </Grid>
            <Grid item sm={12} md={10} lg={10} xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <PokemonTitle
                    pokemonID={pokemonInfo.id}
                    pokemonName={capitalizeFirstLetter(pokemonInfo.name)}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  style={{
                    borderRadius: 20,
                    borderColor: "white",
                  }}
                  variant="outlined"
                >
                  <Grid
                    container
                    spacing={2}
                    justify={"center"}
                    alignItems={"center"}
                  >
                    <Grid item xs={10}>
                      <PokemonDetailRow
                        value={pokemonInfo.weight + " kgs"}
                        type={"weight"}
                      />
                      <Divider
                        orientation={"horizontal"}
                        variant={"fullWidth"}
                      />
                      <PokemonDetailRow
                        value={pokemonInfo.height + " mts"}
                        type={"height"}
                      />
                      <Divider
                        orientation={"horizontal"}
                        variant={"fullWidth"}
                      />
                      <PokemonStats pokemonInfo={pokemonInfo} />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  ) : (
    <h1>NOT FOUND</h1>
  );
};
//
