import React from 'react'
import HeroSection from '../components/pricing/HeroSection'
import Add from '../components/pricing/Add'
import Ecosystem from '../components/pricing/Ecosystem'
import Ready from '../components/pricing/Ready'

const Pricing = () => {
  return (
    <main>
        <HeroSection />
        <Ecosystem />
        <Add />
        <Ready />
    </main>
  )
}

export default Pricing
