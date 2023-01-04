
import './About/CSS/About.css'

import Carousel from 'react-bootstrap/Carousel';

import AboutHeader from './About/AboutHeader';

import { Link } from 'react-router-dom';

const About = () => {
    return (
        <main className='about_main'>
            {/* 1st component */}
            <div className='about_img_container'>
                {/* <AboutHeader /> */}
                <img style={{ position: 'relative', zIndex: '-2' }} src="https://www.capgemini.com/wp-content/uploads/2021/04/Capgemini-about-us-hero-banner.jpg?w=1440&quality=90" className="d-block w-100" alt="..." />
                <div style={{ zIndex: '-1' }} className='about_img_overlay'>
                    <h1>About Us</h1>
                </div>
            </div>



            {/* 2nd component */}
            <div className="about_text_cm">
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-10">
                        <h1 style={{ fontWeight: '450' }} className="featurette-heading">Capgemini partners with companies to transform and manage their business by unlocking the value of technology. </h1>
                        <small className="lead">As a leading strategic partner to companies around the world, we have leveraged technology to enable business transformation for more than 50 years. We address the entire breadth of business needs, from strategy and design to managing operations. To do this, we draw on deep industry expertise and a command of the fast-evolving fields of cloud, data artificial intelligence, connectivity, software, digital engineering, and platforms.</small>
                    </div>
                </div>
            </div>



            {/* 3rd component */}
            <div style={{ overflow: 'hidden' }} className='about_cookie_container'>
                <div className="about_Intro">
                    <p><Link to='#cookie-consent' style={{ textDecoration: 'none' }}><span>Please allow statistical cookies to see this YouTube embed</span></Link></p>
                    <h3>An introduction to Capgemini</h3>
                </div>
            </div>



            {/* 4th Component */}
            <div className='about_statistic'>
                <div>
                    <div className='about_statistic_ele'>
                        <div>€18B<p className="statistic_blue_lie"></p></div>
                        <span>revenue</span>
                    </div>
                </div>
                <div>
                    <div className='about_statistic_ele'>
                        <div>340K+<p className="statistic_blue_lie"></p></div>
                        <span>people</span>
                    </div>
                </div>
                <div>
                    <div className='about_statistic_ele'>
                        <div>50+<p className="statistic_blue_lie"></p></div>
                        <span>countries</span>
                    </div>
                </div>
            </div>



            {/* 5th component */}
            <Carousel>
                <Carousel.Item className=' carousel_images' style={{ height: '80vh' }}>
                    <img
                        style={{ objectFit: 'cover' }}
                        className="d-bloc w-100 h-100"
                        src="https://www.capgemini.com/wp-content/uploads/2021/11/Capgemini_About-us_Forbes-Global-2000-list.jpg?h=1440&amp;quality=90"
                        alt="First slide"
                    />
                    <Carousel.Caption className='about_crousel'>
                        <h3>Partnering with today’s leaders</h3>
                        <p>85% of the 200 largest public companies on the Forbes Global 2000 list are our clients.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel_images' style={{ height: '80vh' }}>
                    <img
                        style={{ objectFit: 'cover' }}
                        className="d-block w-100 h-100"
                        src="https://www.capgemini.com/wp-content/uploads/2021/10/Capgemini_Services_Sustainability-net-zero_Targets.jpg?w=1440&amp;quality=90"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='about_crousel'>
                        <h3>One of the world’s most ethical companies</h3>
                        <p>For ten consecutive years, we have been named one of the World’s Most Ethical Companies by the Ethisphere Institute.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel_images' style={{ height: '80vh' }}>
                    <img
                        style={{ objectFit: 'cover' }}
                        className="d-block w-100 h-100"
                        src="https://www.capgemini.com/wp-content/uploads/2021/11/Capgemini_Research-institute-alt.jpg?w=1440&amp;quality=90"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='about_crousel'>
                        <h3>Forward-looking thought leadership</h3>
                        <p>
                            Our Capgemini Research Institute was ranked number one for the sixth consecutive time for the quality of its thought leadership by independent professional services research firm Source Global Research.    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>





            {/* 6th Component */}
            <div className="about_row">

                <div className='about_column' style={{ margin: 'auto' }}>
                    <Link to="who-we-are/" style={{ textDecoration: 'none' }}>
                        <div className="hover">
                            <img src="https://www.capgemini.com/wp-content/uploads/2021/06/Capgemini_Who-we-are.jpg?w=1000&quality=90" alt="" />
                            <p><span>Who we are</span></p>
                        </div>
                    </Link>
                    <Link to="csr/" style={{ textDecoration: 'none' }}>
                        <div className='hover' style={{ padding: '100px 50px', backgroundColor: '#2b0a3d', marginTop: '10vh', marginBottom: '10vh', color: 'white' }}><span>CSR</span></div>
                    </Link>
                </div>


                <div style={{ marginTop: '-7vh 7vh auto auto' }} className="about_column">
                    <Link to="management-and-governance/" style={{ textDecoration: 'none' }}>
                        <div className='hover' style={{ padding: '100px 50px', backgroundColor: '#15a3f0', color: 'white' }}><span>Management & governance</span></div>
                    </Link>
                    <Link to="technology-partners/" style={{ textDecoration: 'none' }}>
                        <div style={{ marginTop: '10vh' }} className='hover'>
                            <img src="https://www.capgemini.com/wp-content/uploads/2021/06/Capgemini_Partnerships.jpg?w=1000&quality=90" alt="" />
                            <p><span>Technology partners</span></p>
                        </div>
                    </Link>
                </div>


                <div className='about_column' style={{ margin: 'auto' }}>
                    <Link to="esg/" style={{ textDecoration: 'none' }}>
                        <div className="hover">
                            <img src="https://www.capgemini.com/wp-content/uploads/2022/03/Capgemini_our-approach-to-ESG.jpg?w=1000&quality=90" alt="" />
                            <p><span>ESG</span></p>
                        </div>
                    </Link>
                    <Link to="locations/" style={{ textDecoration: 'none' }}>
                        <div className='hover' style={{ padding: '100px 50px', backgroundColor: '#007bbd', marginTop: '10vh', marginBottom: '10vh', color: 'white' }}><span>Locations</span></div>
                    </Link>
                </div>
            </div>


        </main>

    )
}

export default About
