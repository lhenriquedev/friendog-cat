// import { CheckBoxFilter } from './checkbox-filter'
import { SelectFilter } from './select-filter'
import { Label } from '../ui/label'
import { useFilter } from '@/contexts/filter-context'
import { CheckBoxFilter } from './checkbox-filter'

export function SidebarFilter() {
  const { filterValues, handleValueChange } = useFilter()

  return (
    <>
      <li className="w-full">
        <Label className="inline-block mb-2 text-brand-900">Tipo do pet</Label>
        <SelectFilter
          value={filterValues.type}
          onChange={(e) => handleValueChange('type', e)}
          name="type"
          options={[
            { label: 'Gatos e cachorros', value: '' },
            { label: 'Gatos', value: 'cat' },
            { label: 'Cachorros', value: 'dog' },
          ]}
        />
      </li>
      <li className="w-full">
        <Label className="inline-block mb-2 text-brand-900">Gênero</Label>
        <SelectFilter
          name="gender"
          value={filterValues.gender}
          onChange={(e) => handleValueChange('gender', e)}
          options={[
            { label: 'Todos', value: '' },
            { label: 'Macho', value: 'male' },
            { label: 'Fêmea', value: 'female' },
          ]}
        />
      </li>

      <li className="w-full">
        <Label className="inline-block mb-2 text-brand-900">Porte</Label>
        <SelectFilter
          name="size"
          value={filterValues.size}
          onChange={(e) => handleValueChange('size', e)}
          options={[
            { label: 'Todos', value: '' },
            { label: 'Pequeno', value: 'small' },
            { label: 'Médio', value: 'medium' },
            { label: 'Grande', value: 'big' },
          ]}
        />
      </li>

      <li className="w-full">
        <Label className="inline-block mb-2 text-brand-900">Cor</Label>
        <SelectFilter
          name="color"
          value={filterValues.color}
          onChange={(e) => handleValueChange('color', e)}
          options={[
            { label: 'Todos', value: '' },
            { label: 'Marrom', value: 'brown' },
            { label: 'Amarelo', value: 'yellow' },
            { label: 'Branco', value: 'white' },
            { label: 'Cinza', value: 'gray' },
            { label: 'Preto', value: 'black' },
          ]}
        />
      </li>

      <li className="w-full">
        <Label className="inline-block mb-2 text-brand-900">Idade</Label>
        <SelectFilter
          name="size"
          value={filterValues.age}
          onChange={(e) => handleValueChange('age', e)}
          options={[
            { label: 'Todos', value: '' },
            { label: 'Filhote', value: 'puppy' },
            { label: 'Adulto', value: 'adult' },
            { label: 'Idoso', value: 'old' },
          ]}
        />
      </li>

      <li className="flex items-start w-full gap-2">
        <CheckBoxFilter
          name="isVaccinated"
          onChecked={(e) => handleValueChange('isVaccinated', e)}
          value={filterValues.isVaccinated}
        />
        <Label className="inline-block mb-2 text-brand-900">
          Incluir pets vacinados
        </Label>
      </li>
    </>
  )
}
