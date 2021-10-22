import React from 'react'
import { Link } from 'gatsby'
import { BsFillTelephoneFill } from 'react-icons/bs'

function Hero() {
    return (
        <div className="hero-container">
            <div className="container col-xl-10 col-xxl-8 ">
                <div className="row align-items-center g-lg-5 py-5">
                    <div className="col-lg-7 text-center text-lg-start">
                        <h1 className="display-4 fw-bold lh-1 mb-3">A Plug & Play solution to everything IT</h1>
                        <p className="col-lg-10 fs-4">We provide a seamless workflow and communication channel so that all your IT needs get addressed as efficiently and accurately as possible.</p>
                        <Link to="/contact" className="btn btn-lg btn-outline-main-dark mb-4 mb-md-0 mb-lg-0 rounded-10"><BsFillTelephoneFill className="me-2 mb-1" /> Call Us Now</Link>
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5 pt-3 pt-lg-0">
                        <form className="p-4 p-md-5 border rounded-10 bg-light glass perspective-transform perspective-transform-null hero-form text-main-dark">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="checkbox mb-3">
                                <label for="remember-checkbox">
                                    <input type="checkbox" id="remember-checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-main-dark perspective-transform-null" type="submit">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Hero
