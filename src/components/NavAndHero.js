import React from 'react'

import PreNav from '../components/PreNav'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const NavAndHero = () => {
    return (
        <div className="nav-and-hero">
            <PreNav />
            <Navbar />
            <Hero />
        </div>
    )
}

export default NavAndHero
