import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import capitalizeFirstLetter from "../utils/helpers/capitalizeFirstLetter";
import PokemonTypes from "./PokemonTypes";
import PokemonImages from "./PokemonImages";
import Link from "./Link";

export default ({ pokemonInfo, showButtonDetails, children }) => {
  return (
    <Paper style={{ margin: 20, borderRadius: 10, padding: 10 }}>
      <Grid container spacing={3} direction={"row"}>
        <Grid item sm={12} md={6} lg={6} xs={12}>
          <PokemonImages pokemonInfo={pokemonInfo} />
        </Grid>
        <Grid item sm={12} md={6} lg={6} xs={12}>
          <Grid container direction={"row"} spacing={3}>
            <Grid item xs={9}>
              <Typography align={"left"} variant={"h5"}>
                {capitalizeFirstLetter(pokemonInfo.name)}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography align={"right"} variant={"h5"}>
                #{pokemonInfo.id}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <PokemonTypes pokemonTypes={pokemonInfo.types} />
            </Grid>
            {showButtonDetails && (
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link to={`/pokemon/${pokemonInfo.id}`}>
                  <Button variant="outlined" color="secondary">
                    Ver Mas
                  </Button>
                </Link>
              </Grid>
            )}
          </Grid>
        </Grid>
        {!showButtonDetails && (
          <Grid item sm={12} md={12} lg={12} xs={12}>
            {children}
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};
