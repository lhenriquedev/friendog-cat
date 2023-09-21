import { SelectForm, SelectOptionsProps } from '../select-form'
import { usePets } from '@/hooks/usePets'

interface SelectFilterProps {
  options: SelectOptionsProps[]
  value: string
  onChange: (value: string) => void
  name: string
}
export function SelectFilter({
  value,
  onChange,
  options,
  name,
}: SelectFilterProps) {
  const { isFetching, isLoading } = usePets()

  return (
    <SelectForm
      name={name}
      disabled={isLoading || isFetching}
      options={options}
      value={value}
      onChange={onChange}
    />
  )
}
