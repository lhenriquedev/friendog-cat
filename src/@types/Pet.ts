export interface Pet {
  id: number
  name: string
  type: 'dog' | 'cat' // Tipo é restrito a 'Cachorro' ou 'Gato'
  age: number
  color: string
  breed: string
  image: string
  size: 'small' | 'medium' | 'big' // Tamanhos restritos
  description: string
}
