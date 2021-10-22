import React from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo.svg'

const footer = () => {
    return (
        <div className="border-top bg-light">
            <footer className=" container d-flex flex-wrap justify-content-between align-items-center py-3 my-0">
                <p className="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>
                
                <Link to="" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"><img src={Logo} alt="Brainloggers" className="navbar-brand" width="25px" /> Brainloggers</Link>
                
                <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">About</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Pricing</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">FAQ</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Blog</Link></li>
                </ul>
            </footer>
        </div>
        
    )
}

export default footer
