const defaultColor = "#68A090";

const pokemonTypesColors = {
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
  unknown: "#68A090",
  shadow: "#68A090",
};
export default (pokemonType) => {
  try {
    return pokemonTypesColors[pokemonType];
  } catch (e) {
    return defaultColor;
  }
};
/*export default (pokemonType) => {
  switch (pokemonType) {
    case "normal":
      return "grey";
    case "fighting":
      return "grey";
    case "flying":
      return "grey";
    case "poison":
      return "red";
    case "ground":
      return "red";
    case "rock":
      return "red";
    case "bug":
      return "red";
    case "ghost":
      return "red";
    case "steel":
      return "red";
    case "fire":
      return "red";
    case "water":
      return "red";
    case "grass":
      return "red";
  }
};*/
