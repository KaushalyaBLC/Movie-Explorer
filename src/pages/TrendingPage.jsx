import React from 'react'
import Trending from '../components/Trending'
import { Container } from '@mui/material'

const TrendingPage = () => {
  return (
    <>
        <Container maxWidth="lg" sx={{ mt: 5 }}>
        <h1>Trending Movies</h1>
        <p>Here you can find the trending movies.</p>
        </Container>
        <Trending />
    </>
  )
}

export default TrendingPage