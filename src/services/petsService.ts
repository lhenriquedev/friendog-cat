import { Pet } from '@/@types/Pet'
import { api } from '@/lib/api'

export async function getPets() {
  try {
    const response = await api.get<Pet[]>('/animals')
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch pets')
  }
}
