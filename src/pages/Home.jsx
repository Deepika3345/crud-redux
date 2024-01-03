import React  from 'react'
import FormSection from '../Components/FormSection'
import Items from '../Components/Items'

import { useSelector } from 'react-redux'
import { Container, Typography } from '@mui/material'

const Home = () => {

    const { user, isLoading } = useSelector(state => state.todos)

    if (isLoading) {
        <Typography variant='h1'>Loading

        </Typography>
    }

  
    
    return (
        <Container>
            <FormSection />
            <Items />
        </Container>
    )
}

export default Home