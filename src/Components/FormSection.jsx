import { Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../Features/todos/todoSlice'
import { useNavigate } from 'react-router-dom'


const FormSection = () => {

    const { edit } = useSelector((state) => state.todos)

    const dispatch = useDispatch()
    const [formdata, setFormdata] = useState({
        title: "",
        description: ""
    })
    const { title, description } = formdata

    const handlechange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value

        })


    }

    const handlesubmit = (e) => {
        e.preventDefault()

        if (edit.isEdit) {
            dispatch(updateTodo(
                {
                    _id: edit.todo._id,
                    title,
                    description
                }
            ))

        } else {
            dispatch(addTodo(formdata))
        }

        setFormdata({
            title: "",
            description: ""
        })

    }

    useEffect(() => {
        setFormdata({
            title: edit.todo.title,
            description: edit.todo.description
        })

    }, [edit])

    return (
        <form  onSubmit={(e) => handlesubmit(e)} 

        >
            <TextField label="Enter Title"
            sx={{marginTop:"80px"}}
            
                required
                fullWidth
                name='title'
                value={title}
                onChange={handlechange}

            />
            <TextField

                label="Enter Description"
                multiline
                rows={4}
                fullWidth
                sx={{ marginTop:"10px" }}
                name='description'
                value={description}
                onChange={handlechange}
                required

            >
            </TextField>
            <Button type='submit'   sx={{ marginTop:"10px" }} variant='contained' fullWidth>Save</Button>

        </form>
    )
}

export default FormSection