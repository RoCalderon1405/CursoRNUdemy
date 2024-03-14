import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {useRoute} from '@react-navigation/native';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetail} from '../../components/movie/MovieDetail';
import {ScrollView} from 'react-native-gesture-handler';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  // const {movieId} = useRoute().params;
  const {movieId} = route.params;

  const {isLoading, movie, cast = []} = useMovie(movieId);

  if (isLoading) return <FullScreenLoader />;

  return (
    <ScrollView style={{paddingBottom: 40}}>
      <MovieHeader movie={movie!} />

      <MovieDetail movie={movie!} cast={cast} />
    </ScrollView>
  );
};
