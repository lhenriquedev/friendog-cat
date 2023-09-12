import { Pet } from '@/@types/Pet'
import { api } from '@/lib/api'

export async function getPets({ pageParam = 1 }) {
  const LIMIT = 8

  try {
    const response = await api.get<Pet[]>(
      `/animals?_page=${pageParam}&_limit=${LIMIT}`,
    )
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch pets')
  }
}
