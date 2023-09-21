import { Pet } from '@/@types/Pet'
import { api } from '@/lib/api'
import supabase from './supabase'
import { Filter } from '@/@types/Filter'

type PetsServiceProps = {
  filter?: Filter
}

export const PetsService = {
  getPets: async ({ filter }: PetsServiceProps) => {
    let query = supabase.from('animals').select('*')

    if (filter?.gender) {
      query = query.eq('gender', filter.gender)
    }

    if (filter?.size) {
      query = query.eq('size', filter.size)
    }

    if (filter?.color) {
      query = query.eq('color', filter.color)
    }

    if (filter?.type) {
      query = query.eq('type', filter.type)
    }

    const { data, error } = await query

    if (error) {
      throw new Error('Failed to fetch pets')
    }

    return data
  },

  getPet: async (id: number) => {
    try {
      const response = await api.get<Pet>(`/animals/${id}`)
      return response.data
    } catch (error) {
      throw new Error('Failed to fetch pet')
    }
  },
}
