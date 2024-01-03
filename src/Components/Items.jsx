import { LinearProgress, List, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../Features/todos/todoSlice'

const Items = () => {


  const dispatch = useDispatch()

  const { alltodos, isLoading, isError } = useSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])


  if (isError) {
    <Typography variant='h3' align='center' color={"error"}
      sx={{ margin: "20px 0px" }}>Something Went Wrong</Typography>

  }




  if (isLoading) {
    return (
      <LinearProgress color='warning' />
    )
  }


  if (alltodos?.length === 0) {
    return (
      <Typography variant='h3' align='center'
        sx={{ margin: "20px 0px" }}>No Todo Yet</Typography>
    )

  }
  return (
    <List>
      {
        alltodos?.map(todo => <ItemDetail key={todo?._id} todo={todo} />)
      }

    </List>
  )
}

export default Items