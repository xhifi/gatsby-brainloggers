import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import data from '../data/featurette.json'

const content = data.content;

export const FeaturePost = () => {
    return (
        
        content.map((val, index) => {
            const image = JSON.stringify(val.image);
            console.log(image);
            
            return <div key={index}>
                
                <p>{val.item}</p>
                    <StaticImage
                        src={image}
                        width={500}
                        height={500}
                        placeholder="tracedSVG"
                        layout="constrained"
                        alt="Ugly little piece of shit"
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mb-5 mb-lg-0 rounded-10 shadow-lg"
                    />
            </div>
        })
    )
}


const Featurette = () => {
    return (
        <div className="container py-5 featurette-section">
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                </div>
                <div className="col-md-5">
                    <StaticImage
                        src="../images/Featurette/duck.jpg"
                        width={500}
                        height={500}
                        placeholder="tracedSVG"
                        layout="constrained"
                        alt="Ugly little piece of shit"
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mb-5 mb-lg-0 rounded-10 shadow-lg"
                    />
                </div>
            </div>
            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                </div>
                <div className="col-md-5">
                    <StaticImage
                        src="../images/Featurette/square.jpg"
                        width={500}
                        height={500}
                        placeholder="tracedSVG"
                        layout="constrained"
                        alt="Shitty Window"
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mb-5 mb-lg-0 rounded-10 shadow-lg"
                    />
                </div>
            </div>
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                </div>
                <div className="col-md-5">
                    <StaticImage
                        src="../images/Featurette/prism.jpg"
                        width={500}
                        height={500}
                        placeholder="tracedSVG"
                        layout="constrained"
                        alt="Shitty shitshow"
                        className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mb-5 mb-lg-0 rounded-10 shadow-lg featurette-image"
                    />
                </div>
            </div>
        </div>
    )
}

export default Featurette
