import { Pet } from '@/@types/Pet'
import { api } from '@/lib/api'

export const PetsService = {
  getPets: async ({
    pageParam = 1,
    type = '',
    size = '',
    color = '',
    energy = '',
  }) => {
    const LIMIT = 8

    let query = `/animals/`

    // how to improve this?
    if (pageParam) {
      query += `?_page=${pageParam}&_limit=${LIMIT}`
    }

    if (type) {
      query += `&type=${type}`
    }

    if (size) {
      query += `&size=${size}`
    }

    if (color) {
      query += `&color=${color}`
    }

    if (energy) {
      query += `&energy=${energy}`
    }

    try {
      const response = await api.get<Pet[]>(query)
      return response.data
    } catch (error) {
      throw new Error('Failed to fetch pets')
    }
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
