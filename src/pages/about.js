import React from 'react'

import Layout from '../layouts/Main'
import Rocket from '../components/Rocket'

const About = () => {
    return (
        <Layout>
            This is the About Page
            <div className="ROCKET d-flex align-items-center justify-content-center bg-main-dark">
                <Rocket />
            </div>
            
        </Layout>
    )
}

export default About