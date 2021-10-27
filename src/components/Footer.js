import React from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo.svg'

const footer = () => {
    return (
        <div className="border-top bg-main-dark text-main">
            <div className="container-fluid py-4">
                <footer class="row">
                    <div class="col-12 col-md navbar-brand">
                        <img class="mb-2" src={Logo} alt="Brainloggers" width="50" height="50"/> Brainloggers
                        <small class="d-block mb-3 text-muted">© 2016–2021</small>
                    </div>
                    <div class="col-6 col-md col-sm-12">
                        <h5>Features</h5>
                        <ul class="list-unstyled text-small">
                            <Link to="/" className="link-main text-decoration-none"></Link>
                        <li class="mb-1"><Link to="/" className="link-main text-decoration-none">Cool Stuff</Link></li>
                        <li class="mb-1"><Link to="/" className="link-main text-decoration-none">Random Features</Link></li>
                        <li class="mb-1"><Link to="/" className="link-main text-decoration-none">Team Collab</Link></li>
                        <li class="mb-1"><Link to="/" className="link-main text-decoration-none">Developers</Link></li>
                        <li class="mb-1"><Link to="/" className="link-main text-decoration-none">Another One</Link></li>
                        <li class="mb-1"><Link to="/" className="link-main text-decoration-none">DJ Khalid</Link></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md col-sm-12">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                        <li class="mb-1"><Link to="/" className="link-main text-decoration-none">Resource</Link></li>
                        <li class="mb-1"><Link to="/" className="link-main text-decoration-none">Name</Link></li>
                        <li class="mb-1"><Link to="/" className="link-main text-decoration-none">Another Resource</Link></li>
                        <li class="mb-1"><Link to="/" className="link-main text-decoration-none">Final Resource</Link></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md col-sm-12">
                        <h5>About</h5>
                        <ul class="list-unstyled text-small">
                        <li class="mb-1"><Link to="/" className="link-main text-decoration-none">Team</Link></li>
                        <li class="mb-1"><Link to="/" className="link-main text-decoration-none">Locations</Link></li>
                        <li class="mb-1"><Link to="/" className="link-main text-decoration-none">Privacy</Link></li>
                        <li class="mb-1"><Link to="/" className="link-main text-decoration-none">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
        
    )
}

export default footer
