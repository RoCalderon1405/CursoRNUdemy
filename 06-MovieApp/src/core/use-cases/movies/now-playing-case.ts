import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import type {Movie} from '../../../core/entities/movie.entity';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.response';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

    return nowPlaying.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - NowPlaying');
  }
};
