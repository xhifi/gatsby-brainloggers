import React from 'react'
import {Link} from 'gatsby'

const CallToAction = () => {
    return (
        <div className="py-5 pt-0">
            <div className="container">
                <div className="p-5 mb-4 shadow-lg rounded-10 cta-component">
                    <div className="container-fluid py-5">
                        <div className="row align-items-center cta-content" >
                            <div className="col-md-8">
                                <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                                <p className=" fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                                <Link to="/" className="btn btn-lg rounded-10 btn-main-dark">Click here</Link>
                            </div>
                            <div className="col-md-4" ></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
