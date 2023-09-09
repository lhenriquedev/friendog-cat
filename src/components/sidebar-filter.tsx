import { Filter } from './filter'
import { Label } from './ui/label'

export function SidebarFilter() {
  return (
    <>
      <li className="w-full">
        <Label className="inline-block mb-2 text-slate-100">Idade</Label>
        <Filter
          filterName="age"
          options={[
            { label: 'Todos', value: 'todos' },
            { label: 'Filhotes', value: 'filhotes' },
            { label: 'Adultos', value: 'adultos' },
            { label: 'Idosos', value: 'idosos' },
          ]}
        />
      </li>

      <li className="w-full">
        <Label className="inline-block mb-2 text-slate-100">
          Nivel de energia
        </Label>
        <Filter
          filterName="energy"
          options={[
            { label: 'Todos', value: 'todos' },
            { label: '01', value: '1' },
            { label: '02', value: '2' },
            { label: '03', value: '3' },
          ]}
        />
      </li>

      <li className="w-full">
        <Label className="inline-block mb-2 text-slate-100">
          Porte do aniaml
        </Label>
        <Filter
          filterName="size"
          options={[
            { label: 'Todos', value: 'todos' },
            { label: 'Pequeno', value: 'pequeno' },
            { label: 'Médio', value: 'medio' },
            { label: 'Grande', value: 'grande' },
          ]}
        />
      </li>

      <li className="w-full">
        <Label className="inline-block mb-2 text-slate-100">
          Nivel de independência
        </Label>
        <Filter
          filterName="independency"
          options={[
            { label: 'Todos', value: 'todos' },
            { label: 'Pequeno', value: 'pequeno' },
            { label: 'Médio', value: 'medio' },
            { label: 'Grande', value: 'grande' },
          ]}
        />
      </li>
    </>
  )
}
