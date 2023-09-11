export interface Pet {
  id: number
  name: string
  type: 'Cachorro' | 'Gato' // Tipo é restrito a 'Cachorro' ou 'Gato'
  age: number
  color: string
  breed: string
  is_adopted: boolean
  photo: string
  energy: 'Baixa' | 'Moderada' | 'Alta' // Níveis de energia restritos
  characteristic: string
  size: 'Pequeno' | 'Médio' | 'Grande' // Tamanhos restritos
  adoption_requirements: string[]
  description: string
}
