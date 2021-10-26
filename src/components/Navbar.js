import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

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
          submenu {
            link
            name
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
                                <span></span>
                                )
                            }
                            else if( val.submenu && val.submenu.length > 0 ){
                                return (
                                    <li className="nav-item dropdown" key={index}>
                                        <Link to={val.link} className="btn rounded-10 nav-btn nav-link dropdown-toggle" activeClassName="active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{val.name}</Link>
                                        <ul className="dropdown-menu" aria-labelledby= "navbarDropdown" data-bs-popper="none">
                                            {val.submenu.map((sublink, index)=> {
                                                return <li key={index}><Link to={sublink.link} className="dropdown-item">{sublink.name}</Link></li>
                                            })}
                                        </ul>
                                    </li>
                                )
                            }
                            else{
                                return <li className="nav-item" key={index}>
                                    <Link to={val.link} className= "btn rounded-10 nav-btn nav-link" activeClassName="active" >{val.name}</Link>
                                </li>
                            }
                        })}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2 rounded-10" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-main-dark rounded-10" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
