import { Slider } from '../ui/slider'

interface RangeFilterProps {
  value: number[]
  onChange: (number: number[]) => void
}
export function RangeFilter({ onChange, value }: RangeFilterProps) {
  return <Slider min={1} onValueChange={onChange} value={value} />
}
