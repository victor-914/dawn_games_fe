import React from 'react'
import { Box } from '@mui/material'
import Herosection from './components/home/Herosection'
import Needs from './components/home/Needs'
import Institution from './components/home/Institution'
import Power from './components/home/Power'
import Join from './components/home/Join'

const page = () => {
  return (
    <Box>
      <Herosection />
      <Needs />
      <Institution />
      <Power />
      <Join />
    </Box>
  )
}

export default page
