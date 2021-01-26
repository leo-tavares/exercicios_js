const api = new XMLHttpRequest();
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const MAX_POKEMONS = 898;

const genRandomIdHook = () => {
  return Math.floor(Math.random() * MAX_POKEMONS) + 1;
};

class Pokemon {
  static getRandom() {
    const randomId = genRandomIdHook();
    let pokemon;
    api.open("GET", `${BASE_URL}/${randomId}`, false);
    api.onload = () => {
      const response = JSON.parse(api.response);
      pokemon = response;
    };
    api.send();
    return pokemon
  }
}

const myRandomPokemon = Pokemon.getRandom();
console.log(myRandomPokemon);
