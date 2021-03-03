const defaultColor = "#68A090";

const pokemonStatsColors = {
    Attack: "#78C850",
    Hp: "#C03028",
    Speed: "#F08030",
    "Special-attack": "#F8D030",
    "Special-defense": "#7038F8"
};
export default (pokemonStat) => {
    try {
        return pokemonStatsColors[pokemonStat];
    } catch (e) {
        return defaultColor;
    }
};
