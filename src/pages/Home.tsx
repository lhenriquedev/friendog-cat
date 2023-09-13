import { Sidebar } from '@/components/sidebar'
import { Pets } from './Pets'

export function Home() {
  return (
    <section className="grid grid-cols-[300px_1fr] gap-8">
      <Sidebar />
      <Pets />
    </section>
  )
}
