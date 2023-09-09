import { Sidebar } from '@/components/sidebar'

import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  )
}
