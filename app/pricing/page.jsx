import React from 'react'
import HeroSection from '../components/pricing/HeroSection'
import Platform from '../components/pricing/Platform'
import Revenue from '../components/pricing/Revenue'
import Add from '../components/pricing/Add'
import Custom from '../components/pricing/Custom'

const Pricing = () => {
  return (
    <main>
        <HeroSection />
        <Platform />
        <Revenue />
        <Add />
        <Custom />
    </main>
  )
}

export default Pricing
