import React from 'react'
import Hero from '../Components/Home/Hero'
import FeaturedProduct from '../Components/Home/FeaturedProduct/FeaturedProduct'
import LatestProduct from '../Components/LatestProduct/LatestProduct'
import Footer from '../Components/Home/Footer'

const Home = () => {
  return (
    <div>
        <Hero />
        <FeaturedProduct />
        <LatestProduct />
        <Footer />
    </div>
  )
}

export default Home