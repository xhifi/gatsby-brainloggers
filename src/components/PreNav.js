import React from 'react'
import { BsFillTelephoneFill, BsFillEnvelopeFill, BsFillPhoneFill, BsGlobe, BsFacebook, BsInstagram, BsGoogle, BsGithub  } from 'react-icons/bs'
const PreNav = () => {
    return (
        <div className="py-0 bg-main-dark shadow-2 font-sm d-none d-lg-block">
            <div className="container-fluid d-flex flex-wrap">
            <ul className="nav me-auto ">
                <li className="nav-item border-end starting-list"><a href="tel: +923178114444" className="nav-link link-dark px-2 text-main" aria-current="page"><BsFillTelephoneFill className="me-2 mb-1" />+923178114444</a></li>
                <li className="nav-item border-end starting-list"><a href="tel: +923082448888" className="nav-link link-dark px-2 text-main"><BsFillPhoneFill className="me-2 mb-1" />+923082448888</a></li>
                <li className="nav-item border-end starting-list"><a href="mailto: info@brainloggers.co.uk" className="nav-link link-dark px-2 text-main"><BsFillEnvelopeFill className="me-2 mb-1" />info@brainloggers.co.uk</a></li>
                <li className="nav-item border-end starting-list"><a href="/" className="nav-link link-dark px-2 text-main"><BsGlobe className="me-2 mb-1" />2 - Sanders Parade, Greyhound Lane, Streatham London, SW16 5NL</a></li>
            </ul>
            <ul className="nav">
                <li className="nav-item border-start ending-list"><a href="/" className="nav-link link-dark nav-link-social px-2 text-main icon-save" aria-label="Save"><BsFacebook className="mx-1" /></a></li>
                <li className="nav-item border-start ending-list"><a href="/" className="nav-link link-dark nav-link-social px-2 text-main icon-save" aria-label="Save"><BsInstagram className="mx-1" /></a></li>
                <li className="nav-item border-start ending-list"><a href="/" className="nav-link link-dark nav-link-social px-2 text-main icon-save" aria-label="Save"><BsGoogle className="mx-1" /></a></li>
                <li className="nav-item border-start ending-list"><a href="/" className="nav-link link-dark nav-link-social px-2 text-main icon-save" aria-label="Save"><BsGithub className="mx-1" /></a></li>
            </ul>
            </div>
        </div>
    )
}

export default PreNav
