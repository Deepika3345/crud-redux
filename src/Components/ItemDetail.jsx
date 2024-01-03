import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Divider, ListItem, Typography } from '@mui/material';

import { RemoveTodo, editInState, removeFromState } from '../Features/todos/todoSlice';
import { useDispatch, useSelector } from 'react-redux';


const ItemDetail = ({ todo }) => {

  const { isSuccess } = useSelector((state) => state.todos)
  const dispatch = useDispatch()



  const handleRemove = (_id) => {
    dispatch(RemoveTodo(_id))


    if (isSuccess) {
      dispatch(removeFromState(_id))
    }

  }

  const handleEdit = (todo) => {
    dispatch(editInState(todo))
  }




  return (
    <>
      <ListItem>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='h6'>{todo?.title}</Typography>
          <Typography variant='body1'>{todo?.description}</Typography>
        </Box>
        <span>
          <Button variant="outlined" endIcon={<EditIcon />} sx={{ margin: "0px 5px" }}
            color='success' onClick={() => handleEdit(todo)} >Edit</Button>
          <Button variant="outlined" endIcon={<DeleteIcon />} color='warning' onClick={() => handleRemove(todo?._id)}>Delete</Button>
        </span>
      </ListItem>
      <Divider />
    </>
  )
}

export default ItemDetail