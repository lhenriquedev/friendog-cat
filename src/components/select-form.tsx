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
      <SelectContent className="bg-brand-500 border-brand-500">
        {options.map((option) => (
          <SelectItem
            className="text-center text-slate-100"
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
