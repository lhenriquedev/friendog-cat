import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'

import { Home } from './pages/Home'
import { PetDetail } from './pages/PetDetail'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="pet/:id" element={<PetDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
