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
    <Navbar expand='md' className='p-3 bg-dark'>
        <Navbar.Brand href='/'>	<p className='heartIcon'>&#9825;</p></Navbar.Brand>
        {/* Hamburger button below */}
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Nav className='text-white'>
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
