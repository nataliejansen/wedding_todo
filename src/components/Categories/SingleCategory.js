import React, { useState } from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'
import CatEdit from './CatEdit'
import axios from 'axios'

export default function SingleCategory(props) {
  const [showEdit, setShowEdit] = useState(false);

  const { currentUser } = useAuth()

  const deleteCat = (id) => {
    if(window.confirm(`Are you sure you want to delete ${props.category.categoryName}?`))
    {axios.delete(`https://localhost:7228/api/Categories/${id}`).then(() => {props.getCategories()})
    }
  }

  return (
    <tr>
        <td>{props.category.categoryName}</td>
        <td>{props.category.categoryDescription}</td>

    {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
      <td>
        <button className="m-1 rounded" id='editLink' onClick={() => setShowEdit(true)}>
          <FaEdit />
        </button>
        <button className="m-1 rounded" id='deleteLink' onClick={() => deleteCat(props.category.categoryId)}>
          <FaTrashAlt />
        </button>
        {showEdit &&
            <CatEdit 
              category={props.category} //passed from Categories.js to populate the form's initial values
              getCategories={props.getCategories} //run a GET request after editing a category
              showEdit={showEdit} //need to check the state of showEdit to show/hide the edit modal
              setShowEdit={setShowEdit} //passed in order to close the modal from CatEdit
              />
        }
      </td>
    }
    </tr>
  )
}