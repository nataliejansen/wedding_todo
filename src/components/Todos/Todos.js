import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import SingleTodo from './SingleTodo'
import FilterCat from './FilterCat'

export default function Todos() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState(0);

  const getTodos = () => {
    axios.get(`https://localhost:7228/api/Todos`).then(response => {
    console.log(response)
    setTodos(response.data)
    })
  }

  useEffect(() => {
  getTodos()
  }, []);

  return (
    <section className="todos">
      <article className="bg-light p-5">
        <h1 className="text-center">Wedding Todo Dashboard</h1>
      </article>
      <FilterCat setFilter={setFilter} />
      <Container>
        <article className="todoGallery row justify-content-center">
          {filter === 0 ? todos.map(x =>
            <SingleTodo key={x.todoId} todo={x} />
          ) :
          todos.filter(x => x.categoryId === filter).map(x =>
            <SingleTodo key={x.todoId} todo={x} />
          )}
          {filter !== 0 && todos.filter(x => x.todoId === filter).length === 0 &&
            <h2 className="alert alert-warning text-dark">
              There are no results for this category!
            </h2>
          }
        </article>
      </Container>
    </section>
  )
}
