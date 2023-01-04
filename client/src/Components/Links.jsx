import React from 'react';
import "./Links/css/style.css";
import RightLinks from './Links/RightLinks';
import Brands from './Links/Brands';
import LeftLinks from './Links/LeftLinks';


const Links = () => {
    return (
        <div className='bg'>
            <div className='container py-4'>

                {/** ******************* Main Logo ******************** **/}
                <a href="/"><img className='main-logo' src="https://prod.ucwe.capgemini.com/wp-content/themes/capgemini2020/assets/images/footer-logo.svg" alt="" /></a>

                {/** ******************* Main Layout ******************** **/}
                <div className='row responsive-layout'>

                    {/** ******************* Brands Section ******************** **/}
                    <hr className='hr-first' />
                    <Brands />
                    <hr className='hr-second' />

                    {/** ******************* Links Section ******************** **/}
                    <div className='col-md-8 mb-4 '>
                        <div className='row'>
                            <LeftLinks />
                            <RightLinks />
                        </div>
                    </div>
                </div>
                <hr className='w-100 hr-third' />
            </div>
        </div>
    );
};

export default Links;
