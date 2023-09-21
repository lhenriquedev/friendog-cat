import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

export type SelectOptionsProps = {
  label: string
  value: string
}

type SelectFormProps = {
  options: SelectOptionsProps[]
  onChange: (value: string) => void
  value: string
  disabled?: boolean
  name: string
}
export function SelectForm({
  onChange,
  options,
  value,
  disabled,
  name,
}: SelectFormProps) {
  return (
    <Select
      disabled={disabled}
      onValueChange={onChange}
      value={value}
      name={name}
    >
      <SelectTrigger className="w-full bg-white rounded-lg border-brand-400 text-brand-900">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="">
        {options.map((option) => (
          <SelectItem
            className="font-semibold text-center text-brand-text"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
