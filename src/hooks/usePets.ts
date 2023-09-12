import { getPets } from '@/services/petsService'
import { useInfiniteQuery } from '@tanstack/react-query'

export const usePets = () => {
  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['pets'],
    queryFn: ({ pageParam = 1 }) => getPets({ pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined
      return nextPage
    },
  })

  return {
    data,
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  }
}
