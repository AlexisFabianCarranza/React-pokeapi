import {get} from "../utils/http/HttpService";

export const getPokemonsList = async (offset, limit) => {
    try {
        return await get(`/pokemon?limit=${limit}&offset=${offset}`)
    } catch (e) {
        console.log(e)
        return null;
    }
};

export const getPokemonDetail = async (pokemonId) => {
    try {
        return await get(`/pokemon/${pokemonId}/`)
    } catch (e) {
        console.log(e)
        return null;
    }
}
