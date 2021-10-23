import React from 'react'
import { Link } from 'gatsby'
import { BsFillCollectionFill, BsFillPeopleFill, BsBootstrapFill, } from "react-icons/bs";

import Data from '../data/services.json'

const data = Data;
const content = Data.content;

function Card () {
    return (
        content.map((val, index) => {
            return (
                <Link to={val.path}className="col text-decoration-none mb-3 mb-lg-0" >
                    <div className="card h-100 px-3 py-3 rounded-10 perspective-transform perspective-transform-null text-main-dark box-shadow glass-white-1">
                        <div className="card-body">
                            <div className="feature-icon bg-main-dark border shadow">
                                <BsFillCollectionFill className="text-white" />
                            </div>
                            <h2>{val.item}</h2>
                            <p className="mb-0">{val.description}</p>
                        </div>
                    </div>
                </Link>
            )
        })
    )
}

const Services = () => {
    const datameta = JSON.stringify(data.description) 
    return (
        <div className="service-container bg-main-dark shadow-lg border-bottom">
            <div className="container px-4 pb-5">
                <div className="service-meta w-100 text-white py-5 px-2 text-md-center">
                    <h1 className="p-0 m-0 mb-2">{data.name}</h1>
                    <p>{datameta}</p>
                </div>
                <div className=" row row-cols-1 row-cols-lg-3">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Services