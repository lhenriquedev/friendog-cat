import { useSearchParams } from 'react-router-dom'
import { SelectForm, SelectOptionsProps } from './select-form'

interface FilterProps {
  options: SelectOptionsProps[]
  filterName: string
}
export function Filter({ filterName, options }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchParamsValue = searchParams.get(filterName) || 'todos'

  const handleChange = (e: string): void => {
    searchParams.set(filterName, e)
    setSearchParams(searchParams)
  }

  return (
    <SelectForm
      options={options}
      value={searchParamsValue}
      onChange={handleChange}
    />
  )
}
