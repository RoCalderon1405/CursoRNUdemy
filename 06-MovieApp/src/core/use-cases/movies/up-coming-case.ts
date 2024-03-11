import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {UpComingMovieResponse} from '../../../infrastructure/interfaces/movie-upcoming.response';
import {Movie} from '../../entities/movie.entity';

export const moviesUpComingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upComing = await fetcher.get<UpComingMovieResponse>('/upcoming');
    return upComing.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - UpComing');
  }
};
