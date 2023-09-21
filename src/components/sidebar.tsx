import { usePets } from '@/hooks/usePets'
import { SidebarFilter } from './filter/sidebar-filter'
import { Button } from './ui/button'
import { Loader2, Search } from 'lucide-react'
import { useFilter } from '@/contexts/filter-context'

export const Sidebar = () => {
  const { clearFilters } = useFilter()
  const { refetch, isFetching } = usePets()

  return (
    <aside className="overflow-hidden bg-white border-r border-gray-200">
      <div className="px-10 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-brand-900">Filtros</h2>
          <Button variant="link" onClick={clearFilters}>
            Limpar filtros
          </Button>
        </div>

        <nav className="mb-10">
          <ul className="flex flex-col items-center gap-4">
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
