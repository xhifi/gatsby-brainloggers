import React from 'react'

import CubesTriangle from '../images/base/cubes-triangle.svg'
import PreNav from '../components/PreNav'
import Navbar from '../components/Navbar'

const HerderHero = () => {
    return (
        <div className="header__hero pb-5">
            <PreNav />
            <Navbar />
            <div className="container mt-2 rounded-10 border-3 p-5 hero__canvas ">
                <div className="row row-col-2 align-items-center text-white">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 hero__image"><img src={CubesTriangle} alt="triangle" className="mb-3 mb-md-3 mb-sm-3" /></div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <h1>A Plug & Play solution to all your IT & Design needs</h1>
                        <p>From Graphic Design to Web Design, from basic computer stuff to big servers management and deployment, we are a one-stop shop for all your technical needs.</p>
                        <p className="btn btn-lg text-white glassify border-10">Call Us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HerderHero
