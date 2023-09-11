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
            { label: '0-2', value: '02' },
            { label: '2-8', value: '28' },
            { label: '8+', value: '8+' },
          ]}
        />
      </li>

      <li className="w-full">
        <Label className="inline-block mb-2 text-brand-900">Gênero</Label>
        <Filter
          filterName="gender"
          options={[
            { label: 'Todos', value: 'all' },
            { label: 'Macho', value: 'male' },
            { label: 'Fêmea', value: 'female' },
          ]}
        />
      </li>

      <li className="w-full">
        <Label className="inline-block mb-2 text-brand-900">Porte</Label>
        <Filter
          filterName="size"
          options={[
            { label: 'Todos', value: 'all' },
            { label: 'Pequeno', value: 'small' },
            { label: 'Médio', value: 'medium' },
            { label: 'Grande', value: 'large' },
          ]}
        />
      </li>

      <li className="w-full">
        <Label className="inline-block mb-2 text-brand-900">Cor</Label>
        <Filter
          filterName="color"
          options={[
            { label: 'Todos', value: 'all' },
            { label: 'Marrom', value: 'brown' },
            { label: 'Amarelo', value: 'yellow' },
            { label: 'Branco', value: 'white' },
            { label: 'Cinza', value: 'gray' },
            { label: 'Preto', value: 'black' },
          ]}
        />
      </li>

      <li className="w-full">
        <Label className="inline-block mb-2 text-brand-900">
          Nível de energia
        </Label>
        <Filter
          filterName="energy"
          options={[
            { label: 'Todos', value: 'all' },
            { label: 'Baixa', value: 'low' },
            { label: 'Moderada', value: 'medium' },
            { label: 'Alta', value: 'high' },
          ]}
        />
      </li>
    </>
  )
}
