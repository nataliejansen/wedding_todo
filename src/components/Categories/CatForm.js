import React from 'react'
import { Formik, Form, Field } from 'formik'
import { catSchema } from '../utilities/validationSchema'
import axios from 'axios'

export default function CatForm(props) {
    const handleSubmit = (values) => {
        if(!props.category){
            const catToCreate = values

            axios.post(`https://localhost:7228/api/Categories`, catToCreate).then(() => {
                props.setShowCreate(false)
                props.getCategories()
            })
        }
        else {
            const catToEdit = {
                categoryId: props.category.categoryId,
                categoryName: values.categoryName,
                categoryDescription: values.categoryDescription
            }

            axios.put(`https://localhost:7228/api/Categories/${props.category.categoryId}`, catToEdit).then(() => {
                props.setShowEdit(false)
                props.getCategories()
            })
        }
    }

  return (
    <div className='createCategory m-2 text-white text-center'>
        <Formik
            initialValues={{
                //Below is a ternary operator that makes our form behave differently based on whether we have a prop
                //called "category" (if the prop exists, we are editing the category)
                categoryName: props.category ? props.category.categoryName : '',
                categoryDescription: props.category ? props.category.categoryDescription : ''
            }}
            validationSchema={catSchema}
            onSubmit={values => handleSubmit(values)}
        >
            {(errors, touched) => (
                //we will build our form below, passing in the errors and touched objects to it
                <Form id='catForm' className='row text-center m-auto'>
                    <div className="form-group m-1 p-1">
                        <Field name='categoryName' className='form-control' placeholder='Name' />
                        {errors.categoryName && touched.categoryName ?
                            <div className='text-danger'>{errors.categoryName}</div>
                        : null}
                    </div>
                    <div className="form-group m-1 p-1">
                        <Field name='categoryDescription' className='form-control' placeholder='Description' />
                        {errors.categoryDescription && touched.categoryDescription ?
                            <div className='text-danger'>{errors.categoryDescription}</div>
                        : null}
                    </div>
                    <div className="form group m-1">
                        <button type='submit' className="btn btn-success">Submit Category to API</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
  )
}
