import { Pet } from '@/@types/Pet'
import { api } from '@/lib/api'

export async function getPets({ pageParam = 1, type = '' }) {
  const LIMIT = 8

  let query = `/animals/`

  if (pageParam) {
    query += `?_page=${pageParam}&_limit=${LIMIT}`
  }

  if (type) {
    query += `&type=${type}`
  }

  try {
    const response = await api.get<Pet[]>(query)
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch pets')
  }
}
