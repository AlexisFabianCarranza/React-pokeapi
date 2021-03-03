import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default ({ pokemonName, pokemonID }) => {
  return (
    <Grid container direction={"row"} spacing={3}>
      <Grid item xs={9}>
        <Typography align={"left"} variant={"h5"}>
          {pokemonName}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography align={"right"} variant={"h5"}>
          #{pokemonID}
        </Typography>
      </Grid>
    </Grid>
  );
};
