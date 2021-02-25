import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { useTheme } from "@material-ui/core";
import Carousel from "./Carousel";

export default ({ pokemonInfo }) => {
  const [pokemonImages, setPokemonImages] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const images = [];
    for (const image in pokemonInfo.sprites) {
      if (
        pokemonInfo.sprites[image] !== null &&
        typeof pokemonInfo.sprites[image] === "string"
      ) {
        images.unshift(pokemonInfo.sprites[image]);
      }
    }
    setPokemonImages(images);
  }, [pokemonInfo]);

  return (
    <Paper
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.light,
        borderRadius: 10,
      }}
    >
      <Carousel images={pokemonImages} />
    </Paper>
  );
};
