import React from 'react'

export default function SingleTodo(props) {
  return (
    <div className='singleTodo col-md-5 m-4 text-white'>
        <h3>{props.todo.name}</h3>
        {props.todo.done !==null ?
            <p>{props.todo.done}</p> :
            <p>No Tasks to complete for this category!</p>
        }

        <a href={props.todo.done} target='_blank' rel='noreferrer' className='btn btn-info'>
            Mark as Done {props.todo.linkText}
        </a>
    </div>
  )
}