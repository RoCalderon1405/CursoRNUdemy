import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {MoviePopularsResponse} from '../../../infrastructure/interfaces/movie-db-populars.response';
import {Movie} from '../../entities/movie.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const moivesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const moviePopulars = await fetcher.get<MoviePopularsResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
      },
    });

    return moviePopulars.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - Popular');
  }
};
