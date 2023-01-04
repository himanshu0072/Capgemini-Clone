import React from 'react';
import CustomLink from './CustomLink';

const LeftLinks = () => {
    return (

        <ul className='col-lg-6 col-md-12 my-0'>
            <li className="links-list"><CustomLink className='links' to='/insights/'>Insights</CustomLink></li>
            <li className="links-list"><CustomLink className='links' to='/industries/'>Industries</CustomLink></li>
            <li className="links-list"><CustomLink className='links' to='/services/'>Services</CustomLink></li>
            <li className="links-list"><CustomLink className='links' to='/careers/'>Careers</CustomLink></li>
            <li className="links-list"><CustomLink className='links' to='/news/'>News</CustomLink></li>
            <li className="links-list"><CustomLink className='links' to='/about/'>About us</CustomLink></li>
            <li className="links-list"><CustomLink className='links' to='/contactus/'>Contact us</CustomLink></li>
        </ul>

    );
};

export default LeftLinks;