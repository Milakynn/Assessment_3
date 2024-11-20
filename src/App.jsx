import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {Header} from './components/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Header text="Red 4 U"/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/register' element={ <Register/> }/>
      </Routes>
    </>
  )
}

export default App
