import { getPets } from '@/services/petsService'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

export const usePets = () => {
  const [searchParams] = useSearchParams()

  const typeValue = searchParams.get('type') || ''
  const type = !typeValue || typeValue === '' ? undefined : typeValue

  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['pets', type],
    queryFn: ({ pageParam = 1 }) => getPets({ pageParam, type }),
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
