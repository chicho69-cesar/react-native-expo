import { movieApi } from '@/core/api/movie-api'
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface'
import { MovieDBMovieResponse } from '@/infrastructure/interfaces/moviedb-movie.response'
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper'

export default async function getMovieById(id: number | string): Promise<CompleteMovie> {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`)
    return MovieMapper.fromTheMovieDBToCompleteMovie(data)
  } catch (error) {
    console.log('Error fetching movie by ID:', error)
    throw new Error('Failed to fetch movie details')
  }
}
