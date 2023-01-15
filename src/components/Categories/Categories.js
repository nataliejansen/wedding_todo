import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import SingleCategory from './SingleCategory'

import { useAuth } from '../../contexts/AuthContext'
import CatCreate from './CatCreate';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  
  const getCategories = () => {
    axios.get(`https://localhost:7228/api/Categories`).then(response => {
      setCategories(response.data)
    })
  }

  const { currentUser } = useAuth()
  const [showCreate, setShowCreate] = useState(false)

  useEffect(() => {
    getCategories()
  }, []);
  
  
  return (
    <section className="categories">
      <article className="bg-info p-5">
        <h1 className="text-center">Categories Dashboard</h1>
      </article>

      {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
        <div className="bg-dark p-2 mb-3 text-center">
          {showCreate ?
            <>
              <button onClick={() => setShowCreate(false)} className='btn btn-warning'>Cancel</button>
              <CatCreate  getCategories={getCategories} setShowCreate={setShowCreate}/>
            </>
          : <button className='btn btn-info' onClick={() => setShowCreate(true)}>Create Category</button>
          }
        </div>
      }

<Container className='p-2'>
        <table className="table bg-info table-dark my-3">
          <thead className="table-secondary text-uppercase">
            <tr>
              <th>Name</th>
              <th>Description</th>
              {/* Edit/Delete column for our icons */}
              {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
                <th>Actions</th>
              }
            </tr>
          </thead>
          <tbody>
            {categories.map(cat =>
              //We add getCategories as a prop so we can call it from the SingleCategory component
              <SingleCategory key={cat.categoryId} category={cat} getCategories={getCategories} />

            )}
          </tbody>
        </table>
      </Container>
    </section>
  )
}

