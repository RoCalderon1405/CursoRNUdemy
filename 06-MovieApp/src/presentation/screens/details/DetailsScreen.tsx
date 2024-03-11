import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {useRoute} from '@react-navigation/native';
import {useMovie} from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  // const {movieId} = useRoute().params;
  const {movieId} = route.params;

  const {isLoading, movie} = useMovie(movieId);

  if(isLoading) return <Text>Cargando...</Text>

  return (
    <View>
      <MovieHeader movie={movie!}/>
    </View>
  );
};
