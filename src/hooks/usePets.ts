import { PetsService } from '@/services/petsService'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

export const usePets = () => {
  const [searchParams] = useSearchParams()

  const typeValue = searchParams.get('type') || ''
  const type = !typeValue || typeValue === '' ? undefined : typeValue
  const sizeValue = searchParams.get('size') || ''
  const size = !sizeValue || sizeValue === '' ? undefined : sizeValue
  const colorValue = searchParams.get('color') || ''
  const color = !colorValue || colorValue === '' ? undefined : colorValue
  const energyValue = searchParams.get('energy') || ''
  const energy = !energyValue || energyValue === '' ? undefined : energyValue

  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['pets', type, size, color, energy],
    queryFn: ({ pageParam = 1 }) =>
      PetsService.getPets({ pageParam, type, size, color, energy }),
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
