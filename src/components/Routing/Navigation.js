import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Logout from '../Auth/Logout'

import '../Routing/Navigation.css'



export default function Navigation() {

  const { currentUser } = useAuth()

  return (
    <>
    <Navbar expand='md' className='p-3'>
        <Navbar.Brand href='/' className='home'></Navbar.Brand>
        
        {/* Hamburger button below */}
        <Navbar.Toggle className='bg-white text-center' />
        <Navbar.Collapse className='justify-content-end text-white'>
            <Nav>
              
            {!currentUser &&
                  <Link to='/login' className='nav-link'>Login</Link>
                }
              {currentUser &&
              <Logout className='logoutNav' />
              }
                <Link to='/Categories' className='nav-link'>Categories</Link>
                <Link to='/Todos' className='nav-link'>To Dos</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}
