import { useSearchParams } from 'react-router-dom'
import { Checkbox } from '../ui/checkbox'
import { usePets } from '@/hooks/usePets'

interface CheckBoxFilter {
  filterName: string
}
export function CheckBoxFilter({ filterName }: CheckBoxFilter) {
  const { isFetching, isLoading } = usePets()
  const [searchParams, setSearchParams] = useSearchParams()

  const checked = searchParams.get(filterName) === 'yes'

  const onChecked = (checked: boolean) => {
    if (!checked) {
      searchParams.delete(filterName)
      setSearchParams(searchParams)
    } else {
      searchParams.set(filterName, 'yes')
      setSearchParams(searchParams)
    }
  }

  return (
    <Checkbox
      disabled={isLoading || isFetching}
      className="accent-brand-900"
      id={filterName}
      checked={checked}
      onCheckedChange={onChecked}
    />
  )
}
