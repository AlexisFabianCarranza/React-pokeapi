import React, { useContext, useEffect, useState } from "react";
import PokemonDetailUI from "../components/PokemonDetailUI";
import { useParams } from "react-router-dom";
import { PokemonsContext } from "../utils/contexts/PokemonsContext";
import Container from "../components/Container";

export default () => {
  const { pokemonId } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState();
  const { getPokemonById, pokemonsList } = useContext(PokemonsContext);

  useEffect(() => {
    const getPokemonInfo = async () => {
      const pokemonInfoTmp = await getPokemonById(parseInt(pokemonId));
      setPokemonInfo(pokemonInfoTmp);
    };
    if (pokemonsList.length > 0) {
      getPokemonInfo();
    }
  }, [pokemonsList]);

  return (
    <Container>
      <PokemonDetailUI pokemonInfo={pokemonInfo} />
    </Container>
  );
};
