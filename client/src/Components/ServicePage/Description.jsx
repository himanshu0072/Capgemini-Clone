import React from 'react';
import './css/style.css'

const Description = () => {
    return (
        <div className='container mt-5'>
            <div className='service-description-container'>

                {/****************************  social-media-links-section *******************************/}
                <div className='service-social-links'>

                    <a className='service-description-links' href="https://www.linkedin.com/shareArticle?url=https://www.capgemini.com/services/" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.ibb.co/7X0Sndd/linkedin-1.png" alt="" />
                    </a>


                    <a className='service-description-links' href="https://twitter.com/intent/tweet?url=https://www.capgemini.com/services/" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.ibb.co/87CNgDL/twitter-1.png" alt="" />
                    </a>

                    <a className='service-description-links' href="https://www.facebook.com/sharer/sharer.php?u=https://www.capgemini.com/services/" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.ibb.co/YjccQp7/facebook-app-symbol.png" alt="" />
                    </a>

                </div>
                {/****************************  desvription-explained-section *******************************/}
                <div>

                    <p className='service-description-title'>A constantly evolving portfolio to meet the ever-changing needs of our clients.</p>
                    <p className='service-description-para'>We focus on three ‘playing fields’ dedicated to the digitalization of key management areas at the core of businesses: Customer First, Intelligent Industry, and Enterprise Management. This is  underpinned by two technological pillars essential to all forms of digital transformation – data and cloud, without losing sight of the fundamentals of cybersecurity and sustainable development. </p>
                </div>
            </div>
        </div>
    );
};

export default Description;