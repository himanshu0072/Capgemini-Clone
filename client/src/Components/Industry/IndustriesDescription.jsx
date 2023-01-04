import React from 'react';
import './styles/style.css'

const IndustriesDescription = () => {
    return (
        <div className='container mt-5'>
            <div className='industry-description-container'>

                {/****************************  social-media-links-section *******************************/}
                <div className='industry-social-links'>

                    <a className='industry-description-links' href="https://www.linkedin.com/shareArticle?url=https://www.capgemini.com/services/" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.ibb.co/7X0Sndd/linkedin-1.png" alt="" />
                    </a>


                    <a className='industry-description-links' href="https://twitter.com/intent/tweet?url=https://www.capgemini.com/services/" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.ibb.co/87CNgDL/twitter-1.png" alt="" />
                    </a>

                    <a className='industry-description-links' href="https://www.facebook.com/sharer/sharer.php?u=https://www.capgemini.com/services/" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.ibb.co/YjccQp7/facebook-app-symbol.png" alt="" />
                    </a>

                </div>
                {/****************************  description-explained-section *******************************/}
                <div>

                    <p className='industry-description-title'>Every industry is different. Knowing the unique challenges that each industry faces is critical to business success.</p>
                    <p className='industry-description-para'>You could work with service providers who have a general understanding of business and technology – or you can choose a partner with intimate knowledge of your industry. Capgemini has first-hand experience of partnering with clients across industries to help them get the future they want for their business.</p>
                </div>
            </div>
        </div>
    );
};

export default IndustriesDescription;