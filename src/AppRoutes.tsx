import { Route, Routes } from "react-router-dom"
import { AtaEditPage } from "./components/pages/AtaEdit"
import { AtaListPage } from "./components/pages/AtaList"
import { Home } from "./components/pages/Home"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/atas' element={<AtaListPage />} />
      <Route path='/atas/edit' element={<AtaEditPage />} />
    </Routes>
  )
}