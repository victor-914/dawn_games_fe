import React from 'react'
import HeroSection from '../components/blog/HeroSection'
import Featured from '../components/blog/Featured'
import Latest from '../components/blog/Latest'
import Game from '../components/blog/Game'
import Explore from '../components/blog/Explore'

const Blog = () => {
  return (
    <main>
        <HeroSection />
        <Featured />
        <Latest />
        <Game />
        <Explore />
    </main>
  )
}

export default Blog
