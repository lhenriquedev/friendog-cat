import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <div className="grid grid-rows-[6.875rem_1fr] grid-cols-[350px_1fr] h-screen">
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
