import { usePets } from '@/hooks/usePets'
import { SidebarFilter } from './filter/sidebar-filter'
import { Button } from './ui/button'
import { Loader2, Search } from 'lucide-react'

export const Sidebar = () => {
  const { refetch, isFetching } = usePets()

  return (
    <aside className="overflow-hidden bg-white border-r border-gray-200">
      <div className="px-10 py-8">
        <h2 className="mb-8 text-xl font-semibold text-brand-900">Filtros</h2>

        <nav className="mb-10">
          <ul className="flex flex-col items-center gap-8">
            <SidebarFilter />
          </ul>
        </nav>

        <Button
          className="w-full bg-brand-900 hover:bg-brand-500"
          onClick={() => refetch()}
          disabled={isFetching}
        >
          Pesquisar
          {isFetching ? (
            <Loader2 className="w-4 h-4 ml-4" />
          ) : (
            <Search className="w-4 h-4 ml-4" />
          )}
        </Button>
      </div>
    </aside>
  )
}
