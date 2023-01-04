import React from 'react';
import { Link } from 'react-router-dom';
import './css/style.css';

const Exploring = () => {
    const elements = [
        {
            id: "1",
            name: "Cloud",
            img: "https://www.capgemini.com/wp-content/uploads/2021/09/Capgemini_Services_cloud.jpg?w=500&quality=90",
            link: "/services/cloud/"
        },
        {
            id: "2",
            name: "Customer first",
            img: "https://www.capgemini.com/wp-content/uploads/2022/05/Capgemini_Services_Customer-First.jpg?w=500&quality=90",
            link: "/services/customer-first/"
        },
        {
            id: "3",
            name: "Cybersecurity",
            img: "https://www.capgemini.com/wp-content/uploads/2022/02/Capgemini_services_Cybersecurity.jpg?w=500&quality=90",
            link: "/services/cybersecurity"
        },
        {
            id: "4",
            name: "Data and artificial intelligence",
            img: "https://www.capgemini.com/wp-content/uploads/2022/04/0_1_Header-banner_Eye-lady-e1649075744243.jpg?w=500&quality=90",
            link: "/services/data-and-ai/"
        },
        {
            id: "5",
            name: "Enterprise management",
            img: "https://www.capgemini.com/wp-content/uploads/2021/09/Capgemini_Services_Enterprise-management.jpg?w=500&quality=90",
            link: "/services/enterprise-management/"
        },
        {
            id: "6",
            name: "Intelligent industry",
            img: "https://www.capgemini.com/wp-content/uploads/2021/12/Capgemini_Industries_Intelligent-Industry.jpg?w=500&quality=90",
            link: "/services/intelligent-industry/"
        },
        {
            id: "7",
            name: "Sustainability",
            img: "https://www.capgemini.com/wp-content/uploads/2021/09/Capgemini_Services_Sustainability.jpg?w=500&quality=90",
            link: "/services/sustainability/"
        }
    ]

    return (
        <div className='exploring-section-container container'>
            <h1>Explore our services</h1>
            <div className='exploring-content-container'>
                {
                    elements.map(element =>

                        <Link key={element.id} to={element.link} style={{ "textDecoration": "none" }} ><div className='exploring-content'>
                            <div className='exploring-img-container'>
                                <img className='exploring-img' src={element.img} alt="" />
                            </div>
                            <div className='exploring-inner-box'>
                                <h4 className='inner-box-headline'>{element.name}</h4>
                            </div>
                        </div></Link>
                    )
                }
            </div>
        </div>
    );
};

export default Exploring;