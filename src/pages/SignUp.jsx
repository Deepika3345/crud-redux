import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'
import { registeruser } from '../Features/todos/todoSlice'

const SignUp = () => {
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        // password2: "",
    })

    const { name, email, password } = formData

    const handlechange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault()

        // if (password !== password2) {
        //     toast.error("check your password!")
     // }

        dispatch(registeruser(formData))
    }

    if (isLoading) {
        <Typography variant='h1' sx={{ textAlign: "center", marginTop: "80px" }}> Loading....</Typography>
    }

    useEffect(() => {
        if (user || isSuccess) {
            navigate("/")
        }

    }, [user])
    return (
        <form style={{ padding: "50px" }} onSubmit={handlesubmit}>
            <TextField id="outlined-basic" label="Enter Name" variant="outlined" sx={{ marginTop: "80px" }} required fullWidth name='name' value={name} onChange={handlechange} />
            <TextField id="outlined-basic" label="Enter Email" variant="outlined" sx={{ marginTop: "10px" }} required fullWidth name='email' value={email} onChange={handlechange} />
            <TextField id="outlined-basic" label="Enter Password" variant="outlined" sx={{ marginTop: "10px" }} required fullWidth name='password' value={password} onChange={handlechange} />
            {/* <TextField id="outlined-basic" label="Confirmed Password" variant="outlined" sx={{ marginTop: "10px" }} required fullWidth name='password2' value={password2} onChange={handlechange} /> */}

            <Button variant='outlined' type='submit' sx={{ marginTop: "10px" }} fullWidth > Register

            </Button>

        </form>
    )
}

export default SignUp