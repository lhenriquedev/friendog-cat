import { useFilter } from '@/contexts/filter-context'
import { PetsService } from '@/services/petsService'
import { useQuery } from '@tanstack/react-query'

export const usePets = () => {
  const { filterValues } = useFilter()

  const {
    data,
    isLoading,
    error,

    isSuccess,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['pets'],
    enabled: !!filterValues,
    queryFn: () => PetsService.getPets({ filter: filterValues }),
  })

  return {
    data,
    isLoading,
    error,
    isSuccess,
    isFetching,
    refetch,
  }
}
