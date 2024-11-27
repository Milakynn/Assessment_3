import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Client, Databases } from 'appwrite';
import {Header} from './components/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { RedWine } from './pages/RedWine'
import { WhiteWine } from './pages/WhiteWine'
import { Routes, Route } from 'react-router-dom'
import { NewsTrends } from './pages/NewsTrends';
import { Accessories } from './pages/Accessories';
import { SalesEvents } from './pages/SalesEvents';
import { Contact } from './pages/Contact';

function App() {

  const client = new Client();
  client.setProject('673eab4d0018c64dc381');
  client.setEndpoint("https://cloud.appwrite.io/v1")

  const database = new Databases(Client);

  return (
    <>
      <style type="text/css">
        {`
          body {
            background-color: lavender;
          }

        `}
      </style>

      <Header text="Red 4 U"/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/red-wine' element={ <RedWine/> }/>
        <Route path='/white-wine' element={ <WhiteWine/> }/>
        <Route path='/new-trends' element={ <NewsTrends/> }/>
        <Route path='/accessories' element={ <Accessories/> }/>
        <Route path='/sales-events' element={ <SalesEvents/> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/register' element={ <Register/> }/>
      </Routes>
    </>
  )
}

export default App
