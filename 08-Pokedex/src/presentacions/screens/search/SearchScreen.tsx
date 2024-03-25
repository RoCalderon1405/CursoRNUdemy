import React, {useMemo, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {globalTheme} from '../../../config/theme/global-theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text, TextInput} from 'react-native-paper';
import {PokemonCard} from '../../components/pokemons/PokemonCard';
import {Pokemon} from '../../../domain/entities/pokemon';
import {useQuery} from '@tanstack/react-query';
import {getPokemonNamesId, getPokemonsByIds} from '../../../actions/pokemons';
import {useDebouncedValue} from '../../hooks/useDebouncedValue';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState('');
  const debouncedValue = useDebouncedValue(term, 200);

  const {isLoading, data: pokemonNameList = []} = useQuery({
    queryKey: ['pokemons', 'all'],
    queryFn: () => getPokemonNamesId(),
  });

  const pokemonNameIdList = useMemo(() => {
    //Es un número
    if (!isNaN(Number(term))) {
      const pokemon = pokemonNameList.find(
        pokemon => pokemon.id === Number(term),
      );
      return pokemon ? [pokemon] : [];
    }

    if (term.length === 0) return [];
    if (term.length < 3) return [];

    return pokemonNameList.filter(pokemon =>
      pokemon.name.includes(term.toLocaleLowerCase()),
    );
  }, [debouncedValue]);

  const {isLoading: isLoadingPokemons, data: pokemons = []} = useQuery({
    queryKey: ['pokemons', pokemonNameIdList],
    queryFn: () =>
      getPokemonsByIds(pokemonNameIdList.map(pokemon => pokemon.id)),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <View style={[globalTheme.globalMargin, {paddingTop: top + 10}]}>
      <TextInput
        placeholder="Buscar Pokémon"
        mode="flat"
        autoFocus
        autoCorrect={false}
        onChangeText={setTerm}
        value={term}
      />

      {isLoadingPokemons && (
        <ActivityIndicator style={{paddingTop: 20}} color="blue" />
      )}

      {debouncedValue.length < 3 && debouncedValue.length !== 0 && (
        <Text>Tu búsqueda debe tener al menos 3 caracteres</Text>
      )}

      {debouncedValue.length >= 3 && pokemons.length === 0 && (
        <Text>
          No se encontrón ningún Pokémon realcionado con: {debouncedValue}
        </Text>
      )}

      <FlatList
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        showsVerticalScrollIndicator={false}
        style={{paddingTop: 20}}
        numColumns={2}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        ListFooterComponent={<View style={{height: 150}} />}
      />
    </View>
  );
};
