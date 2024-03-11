import React, {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {FullMovie} from '../../core/entities/movie.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);

  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    const movieDetail = await UseCases.getMovieByIdUseCase(
      movieDBFetcher,
      movieId,
    );
    setMovie(movieDetail) 
    setIsLoading(false)

    console.log({movieDetail});
  };

  return {
    isLoading,
    movie
  };
};
