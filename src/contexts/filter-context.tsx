import { createContext, ReactNode, useContext, useState } from 'react'

type FilterContextType = {
  filterValues: {
    gender: string
    size: string
    color: string
    type: string
    // isVacinated: boolean
  }
  handleValueChange: (value: string, field: string) => void
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
}

export default function FilterContextProvider({
  children,
}: FilterContextProps) {
  const [filterValues, setFilterValues] = useState(filterInitialValues)

  const handleValueChange = (field: string, value: string) => {
    setFilterValues({ ...filterValues, [field]: value })
  }

  return (
    <FilterContext.Provider value={{ filterValues, handleValueChange }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => {
  return useContext(FilterContext)
}
