import { movieApi } from '@/core/api/movie-api'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/moviedb.response'
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper'

export default async function upcoming(): Promise<Movie[]> {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming')
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)
    return movies
  } catch (error) {
    console.log('Error fetching now playing movies:', error)
    throw new Error('Failed to fetch now playing movies')
  }
}
