import { createContext, ReactNode, useContext, useState } from 'react'

type FilterContextType = {
  filterValues: {
    gender: string
    size: string
    color: string
    type: string
    age: string
    isVaccinated: boolean
  }
  handleValueChange: (field: string, value: unknown) => void
  clearFilters: () => void
}

const FilterContext = createContext({} as FilterContextType)

interface FilterContextProps {
  children: ReactNode
}

const filterInitialValues = {
  gender: '',
  size: '',
  color: '',
  type: '',
  age: '',
  isVaccinated: false,
}

export default function FilterContextProvider({
  children,
}: FilterContextProps) {
  const [filterValues, setFilterValues] = useState(filterInitialValues)

  const handleValueChange = (field: string, value: unknown) => {
    setFilterValues({ ...filterValues, [field]: value })
  }

  const clearFilters = () => {
    setFilterValues(filterInitialValues)
  }

  return (
    <FilterContext.Provider
      value={{ filterValues, clearFilters, handleValueChange }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => {
  return useContext(FilterContext)
}
