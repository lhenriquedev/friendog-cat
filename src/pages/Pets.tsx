import { Filter } from '@/components/filter'
import { PetCard } from '@/components/pet-card'
import { usePets } from '@/hooks/usePets'
import { NavLink } from 'react-router-dom'

export function Pets() {
  const { data: pets, isLoading: isPetsLoading, error } = usePets()

  if (error) return <>Error</>

  if (isPetsLoading) return <>Loading</>

  return (
    <div className="px-2 py-8 overflow-y-scroll">
      <header className="flex items-center justify-between mb-8">
        <h2>
          <strong>{pets?.length} amigos</strong> encontrados!
        </h2>

        <div className="w-40">
          <Filter
            filterName="sortBy"
            options={[
              { label: 'Gatos e cachorros', value: 'all' },
              { label: 'Gatos', value: 'cat' },
              { label: 'Cachorros', value: 'dog' },
            ]}
          />
        </div>
      </header>

      <ul className="grid grid-cols-4 gap-8">
        {pets?.map((dog) => (
          <li key={dog.id}>
            <NavLink to={`/pet/${dog.id}`}>
              <PetCard {...dog} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
