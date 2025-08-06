import getMovieById from '@/core/actions/movie/get-movie-by-id.action'
import getMovieCast from '@/core/actions/movie/get-movie-cast.action'
import { useQuery } from '@tanstack/react-query'

export default function useMovie(id: number) {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieById(id),
    staleTime: 1000 * 60 * 60 * 24,
  })

  const castQuery = useQuery({
    queryKey: ['movie', id, 'cast'],
    queryFn: () => getMovieCast(id),
    staleTime: 1000 * 60 * 60 * 24,
  })

  return {
    movieQuery,
    castQuery,
  }
}
