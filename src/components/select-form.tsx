import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/select'

export type SelectOptionsProps = {
  label: string
  value: string
}

type SelectFormProps = {
  options: SelectOptionsProps[]
  onChange: (value: string) => void
  value: string
}
export function SelectForm({ onChange, options, value }: SelectFormProps) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-full bg-white rounded-lg border-brand-400 text-brand-900">
        <SelectValue placeholder="Selecione uma idade" />
      </SelectTrigger>
      <SelectContent className="bg-brand-500 border-brand-500">
        {options.map((option) => (
          <SelectItem
            className="text-slate-100"
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
