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
                        <li class="mb-1"><a class="link-main text-decoration-none" href="#">Cool stuff</a></li>
                        <li class="mb-1"><a class="link-main text-decoration-none" href="#">Random feature</a></li>
                        <li class="mb-1"><a class="link-main text-decoration-none" href="#">Team feature</a></li>
                        <li class="mb-1"><a class="link-main text-decoration-none" href="#">Stuff for developers</a></li>
                        <li class="mb-1"><a class="link-main text-decoration-none" href="#">Another one</a></li>
                        <li class="mb-1"><a class="link-main text-decoration-none" href="#">Last time</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md col-sm-12">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                        <li class="mb-1"><a class="link-main text-decoration-none" href="#">Resource</a></li>
                        <li class="mb-1"><a class="link-main text-decoration-none" href="#">Resource name</a></li>
                        <li class="mb-1"><a class="link-main text-decoration-none" href="#">Another resource</a></li>
                        <li class="mb-1"><a class="link-main text-decoration-none" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md col-sm-12">
                        <h5>About</h5>
                        <ul class="list-unstyled text-small">
                        <li class="mb-1"><a class="link-main text-decoration-none" href="#">Team</a></li>
                        <li class="mb-1"><a class="link-main text-decoration-none" href="#">Locations</a></li>
                        <li class="mb-1"><a class="link-main text-decoration-none" href="#">Privacy</a></li>
                        <li class="mb-1"><a class="link-main text-decoration-none" href="#">Terms</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
        
    )
}

export default footer
