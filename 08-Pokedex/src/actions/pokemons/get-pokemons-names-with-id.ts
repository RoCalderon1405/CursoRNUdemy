import {pokeApi} from '../../config/api/pokeApi';
import {PokeAPIPaginatedResponse} from '../../infrastructure/interfaces/pokeapi.interfaces';

export const getPokemonNamesId = async () => {
  const url = `pokemon?limit=1000`;
  const {data} = await pokeApi.get<PokeAPIPaginatedResponse>(url);

  return data.results.map(pokemon => ({
    name: pokemon.name,
    id: Number(pokemon.url.split('/')[6]),
  }));
};
