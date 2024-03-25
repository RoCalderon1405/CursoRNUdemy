import {getColorFromImage} from '../../config/helpers/get-colors';
import {Move, Pokemon, Stat} from '../../domain/entities/pokemon';
import {PokeAPIPokemon} from '../interfaces/pokeapi.interfaces';

export class PokemonMapper {
  static async pokemonApiPokemonToEntity(
    data: PokeAPIPokemon,
  ): Promise<Pokemon> {
    const sprites = PokemonMapper.getSprites(data);
    const avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

    const color = await getColorFromImage(avatar);

    return {
      id: data.id,
      name: data.name,
      avatar: avatar,
      sprites: sprites,
      types: data.types.map(types => types.type.name),

      color: color,

      games: data.game_indices.map(games => games.version.name),
      stats: data.stats.map(stat => ({
        name: stat.stat.name,
        value: stat.base_stat,
      })),
      abilities: data.abilities.map(abilities => abilities.ability.name),
      moves: data.moves
        .map(move => ({
          name: move.move.name,
          level: move.version_group_details[0].level_learned_at,
        }))
        .sort((a, b) => a.level - b.level),
    };
  }
  static getSprites(data: PokeAPIPokemon): string[] {
    const sprites: string[] = [
      data.sprites.front_default,
      data.sprites.back_default,
      data.sprites.front_shiny,
      data.sprites.back_shiny,
    ];

    if (data.sprites.other?.home.front_default)
      sprites.push(data.sprites.other?.home.front_default);
    if (data.sprites.other?.['official-artwork'].front_default)
      sprites.push(data.sprites.other?.['official-artwork'].front_default);
    if (data.sprites.other?.['official-artwork'].front_shiny)
      sprites.push(data.sprites.other?.['official-artwork'].front_shiny);
    if (data.sprites.other?.showdown.front_default)
      sprites.push(data.sprites.other?.showdown.front_default);
    if (data.sprites.other?.showdown.back_default)
      sprites.push(data.sprites.other?.showdown.back_default);

    return sprites;
  }
}
