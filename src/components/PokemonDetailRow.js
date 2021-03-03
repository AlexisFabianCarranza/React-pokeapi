import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export default ({ type, value }) => {
  return (
    <Grid container direction={"row"} spacing={0}>
      <Grid item sm={5} md={3} lg={3} xs={5}>
        <Typography align={"left"} variant={"body1"}>
          {type}
        </Typography>
      </Grid>
      <Grid item sm={1} md={1} lg={1} xs={1}>
        <Divider orientation={"vertical"} />
      </Grid>
      <Grid item sm={5} md={7} lg={3} xs={5}>
        <Typography align={"left"} variant={"body1"}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};
