import React from 'react'
import '../Footer.css'

export default function Footer() {
    
  return (
   

        <footer className='text-center text-white bg-dark p-4'>
            <strong>&hearts; &copy;{new Date().getFullYear()} All Rights Reserved &hearts;</strong>
        </footer>
  )
}