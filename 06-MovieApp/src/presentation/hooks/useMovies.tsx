import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

let popularPageNumber = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const upComingPromise = UseCases.moviesUpComingUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const moviePopularsPromise = UseCases.moivesPopularUseCase(movieDBFetcher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies] =
      await Promise.all([
        nowPlayingPromise,
        moviePopularsPromise,
        topRatedPromise,
        upComingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopularMovies(popularMovies);
    setTopRated(topRatedMovies);
    setUpComing(upComingMovies);

    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    upComing,
    topRated,
    popularMovies,

    // Methods
    popularNextPage: async () => {
      popularPageNumber++;
      const popularMovies = await UseCases.moivesPopularUseCase(
        movieDBFetcher,
        {
          page: popularPageNumber,
        },
      );
      setPopularMovies(prev => [...prev, ...popularMovies]);
    },
  };
};
