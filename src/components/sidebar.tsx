import { SidebarFilter } from './sidebar-filter'

export const Sidebar = () => {
  return (
    <aside className="bg-brand-500">
      <div className="px-10 py-8">
        <h2 className="mb-8 text-xl font-semibold text-slate-100">Filtros</h2>

        <nav>
          <ul className="flex flex-col items-center gap-12">
            <SidebarFilter />
          </ul>
        </nav>
      </div>
    </aside>
  )
}
