import { SidebarFilter } from './sidebar-filter'
import { Button } from './ui/button'

export const Sidebar = () => {
  return (
    <aside className="bg-white border-r border-gray-200">
      <div className="px-10 py-8">
        <h2 className="mb-8 text-xl font-semibold text-brand-900">Filtros</h2>

        <nav className="mb-10">
          <ul className="flex flex-col items-center gap-8">
            <SidebarFilter />
          </ul>
        </nav>
        <Button className="w-full bg-brand-900 hover:bg-brand-500">
          Pesquisar
        </Button>
      </div>
    </aside>
  )
}
