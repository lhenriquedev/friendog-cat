import { Filter } from '@/components/filter'
import { PetCard } from '@/components/pet-card'

import dogsJson from '@/data/dogs.json'

export function Home() {
  return (
    <section className="px-8 pt-8 pb-20 bg-slate-50">
      <header className="flex items-center justify-between mb-8">
        <h2>
          <strong>20 amigos</strong> encontrados!
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
        {dogsJson.animals.map((dog) => (
          <li key={dog.id}>
            <PetCard {...dog} />
          </li>
        ))}
      </ul>
    </section>
  )
}
