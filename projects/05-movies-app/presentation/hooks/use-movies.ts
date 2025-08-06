import nowPlaying from '@/core/actions/movies/now-playing.action'
import popular from '@/core/actions/movies/popular.action'
import topRated from '@/core/actions/movies/top-rated.action'
import upcoming from '@/core/actions/movies/upcoming.action'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

export default function useMovies() {
  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlaying,
    staleTime: 1000 * 60 * 60 * 24,
  })

  const popularQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popular,
    staleTime: 1000 * 60 * 60 * 24,
  })

  const upcomingQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcoming,
    staleTime: 1000 * 60 * 60 * 24,
  })

  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'topRated'],
    staleTime: 1000 * 60 * 60 * 24,
    queryFn: ({ pageParam }) => {
      return topRated({ page: pageParam })
    },
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1
    },
  })

  return {
    nowPlayingQuery,
    popularQuery,
    upcomingQuery,
    topRatedQuery,
  }
}
