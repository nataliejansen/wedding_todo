import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navigation from './components/Routing/Navigation'
import Login from './components/Login/Login'
import Categories from './components/Categories/Categories'
import Todos from './components/Todos/Todos'
import NotFound from './components/Routing/NotFound'

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/todos' element={<Todos/>} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

