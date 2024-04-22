import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Product from '../components/Product'
import NewsLetter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products/>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Home
