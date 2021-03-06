import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

export default ({ children, title }) => {
  return (
    <Paper
      style={{
        borderRadius: 20,
        borderColor: "white",
        height: "100%",
      }}
      variant="outlined"
    >
      <Grid container spacing={2} justify={"center"} alignItems={"center"}>
        <Grid item xs={10}>
          <Typography variant={"h5"} align={"center"}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </Paper>
  );
};
