import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navigation from './components/Routing/Navigation'
import Categories from './components/Categories/Categories'
import Todos from './components/Todos/Todos'
import NotFound from './components/Routing/NotFound'
import AuthProvider from './contexts/AuthContext'
import Login from './components/Auth/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className='App'>

      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/categories' element={<Categories/>} />
            <Route path='/todos' element={<ProtectedRoute><Todos/></ProtectedRoute>} />

            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  )
}

