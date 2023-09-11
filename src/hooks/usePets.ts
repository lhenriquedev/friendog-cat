import { getPets } from '@/services/petsService'
import { useQuery } from '@tanstack/react-query'

export const usePets = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: getPets,
    queryKey: ['pets'],
  })

  return {
    data,
    isLoading,
    error,
  }
}
