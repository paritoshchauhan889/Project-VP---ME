import React from 'react'
import {Routes , Route } from 'react-router-dom'
import Home from './Home'
import About from './Components/Pages/About'

const App = () => {
  return (
    
   <>
    <Routes>
      <Route  exact path="/" element={<Home/>}/>
      <Route   path="/about" element={<About/>}/>
    </Routes>
   </>
  )
}

export default App
