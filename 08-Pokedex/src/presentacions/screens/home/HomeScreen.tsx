import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getPokemons} from '../../../actions/pokemons';
import {PokebalBg} from '../../components/ui/PokeballBg';
import {Text} from 'react-native-paper';
import {globalTheme} from '../../../config/theme/global-theme';
import {PokemonCard} from '../../components/pokemons/PokemonCard';

export const HomeScreen = () => {
  const {isLoading, data: pokemons = []} = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(50),
    staleTime: 100 * 60 * 60, //60 minutes
  });

  return (
    <View style={globalTheme.globalMargin}>
      <PokebalBg style={styles.imgPosition} />

      <FlatList
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={() => <Text variant="displayMedium">Pokedex</Text>}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
});
