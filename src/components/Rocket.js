import React from 'react'
import {Link} from 'gatsby'

import FullRocket from '../images/base/rocket/full-rocket.svg'
import IMAGE from '../images/Featurette/duck.jpg'

const url = typeof window !== 'undefined' ? window.location.pathname : '';
const slug = url.substring(1, url.length-1);

export const HeroImage = () => {
    if (slug === "about"){
        return <img src={FullRocket}></img>
    }else if (slug === ""){
        return
    }
    else{
        return <img src={IMAGE}></img>
    }
}

const RocketComponent = () => {
    return (
        <div className="position-relative">
            <p>{slug}</p>
            <HeroImage />
        </div>
    )
}

export default RocketComponent
