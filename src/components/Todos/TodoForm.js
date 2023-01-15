import React, { useState, useEffect } from 'react'
import {Formik, Field, Form} from 'formik'
import todoSchema from '../utilities/validationSchema'
import axios from 'axios'

export default function TodoForm(props) {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        axios.get(`https://localhost:7228/api/Categories`).then(response => setCategories(response.data))
    }

    const handleSubmit = (values) => {
        if(!props.todo){
            const todoToCreate = values

            axios.post(`https://localhost:7228/api/ToDos`, todoToCreate).then(() => {
                props.getToDos()
                props.setShowCreate(false)
            })
        }
        else{
            const todoToEdit ={
                todoId: props.todo.todoId,
                name: values.name,
                done: values.done,
                categoryId: values.categoryId
            }

            axios.put(`https://localhost:7228/api/ToDos/${props.todo.todoId}`, todoToEdit).then(() => {
                props.getTodos()
                props.setShowEdit(false)
            })
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

  return (
    <Formik
        initialValues={{
            name: props.todo ? props.todo.name : '',
            done: props.todo ? props.todo.done : false,
            categoryId: props.todo ? props.todo.categoryId : ''
        }}
        validationSchema= {todoSchema}
        onSubmit={(values) => handleSubmit(values)}>
        {({errors, touched}) => (
            <Form id='todoForm'>
                 <div className='form-group m-3'>
                    <Field name='name' className='form-control' placeholder='Name' />
                    {errors.name && touched.name ? (
                        <div className="text-danger">{errors.name}</div>
                    ) : null}
                </div>
                <div className="form-group m-3">
                <Field name='done'>
                <input type='checkbox' checked={props.todo.done}>Mark as Done</input></Field>
                </div>
                <div className='form-group m-3'>
                    <Field name='categoryId' as='select' className='form-control'>
                        {/* Below we will map an option tag for every category in the API
                            we also will hard code a disabled option as a user prompt */}
                        <option value='' disabled>[--Please Choose--]</option>
                        {categories.map(cat =>
                            <option key={cat.categoryId} value={cat.categoryId}>
                                {cat.categoryName}
                            </option>
                        )}
                    </Field>
                </div> 
                <div className="form-group m-3">
                    <button type='submit' className='btn btn-info m-3'>Add To Do</button>
                </div>

            </Form>
        )}


        </Formik>

  )
}







// <input type='checkbox' checked={props.todo.done}>

// </input>