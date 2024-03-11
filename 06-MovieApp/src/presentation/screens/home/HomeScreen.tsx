import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {isLoading, nowPlaying, popularMovies, topRated, upComing, popularNextPage} =
    useMovies();

  if (isLoading) {
    return <Text>'Loading...'</Text>;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* Principal */}
        <PosterCarousel movies={nowPlaying} />
        {/* Populares */}
        <HorizontalCarousel
          movies={popularMovies}
          title="Populares"
          loadNextPage={popularNextPage}
        />
        {/* Mejor Calificados */}
        <HorizontalCarousel movies={topRated} title="Mejor Calificados" />
        {/* Populares */}
        <HorizontalCarousel movies={upComing} title="Próximamente" />
      </View>
    </ScrollView>
  );
};
