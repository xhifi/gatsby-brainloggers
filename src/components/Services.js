import React from 'react'
import { Link } from 'gatsby'
import Data from '../data/services.json'
import {globe, consultancy, colorpalette, servers, megaphone } from './imports'

const data = Data;
const content = Data.content;

function Card () {
    return (
        content.map((val, index) => {
            if (val.path === "/services/web-design"){
                return (
                    <Link to={val.path}className="col text-decoration-none mb-3 mb-lg-3 service__col" key={val.index}>
                        <div className="card h-100 px-3 py-3 rounded-10 shadow-lg glass-dark bg-main-dark service__card">
                            <div className="card-body service__body">
                                <div className="feature-icon bg-main-dark border shadow service__icon">
                                    <img src={globe} width="40px" height="40px" alt={val.image}/>
                                    {/* <BsFillCollectionFill className="text-white service__image" /> */}
                                </div>
                                <h2>{val.item}</h2>
                                <p className="mb-0">{val.description}</p>
                            </div>
                        </div>
                    </Link>
                )
            }else if (val.path === "/services/graphic-design"){
                return (
                    <Link to={val.path}className="col text-decoration-none mb-3 mb-lg-3 service__col" key={val.index}>
                        <div className="card h-100 px-3 py-3 rounded-10 shadow-lg glass-dark bg-main-dark service__card">
                            <div className="card-body service__body">
                                <div className="feature-icon bg-main-dark border shadow service__icon">
                                    <img src={colorpalette} width="40px" height="40px" alt={val.image}/>
                                    {/* <BsFillCollectionFill className="text-white service__image" /> */}
                                </div>
                                <h2>{val.item}</h2>
                                <p className="mb-0">{val.description}</p>
                            </div>
                        </div>
                    </Link>
                )
            }else if (val.path === "/services/information-technology"){
                return (
                    <Link to={val.path}className="col text-decoration-none mb-3 mb-lg-3 service__col" key={val.index}>
                        <div className="card h-100 px-3 py-3 rounded-10 shadow-lg glass-dark bg-main-dark service__card">
                            <div className="card-body service__body">
                                <div className="feature-icon bg-main-dark border shadow service__icon">
                                    <img src={consultancy} width="40px" height="40px" alt={val.image}/>
                                    {/* <BsFillCollectionFill className="text-white service__image" /> */}
                                </div>
                                <h2>{val.item}</h2>
                                <p className="mb-0">{val.description}</p>
                            </div>
                        </div>
                    </Link>
                )
            }else if (val.path === "/services/it-operations"){
                return (
                    <Link to={val.path}className="col text-decoration-none mb-3 mb-lg-3 service__col" key={val.index}>
                        <div className="card h-100 px-3 py-3 rounded-10 shadow-lg glass-dark bg-main-dark service__card">
                            <div className="card-body service__body">
                                <div className="feature-icon bg-main-dark border shadow service__icon">
                                    <img src={servers} width="40px" height="40px" alt={val.image}/>
                                    {/* <BsFillCollectionFill className="text-white service__image" /> */}
                                </div>
                                <h2>{val.item}</h2>
                                <p className="mb-0">{val.description}</p>
                            </div>
                        </div>
                    </Link>
                )
            }else if (val.path === "/services/digital-marketing"){
                return (
                    <Link to={val.path}className="col text-decoration-none mb-3 mb-lg-3 service__col" key={val.index}>
                        <div className="card h-100 px-3 py-3 rounded-10 shadow-lg glass-dark bg-main-dark service__card">
                            <div className="card-body service__body">
                                <div className="feature-icon bg-main-dark border shadow service__icon">
                                    <img src={megaphone} width="40px" height="40px" alt={val.image}/>
                                    {/* <BsFillCollectionFill className="text-white service__image" /> */}
                                </div>
                                <h2>{val.item}</h2>
                                <p className="mb-0">{val.description}</p>
                            </div>
                        </div>
                    </Link>
                )
            }else{
                return (
                    <Link to={val.path}className="col text-decoration-none mb-3 mb-lg-3 service__col" key={val.index}>
                        <div className="card h-100 px-3 py-3 rounded-10 shadow-lg glass-dark bg-main-dark service__card">
                            <div className="card-body service__body">
                                <div className="feature-icon bg-main-dark border shadow service__icon">
                                    <img src="../images/logo.svg" width="40px" height="40px" alt="x"/>
                                    {/* <BsFillCollectionFill className="text-white service__image" /> */}
                                </div>
                                <h2>{val.item}</h2>
                                <p className="mb-0">{val.description}</p>
                            </div>
                        </div>
                    </Link>
                )
            }
            // return (
            //     <Link to={val.path}className="col text-decoration-none mb-3 mb-lg-3 service__col" >
            //         <div className="card h-100 px-3 py-3 rounded-10 shadow-lg glass-dark bg-main-dark service__card">
            //             <div className="card-body service__body">
            //                 <div className="feature-icon bg-main-dark border shadow service__icon">
            //                     <img src={img} width="40px" height="40px"/>
            //                     {/* <BsFillCollectionFill className="text-white service__image" /> */}
            //                 </div>
            //                 <h2>{val.item}</h2>
            //                 <p className="mb-0">{val.description}</p>
            //             </div>
            //         </div>
            //     </Link>
            // )
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
                <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Services