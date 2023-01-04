import React from 'react';

const Description = () => {
    return (
        <div className='container mt-5'>
            <div className='career-description-container'>

                {/****************************  social-media-links-section *******************************/}
                <div className='career-social-links'>

                    <a className='career-description-links' href="https://www.linkedin.com/shareArticle?url=https://www.capgemini.com/services/" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.ibb.co/7X0Sndd/linkedin-1.png" alt="" />
                    </a>

                    <a className='career-description-links' href="https://twitter.com/intent/tweet?url=https://www.capgemini.com/services/" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.ibb.co/87CNgDL/twitter-1.png" alt="" />
                    </a>

                    <a className='career-description-links' href="https://www.facebook.com/sharer/sharer.php?u=https://www.capgemini.com/services/" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.ibb.co/YjccQp7/facebook-app-symbol.png" alt="" />
                    </a>

                </div>
                {/****************************  desvription-explained-section *******************************/}
                <div>

                    <p className='career-description-title'>Are you ready to take on the challenge?</p>
                    <p className='career-description-para'>Helping our clients grow while building a more sustainable, more inclusive future is a tough ask.  But when you join Capgemini, you join a thriving company and become part of a diverse global collective of free-thinkers, entrepreneurs and industry experts who are all driven to use technology to reimagine what’s possible.    </p>
                    <p className='career-description-para'>Together, we work to transform the world’s leading businesses while sharing knowledge and pushing ourselves to do better. It’s how we shape great careers and give innovation that human touch the world needs.</p>
                    <p className='career-description-headline' >Capgemini. Get the future you want.</p>
                </div>

            </div>

            <section className="video-container">
            <div className="text-embed"><h4>Unlock the value of technology</h4></div>
                   <div className='boxed'>
                    <div className="embed_placehold" data-url="https://www.youtube.com/embed/j84r7K_Lh3o" data-height="400" data-width="711.104"><a style={{textDecoration : "none"}} href="https://www.youtube.com/embed/j84r7K_Lh3o" >Please allow statistical cookies to see this YouTube embed  </a></div>
                    </div>
                    
            </section>

            <div className='head-explore'><h1>Explore Capgemini</h1></div>
        </div>
    );
};

export default Description;