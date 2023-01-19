import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import TodoEdit from './TodoEdit'
import axios from 'axios'

import { FaEdit, FaTrashAlt } from 'react-icons/fa'

export default function SingleTodo(props) {
  const { currentUser } = useAuth()
  const [showEdit, setShowEdit] = useState(false)

  const deleteTodo = (id) => {
    if(window.confirm(`Are you sure you want to delete ${props.todo.name}?`))
    {
      axios.delete(`https://localhost:7228/api/Todos/${id}`).then(() => {props.getTodos()})
    }
  }


  const handleDone = (id) => {
    const todoToEdit = {
      toDoId: props.todo.toDoId,
      name: props.todo.name,
      done: !props.todo.done,
      categoryId: props.todo.categoryId
    }

    axios.put(`https://localhost:7228/api/Todos/${id}`, todoToEdit).then(() => {props.getTodos()})
  }

  return (
    <div className='singleTodo col-md-5 m-4 text-white'>
      {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
        <div>
          <button id='editLink' onClick={() => setShowEdit(true)}>
            <FaEdit />
          </button>
          <button id='deleteLink' onClick={() => deleteTodo(props.todo.toDoId)}>
            <FaTrashAlt />
          </button>
          {showEdit &&
            <TodoEdit
              todo={props.todo}
              showEdit={showEdit}
              setShowEdit={setShowEdit}
              gettodos={props.getTodos} />
          }  
    </div>
      }

          <h3>{props.todo.name}</h3>
          {props.todo.done !== null ?
              <p>{props.todo.done}</p> :
              <p>No Tasks to complete for this category!</p>
          }

          <input type='checkbox' name='done' checked={props.todo.done} onChange={() => handleDone(props.todo.toDoId)}/>
          <label htmlFor='done'>
            Mark as Done
          </label>

          

      </div>

      
  )
}
