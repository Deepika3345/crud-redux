import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { logInUser } from '../Features/todos/todoSlice'

const Login = () => {
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState(
        {
            email: "",
            password: ""
        }
    )
    const { email, password } = formData
    const handlechange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        })
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        dispatch(logInUser(formData))


    }

    useEffect(() => {

        if (user || isSuccess) {
            navigate("/")
        }
        // if (isError || message) {
        //     toast.success('Successfully created!');
        // }

    }, [user, isLoading, isError, isSuccess, message])



    return (
        <form style={{ padding: "100px" }} onSubmit={handlesubmit}>

            <TextField id="outlined-basic" label="Enter Email" variant="outlined" sx={{ marginTop: "80px" }} required fullWidth name='email' value={email} onChange={handlechange} />
            <TextField id="outlined-basic" label="Enter Password" variant="outlined" sx={{ marginTop: "10px" }} required fullWidth name='password' value={password} onChange={handlechange} />
            <Button variant='outlined' fullWidth sx={{ marginTop: "10px" }} type='submit'> Login

            </Button>
        </form>
    )
}

export default Login