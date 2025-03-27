import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Blog from './components/Pages/Blog'
import Home from './components/Pages/Home'
import Tips from './components/Pages/Tips'
import Header from './components/Pages/Header'

function App() {


  return (
    <>
  

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/header' element={<Header />} />
      <Route path='/tips' element={<Tips />} />
      <Route path='/blog' element={<Blog />} />
      

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
