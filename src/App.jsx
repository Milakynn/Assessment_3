import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Client } from 'appwrite';
import {Header} from './components/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { RedWine } from './pages/RedWine'
import { WhiteWine } from './pages/WhiteWine'
import { Routes, Route } from 'react-router-dom'

function App() {

  const client = new Client();
  client.setProject('673eab4d0018c64dc381');

  return (
    <>
      <Header text="Red 4 U"/>
      <Routes>
        <Route path='/home' element={ <Home/> }/>
        <Route path='/red-wine' element={ <RedWine/> }/>
        <Route path='/white-wine' element={ <WhiteWine/> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/register' element={ <Register/> }/>
      </Routes>
    </>
  )
}

export default App
