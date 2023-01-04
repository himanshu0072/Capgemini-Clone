import React from 'react';
import "./careerStyles/careerStyles.css"
import Description from './Description';
import Explore from './Explore';
import Learn from './Learn';


const Careers = () => {
    return (
        <div>
        <div className='career-banner-container'>
            <div className='career-banner-elements'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="career-banner-card">
                                
                            <h3>FIND YOUR FUTURE</h3>
                          
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="career-banner-svg-img"></div>
            
        </div>
        <Description/>
        <Explore/>
        <Learn/>
        </div>
    );
};

export default Careers;