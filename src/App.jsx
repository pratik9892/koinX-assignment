import Navbar from "./components/Navbar"
import CryptocurrInfo from "./pages/CryptocurrInfo"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/:coinId" element={<CryptocurrInfo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
