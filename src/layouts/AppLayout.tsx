import { Header } from '@/components/header'

import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="overflow-hidden">
        <Outlet />
      </main>
    </div>
  )
}
