import { Filter } from './filter'
import { Label } from './ui/label'

export function SidebarFilter() {
  return (
    <>
      <li className="w-full">
        <Label className="inline-block mb-2 text-brand-900">Idade</Label>
        <Filter
          filterName="age"
          options={[
            { label: 'Todos', value: 'all' },
            { label: 'Filhotes', value: 'filhotes' },
            { label: 'Adultos', value: 'adultos' },
            { label: 'Idosos', value: 'idosos' },
          ]}
        />
      </li>

      <li className="w-full">
        <Label className="inline-block mb-2 text-brand-900">
          Nivel de energia
        </Label>
        <Filter
          filterName="energy"
          options={[
            { label: 'Todos', value: 'all' },
            { label: '01', value: '1' },
            { label: '02', value: '2' },
            { label: '03', value: '3' },
          ]}
        />
      </li>

      <li className="w-full">
        <Label className="inline-block mb-2 text-brand-900">
          Porte do aniaml
        </Label>
        <Filter
          filterName="size"
          options={[
            { label: 'Todos', value: 'all' },
            { label: 'Pequeno', value: 'pequeno' },
            { label: 'Médio', value: 'medio' },
            { label: 'Grande', value: 'grande' },
          ]}
        />
      </li>

      <li className="w-full">
        <Label className="inline-block mb-2 text-brand-900">
          Nivel de independência
        </Label>
        <Filter
          filterName="independency"
          options={[
            { label: 'Todos', value: 'all' },
            { label: 'Pequeno', value: 'pequeno' },
            { label: 'Médio', value: 'medio' },
            { label: 'Grande', value: 'grande' },
          ]}
        />
      </li>
    </>
  )
}
