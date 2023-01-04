import React from 'react';
import "./css/style.css"


const Banner = () => {
    return (
        <div className='service-banner-container'>
            <div className='service-banner-elements'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="service-banner-card">
                                <h1>SERVICES</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-banner-svg-img"></div>
        </div>
    );
};

export default Banner;