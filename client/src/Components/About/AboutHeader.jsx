import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/About_Header.css'
const About_Header = () => {
    return (
        <nav className="about_header_height navbar navbar-expand-lg bg-light navbar-light position-absolute top-0 start-50 translate-middle" style={{ width: '90%'}}>
            <div className="container-fluid">
                <div className='about_home_navbar'>
                    <Link to="/" className='about_home_color'>Home</Link>
                    <div></div>&nbsp;&nbsp;
                    <div>/</div>
                </div>
                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <div className="dropdown">
                                <div className="nav-link dropdown-toggle dropbtn" style={{fontSize: '13px', cursor: 'pointer', fontWeight: '500'}}>About Us</div>
                                <div className="dropdown-content">
                                    <Link to="#">Link 1</Link>
                                    <Link to="#">Link 2</Link>
                                    <Link to="#">Link 3</Link>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default About_Header