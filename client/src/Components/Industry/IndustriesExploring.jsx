import React from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';

const IndustriesExploring = () => {
    const elements = [
        {
            id: "1",
            name: "Aerospace and defense",
            img: "https://www.capgemini.com/wp-content/uploads/2021/09/Capgemini_Client-stories_HELPING-A-GLOBAL-AEROSPACE-MANUFACTURER-TAKE-OFF.jpg?w=500&quality=90",
            link: "/industries/aerospace-and-defense/"
        },
        {
            id: "2",
            name: "Automotive",
            img: "https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/Automotive-main-landing-page-banner_2880x1800px.jpg?w=500&quality=90",
            link: "/industries/automotive/"
        },
        {
            id: "3",
            name: "Banking and capital markets",
            img: "https://www.capgemini.com/wp-content/uploads/2021/08/Capgemini_Industries_Capital-Markets.jpg?w=500&quality=90",
            link: "/industries/banking-and-capital-markets"
        },
        {
            id: "4",
            name: "Consumer products",
            img: "https://www.capgemini.com/wp-content/uploads/2021/08/Capgemini_Industries_Consumer-Products.jpg?w=500&quality=90",
            link: "/industries/consumer-products/"
        },
        {
            id: "5",
            name: "Energy and utilities",
            img: "https://www.capgemini.com/wp-content/uploads/2021/08/Capgemini_Industries_Energy-and-Utilities.jpg?w=500&quality=90",
            link: "/industries/energy-and-utilities/"
        },
        {
            id: "6",
            name: "Healthcare",
            img: "https://www.capgemini.com/wp-content/uploads/2021/04/Healthcare-thumbnail.jpg?w=500&quality=90",
            link: "/industries/healthcare/"
        },
        {
            id: "7",
            name: "High-tech",
            img: "https://www.capgemini.com/wp-content/uploads/2021/09/Capgemini_Tech-Partners_DASSAULT-SYSTEMES.jpg?w=500&quality=90",
            link: "/industries/high-tech/"
        },
        {
            id: "8",
            name: "Hospitality and travel",
            img: "https://www.capgemini.com/wp-content/uploads/2021/09/Capgemini_Industries_Hospitality-Travel.jpg?w=500&quality=90",
            link: "/industries/hospitality-and-travel/"
        },
        {
            id: "9",
            name: "Insurance",
            img: "https://www.capgemini.com/wp-content/uploads/2021/08/Capgemini_Industries-Insurance-e1643992280951.jpg?w=500&quality=90",
            link: "/industries/insurance/"
        },
        {
            id: "10",
            name: "Life sciences",
            img: "https://www.capgemini.com/wp-content/uploads/2021/04/LifeSciences_Thumbnail.jpg?w=500&quality=90",
            link: "/industries/life-sciences/"
        },
        {
            id: "11",
            name: "Manufacturing",
            img: "https://www.capgemini.com/wp-content/uploads/2021/03/Capgemini-Industries-hero-banner.jpg?w=500&quality=90",
            link: "/industries/manufacturing/"
        },
        {
            id: "12",
            name: "Media and entertainment",
            img: "https://www.capgemini.com/wp-content/uploads/2021/08/Capgemini_Industries-Media-and-Entertainment.jpg?w=500&quality=90",
            link: "/industries/media-and-entertainment/"
        },
        {
            id: "13",
            name: "Public sector",
            img: "https://www.capgemini.com/wp-content/uploads/2021/10/Capgemini_Industries_Public-Sector-1.jpg?w=500&quality=90",
            link: "/industries/public-sector/"
        },
        {
            id: "14",
            name: "Retail",
            img: "https://www.capgemini.com/wp-content/uploads/2021/10/Capgemini_Industries_Retail.jpg?w=500&quality=90",
            link: "/industries/retail/"
        },
        {
            id: "15",
            name: "Telecoms",
            img: "https://www.capgemini.com/wp-content/uploads/2021/08/Capgemini_Industries_Telecoms.jpg?w=500&quality=90",
            link: "/industries/telecommunications/"
        },
    ]

    return (
        <div className='exploring-section-container container'>
            <h1>Learn more by industry</h1>
            <div className='exploring-content-container mb-5'>
                {
                    elements.map(element =>

                        <Link key={element.id} to={element.link} style={{ "textDecoration": "none" }} >
                            <div className='exploring-content'>
                                <div className='exploring-img-container'>
                                    <img className='exploring-img' src={element.img} alt="" />
                                </div>
                                <div className='exploring-inner-box'>
                                    <h4 className='inner-box-headline'>{element.name}</h4>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default IndustriesExploring;