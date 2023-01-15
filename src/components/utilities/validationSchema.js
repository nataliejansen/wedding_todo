import * as Yup from 'yup'

const catSchema = Yup.object().shape({
    categoryName: Yup.string().max(25, 'Max 25 characters').required('Required'),
    categoryDescription: Yup.string().max(50, 'Max 50 characters')
})

const todoSchema = Yup.object().shape({
    name: Yup.string().max(25, 'Max 25 characters').required('Required'),
    done: Yup.bool(),
    categoryId: Yup.number().required('Required')
})

export default todoSchema
export { catSchema }