import React from 'react';
import { Link } from 'react-router-dom';
import "../Insights/style.css"
import heroBack from "../Insights/images/heroBack.webp"
import heroBack2 from "../Insights/images/heroBack2.webp"
import heroBack3 from "../Insights/images/heroBack3.webp"
import discoverImg1 from "../Insights/images/discoverImg1.webp"
import discoverImg2 from "../Insights/images/discoverImg2.webp"
import discoverImg3 from "../Insights/images/discoverImg3.webp"
import btnArrow from "../Insights/images/btn-arrow.svg"
import Description from '../ServicePage/Description';
const Explore = () => {


    return (
        <>
            <div className="insightsClone">
                <div className="mainPageHeading">
                    <h2>
                        Explore our latest thought leadership, ideas, and insights on the
                        issues that are shaping the future of business and society.
                    </h2>
                </div>
                {/* Hero Section */}
                <section className="heroMain">
                    <div className="hero">
                        <img src={heroBack} className="heroImg" alt="" />
                        <img src={heroBack2} className="heroImg2" alt="" />
                        <img src={heroBack3} className="heroImg3" alt="" />
                        <div className="heroCard">
                            <div className="heroCard-Content">
                                <h4>Leading sustainability</h4>
                                <p className="heroCard-Content-Para">
                                    In the race to save the planet, we bring insights on how to go
                                    beyond corporate responsibility to make sustainability a
                                    source of value.
                                </p>
                            </div>
                            <div className="heroCard-ButtonMain">
                                <a href="/" className="heroCard-Button">
                                    Read More <img src={btnArrow} className="ml-2" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <Description></Description>
                <section className="discoverMain">
                    <h3 className="discoverHeading">Discover more</h3>
                    <div className="discover">
                        <div className="discoverCard">
                            <div className="discoverImg">
                                <img src={discoverImg1} alt="" />
                            </div>
                            <div className="discoverCont">
                                <h4>Research Library</h4>
                                <p>Browse research and insights from across the business.</p>
                            </div>
                        </div>
                        <div className="discoverCard">
                            <div className="discoverImg">
                                <img src={discoverImg2} alt="" />
                            </div>
                            <div className="discoverCont">
                                <h4>Expert perspectives</h4>
                                <p>Review the archive of blogs from Capgemini’s experts</p>
                            </div>
                        </div>
                        <div className="discoverCard">
                            <div className="discoverImg">
                                <img src={discoverImg3} alt="" />
                            </div>
                            <div className="discoverCont">
                                <h4>Analyst reports</h4>
                                <p>Access our archive of analyst citations</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Explore;