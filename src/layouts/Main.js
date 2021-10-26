import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo';
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'

import HeaderHero from '../components/HerderHero'
import Footer from '../components/Footer'

import '../style/style.scss'

const Main = ({ children }) => {
    return (
        <div className="">
            <GatsbySeo
                title= 'Brainloggers'
                description='Web & Graphic Design, IT & Security, Digital Marketing Solutions'
            />
            <HeaderHero />
            { children }
            <Footer />
        </div>
    )
}

export default Main
