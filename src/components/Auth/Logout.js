import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'
import '../Auth/Logout.css'

export default function Logout() {
    
    const { logout } = useAuth()
    const navigate = useNavigate()

    function handleAuth() {
        logout()
        navigate('/')
    }

  return (
    <div className="logout text-center text-white">
        <Profile />
        <button className="btn btn-dark m-0 border-white" onClick={() => handleAuth()}>
            Logout
        </button>
    </div>
  )
}