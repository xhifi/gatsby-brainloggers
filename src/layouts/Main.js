import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import HeaderHero from '../components/HerderHero'
import Footer from '../components/Footer'

import '../style/style.scss'

const Main = ({ children }) => {
    return (
        <>
            <GatsbySeo
                title= 'Brainloggers'
                description='Web & Graphic Design, IT & Security, Digital Marketing Solutions'
            />
            <HeaderHero />
            { children }
            <Footer />
        </>
    )
}

export default Main
