import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    paddingLeft: 20,
  },
}));
export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color={"inherit"}>
        <Toolbar>
          <Link to={"/"}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Link>
          <Link to={"/"}>
            <Typography variant="h6" className={classes.title}>
              Pokemons
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
