import { usePets } from '@/hooks/usePets'
import { NavLink } from 'react-router-dom'
import { PetCard } from './pet-card'
import { Skeleton } from './ui/skeleton'

export function PetList() {
  const {
    data: pets,
    isLoading: isPetsLoading,
    isSuccess,
    isFetching,
  } = usePets()

  if (isPetsLoading || isFetching)
    return (
      <div className="grid grid-cols-4 gap-8">
        <Skeleton className="w-full h-60" />
        <Skeleton className="w-full h-60" />
        <Skeleton className="w-full h-60" />
        <Skeleton className="w-full h-60" />
        <Skeleton className="w-full h-60" />
        <Skeleton className="w-full h-60" />
        <Skeleton className="w-full h-60" />
        <Skeleton className="w-full h-60" />
      </div>
    )

  if (pets?.length === 0) {
    return (
      <div className="grid grid-cols-4 gap-8 text-center">
        <p className="text-2xl col-span-full">Nenhum animal encontrado 😢</p>
      </div>
    )
  }

  return (
    <ul className="grid grid-cols-4 gap-8">
      {isSuccess &&
        pets?.map((pet) => (
          <NavLink key={pet.id} to={`/pets/${pet.id}`}>
            <PetCard key={pet.id} {...pet} />
          </NavLink>
        ))}
    </ul>
  )
}
