import { Filter } from '@/components/filter'
import { PetList } from '@/components/pet-list'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { usePets } from '@/hooks/usePets'
import { useMemo } from 'react'

export function Pets() {
  const {
    data: pets,
    error,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
  } = usePets()

  const petsDataLength = useMemo(() => {
    return pets?.pages.reduce((acc, page) => {
      return [...acc, ...page]
    }, [])
  }, [pets])?.length

  if (error) return <>Error</>

  return (
    <div className="h-screen px-2 pt-8 overflow-y-scroll pb-36">
      <header className="flex items-center justify-between mb-8">
        {!isLoading ? (
          <h2>
            <strong>{petsDataLength} amigos</strong> encontrados!
          </h2>
        ) : (
          <Skeleton className="w-40 h-8" />
        )}

        <div className="w-40">
          <Filter
            filterName="type"
            options={[
              { label: 'Gatos e cachorros', value: '' },
              { label: 'Gatos', value: 'Gato' },
              { label: 'Cachorros', value: 'Cachorro' },
            ]}
          />
        </div>
      </header>

      <div className="flex flex-col gap-8">
        <PetList />
        {hasNextPage ? (
          <Button
            className="mx-auto w-44 bg-brand-900"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage || !hasNextPage}
          >
            {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
          </Button>
        ) : null}
      </div>
    </div>
  )
}
