import React from 'react';
import { Link } from 'react-router-dom';

const Brands = () => {
    return (
        <ul className='brands col-md-4 '>
            <p className='brands-headline '>Our brands :</p>
            <Link to="/about-us/who-we-are/our-brands/capgemini-engineering/"><img className='mb-2 mb-lg-3 mt-1 mt-lg-2' src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/Logo_Capgemini_Engineering.svg" alt="" /><br /></Link>
            <Link to="/about-us/who-we-are/our-brands/capgemini-invent/"><img className='my-lg-2 my-1' src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/Logo_Capgemini_Invent.svg" alt="" /><br /></Link>
            <a target="_blank" rel="noreferrer" href="https://www.capgemini.com/about-us/who-we-are/our-brands/sogeti/"><img className='mt-lg-3 mt-2' src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/Logo_Sogeti.svg" alt="" /></a>
        </ul>
    );
};

export default Brands;