import { AppBar, Button,Toolbar, Typography } from '@mui/material'
import React from 'react'

import PaletteIcon from '@mui/icons-material/Palette';



const Navbar = ({ handletheme }) => {

  return (
    <>
      <AppBar position="static" >
        <Toolbar  >

          <Typography variant="h6" flexGrow={1}>
          
              Redux-Todo
          
          </Typography>

         <Button variant='contained' startIcon={<PaletteIcon />} onClick={() => handletheme()}> Change Theme </Button>

      



        </Toolbar>
      </AppBar>
    </>
  )
}
export default Navbar