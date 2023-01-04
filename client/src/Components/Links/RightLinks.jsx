import React from 'react';
import CustomLink from './CustomLink';

const RightLinks = () => {
    return (

        <ul className='col-lg-6 col-md-12 my-0'>
            <li className="links-list"><CustomLink className='links' to='/en/'>Investors</CustomLink></li>
            <li className="links-list"><CustomLink className='links' to='/terms-of-use/'>Terms of use</CustomLink></li>
            <li className="links-list"><CustomLink className='links' to='/accessibility/'>Accessibility</CustomLink></li>
            <li className="links-list"><CustomLink className='links' to='/privacy-notice/'>Privacy notice</CustomLink></li>
            <li className="links-list"><CustomLink className='links' to='/security-vulnerability-notification/'>Security vulnerability notification</CustomLink></li>
            <li className="links-list"><CustomLink className='links' to='/cookie-settings/'>Cookie settings</CustomLink></li>
            <li className="links-list"><CustomLink className='links' to='/cookie-policy/'>Cookie policy</CustomLink></li>
        </ul>

    );
};

export default RightLinks;