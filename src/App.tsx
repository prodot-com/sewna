import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './App/Home'
import CustomRequest from './components/ui/CustomRequest'
import PortfolioUpload from './components/ui/PortofolioUpload'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/req' element={<CustomRequest/>}/>
      <Route path='/por' element={<PortfolioUpload/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
