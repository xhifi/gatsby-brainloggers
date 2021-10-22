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


const Navtest = () => {
    const data = useStaticQuery(SiteQuery)
    const navlinks = data.site.siteMetadata.menuLinks
    console.log(navlinks.submenu);
    return (
        <div>
            {/* {navlinks.map( (link, index) => {
                <div>
                    <li key={index}>
                        <Link to = {link.link}>{link.name}</Link>
                    </li>
                    <p>{link.name}</p>
                </div>
            })} */}

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img src={Logo} width="50px" className="me-2" alt={data.site.siteMetadata.title} />{data.site.siteMetadata.title}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navlinks.map((val, index) => {
                            if(val.link === "/"){
                                return (
                                <li className="nav-item" key={index}>
                                    <Link to={val.link} className="nav-link">{val.name}</Link>
                                </li>
                                )
                            }else if( val.submenu && val.submenu.length > 0 ){console.log(val.submenu);
                                return (
                                    <li className="nav-item dropdown" key={index}>
                                        <Link to={val.link} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{val.name}</Link>
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
                                    <Link to={val.link} className= "nav-link">{val.name}</Link>
                                </li>
                            }
                        })}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                <section>

                </section>
                </nav>




        </div>
    )
}

export default Navtest
