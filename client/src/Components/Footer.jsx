import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import './Footer/css/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='text-center text-dark p-3 footer__copyright' style={{ backgroundColor: '#dcdcdc' }}>
        <>2022 CAPGIMINI &copy; All Rights Reserved.</>
        <div className='footer__socialmds'>
          <a href="https://linkedin.com/" rel='noreferrer noopener'>
            <FaLinkedin />
          </a>
          <a href="https://facebook.com/" rel='noreferrer noopener'>
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/" rel='noreferrer noopener'>
            <AiOutlineTwitter />
          </a>
          <a href="https://instagram.com/" rel='noreferrer noopener'>
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
