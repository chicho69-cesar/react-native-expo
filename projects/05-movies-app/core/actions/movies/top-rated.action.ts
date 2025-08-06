import { movieApi } from '@/core/api/movie-api'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/moviedb.response'
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper'

interface TopRatedOptions {
  page?: number
  limit?: number
}

export default async function topRated({ page, limit }: TopRatedOptions): Promise<Movie[]> {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
      params: {
        page: page || 1,
        limit: limit || 20
      }
    })

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)
    return movies
  } catch (error) {
    console.log('Error fetching top rated movies:', error)
    throw new Error('Failed to fetch top rated movies')
  }
}
