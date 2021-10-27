import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import {home, info, call, rocket, megaphone, blog, globe, colorpalette, consultancy, servers } from './imports'
import Logo from '../images/logo.svg'

const SiteQuery = graphql`
  {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
        menuLinks {
          name
          link
          icon
          submenu {
            link
            name
            icon
          }
        }
      }
    }
  }
`

const Navbar = () => {
    const data = useStaticQuery(SiteQuery)
    const navlinks = data.site.siteMetadata.menuLinks
    
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand d-flex align-items-center me-3">
                        <img src={Logo} width="50px" className="me-2" alt={data.site.siteMetadata.title} />{data.site.siteMetadata.title}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navlinks.map((val, index) => {
                            if(val.link === "/contact"){
                                return (
                                <span key={index}></span>
                                )
                            }
                            else if( val.submenu && val.submenu.length > 0 ){
                                return (
                                    <li className="nav-item dropdown" key={index}>
                                        <Link to={val.link} className="btn rounded-10 nav-btn nav-link dropdown-toggle" activeClassName="active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={rocket} width="25px" height="25px" alt={rocket} className="me-2" />{val.name}</Link>
                                        <ul className="dropdown-menu" aria-labelledby= "navbarDropdown" data-bs-popper="none">
                                            {val.submenu.map((sublink, index)=> {
                                                if (sublink.link === "/services/web-design"){
                                                    return <li key={index}><Link to={sublink.link} className="dropdown-item"><img src={globe} width="25px" height="25px" alt={globe} className="me-2" />{sublink.name}</Link></li>
                                                }else if (sublink.link === "/services/graphic-design"){
                                                    return <li key={index}><Link to={sublink.link} className="dropdown-item"><img src={colorpalette} width="25px" height="25px" alt={colorpalette} className="me-2" />{sublink.name}</Link></li>
                                                }else if (sublink.link === "/services/information-technology"){
                                                    return <li key={index}><Link to={sublink.link} className="dropdown-item"><img src={consultancy} width="25px" height="25px" alt={consultancy} className="me-2" />{sublink.name}</Link></li>
                                                }else if (sublink.link === "/services/it-operations"){
                                                    return <li key={index}><Link to={sublink.link} className="dropdown-item"><img src={servers} width="25px" height="25px" alt={servers} className="me-2" />{sublink.name}</Link></li>
                                                }else if (sublink.link === "/services/digital-marketing"){
                                                    return <li key={index}><Link to={sublink.link} className="dropdown-item"><img src={megaphone} width="25px" height="25px" alt={megaphone} className="me-2" />{sublink.name}</Link></li>
                                                }else{
                                                    return <li key={index}><Link to={sublink.link} className="dropdown-item"><img src={megaphone} width="25px" height="25px" alt={megaphone} className="me-2" />{sublink.name}</Link></li>
                                                }
                                                
                                            })}
                                        </ul>
                                    </li>
                                )
                            }
                            else{
                                if (val.link === "/"){
                                    return <li className="nav-item" key={val.link}>
                                        <Link to={val.link} className= "btn rounded-10 nav-btn nav-link" activeClassName="active" ><img src={home} alt={home} width="25px" height="25px" className="me-2"/>{val.name}</Link>
                                    </li>
                                }else if(val.link === "/about"){
                                    return <li className="nav-item" key={val.link}>
                                        <Link to={val.link} className= "btn rounded-10 nav-btn nav-link" activeClassName="active" ><img src={info} alt={info} width="25px" height="25px" className="me-2"/>{val.name}</Link>
                                    </li>
                                }
                                else if(val.link === "/blog/"){
                                    return <li className="nav-item" key={val.link}>
                                        <Link to={val.link} className= "btn rounded-10 nav-btn nav-link" activeClassName="active" ><img src={blog} alt={blog} width="25px" height="25px" className="me-2"/>{val.name}</Link>
                                    </li>
                                }else{
                                    return <li className="nav-item" key={val.link}>
                                        <Link to={val.link} className= "btn rounded-10 nav-btn nav-link" activeClassName="active" >{val.name}</Link>
                                    </li>
                                }
                            }
                        })}
                    </ul>
                    <hr className="d-lg-none" />
                    <div className="d-flex justify-content-center">
                        {/* <input className="form-control me-2 rounded-10" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-main-dark rounded-10" type="submit">Search</button> */}
                        
                        <Link className="btn btn-outline-main-light rounded-10 nav-item" to="/contact"><img src={call} alt={call} width="25px" height="25px" className="me-2"/>Contact Us</Link>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
