import React, { useState } from 'react'
import "./Navbar/css/navbar.css"

import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'

import LanguageIcon from '@mui/icons-material/Language';

function Navbar() {
    const [open, setOpen] = useState(false);
    return (

        <header id='header_main'>

            <div className='navbar container'>
                <div className="headertop">

                    <NavLink to="/investors" className="navbar-links">Investors</NavLink>
                    <NavLink to="/contactus" className="navbar-links">Contact us</NavLink>
                    <NavLink to="/language" className="navbar-links">Global | EN <LanguageIcon className='lang'></LanguageIcon> </NavLink>

                </div>

                <div className="headerbottom container">
                    <div className='menu-icon' onClick={() => setOpen(!open)} >
                        {
                            open ?
                                <FaTimes className=''></FaTimes>
                                :
                                <FaBars className=''></FaBars>
                        }
                    </div>
                    {
                        open &&
                        <div className='hidden-nav-container'>
                            <ul className={`${open ? 'open-nav' : 'close-nav'}`}>
                                <NavLink to="/insights" className="nav-underlines">insights</NavLink>
                                <NavLink to="industries" className="nav-underlines"  >Industries</NavLink>
                                <NavLink to="/services" className="nav-underlines">Services</NavLink>
                                <NavLink to="/career" className="nav-underlines">Career</NavLink>
                                <NavLink to="/news" className="nav-underlines">News</NavLink>
                                <NavLink to="/about" className="nav-underlines">About-Us</NavLink>
                                <NavLink to="/investors" className="nav-underlines">Investors</NavLink>
                                <NavLink to="/Contactus" className="nav-underlines">Contact Us</NavLink>
                                <NavLink to="/language" className="nav-underlines">Global | EN  </NavLink>
                            </ul>
                        </div>
                    }
                    <div>
                        <Link to="/"><img
                            src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
                            alt="Capgemini"
                            data-blue-logo-src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo.svg"
                            data-white-logo-src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/logo-white.svg"></img>
                        </Link>
                    </div>
                    <ul className="dropdown" id='navbar_items'>
                        <NavLink to="/insights" className="navbar-links">insights</NavLink>
                        <NavLink to="industries" className="navbar-links"  >Industries</NavLink>
                        <NavLink to="/services" className="navbar-links">Services</NavLink>
                        <NavLink to="/career" className="navbar-links">Career</NavLink>
                        <NavLink to="/news" className="navbar-links">News</NavLink>
                        <NavLink to="/about" className="navbar-links">About-Us</NavLink>


                    </ul>
                    <div></div>
                    {/* <div className="search-container">
                        <input type="search" placeholder="search " name="" id="search-box"></input>
                        <i className="fa fa-search"></i>
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default Navbar



