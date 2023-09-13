import { PetsService } from '@/services/petsService'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export function usePet() {
  const { id } = useParams()

  const { data, isLoading, error } = useQuery({
    queryFn: () => PetsService.getPet(Number(id) ?? undefined),
    queryKey: ['pet', id],
  })

  return {
    data,
    isLoading,
    error,
  }
}
