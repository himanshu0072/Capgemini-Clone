import React from 'react';
import "./styles/style.css"


const IndustriesBanner = () => {
    return (
        <div className='industry-banner-container'>
            <div className='industry-banner-elements'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="industry-banner-card">
                                <h1>INDUSTRIES</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="industry-banner-svg-img"></div>
        </div>
    );
};

export default IndustriesBanner;