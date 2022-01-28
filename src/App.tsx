import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout/MainLayout"
import Home from "./pages/Home/Home"

const App: React.FC = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  )
}

export default App
