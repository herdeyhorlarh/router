
import './App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Social from './Pages/Social'
import Work from "./Pages/Work"
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
function App() {
  
  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/contact' element={<Contact />}/>
       <Route path='/shop' element={<Shop />}/>
       <Route path='/social' element={<Social />}/>
       <Route path='/work' element={<Work />}/>
     </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
