import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo';
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'

import NavAndHero from '../components/NavAndHero'
import Footer from '../components/Footer'

import '../style/style.scss'

const Main = ({ children }) => {
    return (
        <div className="header-img">
            <GatsbySeo
                title= 'Brainloggers'
                description='Web & Graphic Design, IT & Security, Digital Marketing Solutions'
            />
            <NavAndHero />
            { children }
            <Footer />
        </div>
    )
}

export default Main
