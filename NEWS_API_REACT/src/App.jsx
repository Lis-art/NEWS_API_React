import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
/* import Countrypage from "./pages/CountryPage"
import Keywordpage from "./pages/KeyWordPage" */
import Homepage from './pages/HomePage'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Homepage />}/>
{/*           <Route path='./countrypage' element={<Countrypage />}/>
          <Route path='./keywordpage' elemnt={<Keywordpage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
