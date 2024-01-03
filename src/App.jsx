import {  ThemeProvider, createTheme } from '@mui/material'
import React, { useState } from 'react'


import Navbar from './Components/Navbar';
// import FormSection from './Components/FormSection';
// import Items from './Components/Items';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';


const App = () => {
  const [toggle, setToggle] = useState(true)

  const handletheme = () => {
    setToggle((prev) => {
      return prev ? false : true
    })

  }
  const theme = createTheme({
    palette: {
      primary: {

        main: toggle ? '#F875AA' : "#99A98F",

        contrastText: '#fff',
      },
      secondary: {

        main: toggle ? '#f44661' : "#F0DBAF",
        contrastText: '#000',
      },

      error: {
        main: toggle ? "#B31312" : "#ECF4D6"

      },
      info: {
        main: toggle ? "#f44336" : "#C683D7"

      },
      warning: {
        main: toggle ? "#3f50b7" : "#C7DCA7"
      }
    },
  });


  return (
    <>

      <ThemeProvider theme={theme}>
        <Navbar handletheme={handletheme} />
        <Home />


      </ThemeProvider>
      <ToastContainer />
    </>


  )

}
export default App