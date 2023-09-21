import { PetList } from '@/components/pet-list'
import { Skeleton } from '@/components/ui/skeleton'
import { usePets } from '@/hooks/usePets'

export function Pets() {
  const { data: pets, error, isLoading } = usePets()

  if (error) return <>Error</>

  return (
    <div className="px-2 pt-8 pb-8 h-[calc(100vh - 90px)] overflow-scroll">
      <header className="flex items-center justify-between mb-8">
        {!isLoading ? (
          <h2>
            <strong>{pets?.length} amigos</strong> encontrados!
          </h2>
        ) : (
          <Skeleton className="w-40 h-8" />
        )}
      </header>

      <div className="flex flex-col gap-8">
        <PetList />
      </div>
    </div>
  )
}
