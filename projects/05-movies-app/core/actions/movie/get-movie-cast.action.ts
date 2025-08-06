import { movieApi } from '@/core/api/movie-api'
import { Cast } from '@/infrastructure/interfaces/cast.interface'
import { MovieDBCreditsResponse } from '@/infrastructure/interfaces/moviedb-credits.response'
import { CastMapper } from '@/infrastructure/mappers/cats.mapper'

export default async function getMovieCast(movieId: number): Promise<Cast[]> {
  try {
    const { data } = await movieApi.get<MovieDBCreditsResponse>(`/$${movieApi}/credits`)
    return data.cast.map(CastMapper.fromMovieDBCastToEntity)
  } catch (error) {
    console.log('Error fetching movie cast:', error)
    throw new Error('Failed to fetch movie cast')
  }
}
