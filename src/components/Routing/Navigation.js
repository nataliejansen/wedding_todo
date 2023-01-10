import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'


export default function Navigation() {

  const { currentUser } = useAuth()

  return (
    <>
    <Navbar expand='md' variant='dark' bg='dark' className='p-3'>
        <Navbar.Brand href='/'>Wedding To Do App</Navbar.Brand>
        {/* Hamburger button below */}
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Nav>
            {!currentUser &&
                  <Link to='/login' className='nav-link'>Login</Link>
                }
                <Link to='/Categories' className='nav-link'>Categories</Link>
                <Link to='/Todos' className='nav-link'>To Dos</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}
