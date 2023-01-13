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
        <Navbar.Brand href='/' className='text-white'><h5>Natalie & Eddie</h5> May 30, 2023</Navbar.Brand>
        {/* Hamburger button below */}
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end text-white'>
            <Nav>
            {!currentUser &&
                  <Link to='/login' className='nav-link text-white'>Login</Link>
                }
              {currentUser &&
              <Logout className='logoutNav' />
              }
                <Link to='/Categories' className='nav-link text-white'>Categories</Link>
                <Link to='/Todos' className='nav-link text-white'>To Dos</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}
