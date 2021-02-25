import React, { createContext, useContext, useEffect, useState } from "react";
import { getPokemonsList } from "../../repositories/pokemonsRepository";
import { get } from "../../utils/http/HttpService";
import { LoadingContext } from "./LoadingContext";
import calculateTotalPages from "../helpers/calculateTotalPages";

export const PokemonsContext = createContext();

const initialPokemonsState = {
  pokemonsList: [],
  offset: 0,
  limit: 5,
  currentPage: 1,
  totalPages: 10,
};

const useStateContext = () => {
  const [pokemonsState, setPokemonsState] = useState(initialPokemonsState);
  const { changeIsLoading } = useContext(LoadingContext);

  const fetchPockemonsList = async () => {
    changeIsLoading(true);
    try {
      const result = await getPokemonsList(
        pokemonsState.offset,
        pokemonsState.limit
      );
      let promisesArray = result.results.map((result) => {
        return get(result.url).then((pockemonDetail) => pockemonDetail);
      });
      const pockemonDetails = await Promise.all(promisesArray);
      setPokemonsState((oldPokemonsState) => ({
        ...oldPokemonsState,
        pokemonsList: pockemonDetails,
        totalPages: calculateTotalPages(result.count, pokemonsState.limit),
      }));
      setTimeout(() => {
        changeIsLoading(false);
      }, 1000);
    } catch (e) {
      console.log(e);
      changeIsLoading(false);
    }
  };

  const handlePageChange = (event, nextPage) => {
    setPokemonsState((oldPokemonsState) => ({
      ...oldPokemonsState,
      currentPage: nextPage,
      offset: (nextPage - 1) * oldPokemonsState.limit,
    }));
  };

  useEffect(() => {
    fetchPockemonsList();
  }, [pokemonsState.offset]);

  return {
    ...pokemonsState,
    fetchPockemonsList,
    handlePageChange,
  };
};

export const PokemonsProvider = (props) => {
  const contextState = useStateContext();

  return (
    <PokemonsContext.Provider value={contextState}>
      {props.children}
    </PokemonsContext.Provider>
  );
};
