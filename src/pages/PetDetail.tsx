import { useParams } from 'react-router-dom'

export function PetDetail() {
  const { id } = useParams()

  return (
    <section>
      <h2>{id}</h2>
    </section>
  )
}
