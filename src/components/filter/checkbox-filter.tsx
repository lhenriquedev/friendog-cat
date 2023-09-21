import { Checkbox } from '../ui/checkbox'

interface CheckBoxFilter {
  onChecked: (checked: boolean) => void
  value: boolean
  name: string
}
export function CheckBoxFilter({ onChecked, value, name }: CheckBoxFilter) {
  return (
    <Checkbox
      className="accent-brand-900"
      name={name}
      checked={value}
      onCheckedChange={onChecked}
    />
  )
}
