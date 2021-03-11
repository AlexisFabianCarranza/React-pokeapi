import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PokemonImages from "./PokemonImages";
import Divider from "@material-ui/core/Divider";
import capitalizeFirstLetter from "../utils/helpers/capitalizeFirstLetter";
import PokemonTitle from "./PokemonTitle";
import PokemonDetailRow from "./PokemonDetailRow";
import PokemonStats from "./PokemonStats";
import PokemonDetailSection from "./PokemonDetailSection";
import PokemonTypes from "./PokemonTypes";

export default ({ pokemonInfo }) => {
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
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <PokemonTitle
                    pokemonID={pokemonInfo.id}
                    pokemonName={capitalizeFirstLetter(pokemonInfo.name)}
                  />
                </Grid>
                <Grid item sm={12} md={6} lg={6} xs={12}>
                  <PokemonDetailSection title={"Characteristics"}>
                    <PokemonDetailRow
                      value={Math.round(pokemonInfo.weight * 10) / 100 + " kg"}
                      type={"Weight"}
                    />
                    <Divider orientation={"horizontal"} variant={"fullWidth"} />
                    <PokemonDetailRow
                      value={Math.round(pokemonInfo.height * 10) / 100 + " mts"}
                      type={"Height"}
                    />
                  </PokemonDetailSection>
                </Grid>
                <Grid item sm={12} md={6} lg={6} xs={12}>
                  <PokemonDetailSection title={"Types"}>
                    <PokemonTypes pokemonTypes={pokemonInfo.types} />
                  </PokemonDetailSection>
                </Grid>
                <Grid item xs={12}>
                  <PokemonDetailSection title={"Stats"}>
                    <PokemonStats pokemonInfo={pokemonInfo} />
                  </PokemonDetailSection>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  ) : (
    <h1 className={"notFound"}>NOT FOUND</h1>
  );
};
//
