import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default ({
  pokemonDetailsOpened,
  handlePokemonDetailClose,
  pokemonInfo,
}) => {
  const classes = useStyles();
  return (
    pokemonInfo && (
      <Modal
        open={pokemonDetailsOpened}
        onClose={handlePokemonDetailClose}
        className={classes.modal}
      >
        <div className={classes.paper}>
          <h1>{pokemonInfo.name}</h1>
        </div>
      </Modal>
    )
  );
};
