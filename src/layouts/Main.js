import React from 'react'

// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'

import NavAndHero from '../components/NavAndHero'
import Footer from '../components/Footer'

import '../style/style.scss'

const Main = ({ children }) => {
    return (
        <div className="header-img">
            
            <NavAndHero />
            { children }
            <Footer />
        </div>
    )
}

export default Main
