import React from 'react'
import { NavLink } from 'react-router-dom';
import "./News/css/news.css"

function News() {
    return (

        <>

            {/* <div id="navagation">
                <NavLink to="/insights">Home</NavLink>
                /
                <NavLink to="/industries">News</NavLink>
            </div> */}
            <div id='news_container'>


                <div className='news-banner-container'>
                    <div className='news-banner-elements'>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-lg-6">
                                    <div className="news-banner-card">
                                        <h1>NEWS</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="news-banner-svg-img"></div>
                </div>

                <div className='latestnews'>
                    <h3>Latest News</h3>

                    <div className="outerlatestnews">
                        <div className="leftlatestnews">
                            <span className="box-tag">Reports</span>
                            <h5>Is the automotive industry on track to meet its sustainability targets?</h5>
                            <p>Implementation levels for top sustainability initiatives have improved only marginally, or even reduced in some areas, since 2019, according to the latest report from the Capgemini Research Institute, ‘Sustainability in Automotive: From Ambition to Action’. Recent challenges, such as ongoing chip shortages, and supply chain issues have forced automotive organizations to re-focus their priorities.</p>
                        </div>
                        <div className="rightlatestnews">
                            <div className="box">
                                <span className="box-tag">Client news</span>
                                <a className="box-title">
                                    <h5>Consortium led by Airbus and Capgemini selected by the French Ministry of the Interior for the Radio Network of the Future (RRF)</h5>
                                </a>
                            </div>
                            <div className="box">
                                <span className="box-tag">Reports</span>
                                <a className="box-title" >
                                    <h5>Capgemini’s Annual World Energy Markets Observatory, 2022 – A balance must be found between two equally important imperatives: security of affordable energy supply and the fight against climate change</h5>
                                </a>
                            </div>
                            <div className="box">
                                <span className="box-tag">Partners</span>
                                <a className="box-title" >
                                    <h5>Capgemini and Microsoft collaborate to offer cloud-native digital twin solution to help organizations rethink their operations</h5>

                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <section className="newssection section--news-reports wp-block-cg-block-latest-reports" id="newsbottom">
                    <div className="container">
                        <div className="content-title">
                            <h3>Latest research and insights</h3>
                        </div>
                        <div className="row">
                            <div className="box box--event">
                                <div className="col-md-4 box-img-wrapper ">
                                    <picture>
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/10/CPR_Luxury-article_dotcom_2880x1800px-1.jpg?w=800&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/10/CPR_Luxury-article_dotcom_2880x1800px-1.jpg?w=800&quality=90 2x" media="(min-width: 1500px)" />
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/10/CPR_Luxury-article_dotcom_2880x1800px-1.jpg?w=400&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/10/CPR_Luxury-article_dotcom_2880x1800px-1.jpg?w=800&quality=90 2x" media="(min-width: 992px)" />
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/10/CPR_Luxury-article_dotcom_2880x1800px-1.jpg?w=350&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/10/CPR_Luxury-article_dotcom_2880x1800px-1.jpg?w=700&quality=90 2x" media="(min-width: 768px)" />
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/10/CPR_Luxury-article_dotcom_2880x1800px-1.jpg?w=350&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/10/CPR_Luxury-article_dotcom_2880x1800px-1.jpg?w=700&quality=90 2x" media="(min-width: 0)" />
                                        <img loading="lazy" src="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/10/CPR_Luxury-article_dotcom_2880x1800px-1.jpg" alt="Luxury: The new assets of the customer experience" />
                                    </picture>
                                </div>
                                <div className="col-md-5 box-inner-news">
                                    <span className="box-tag"/>

                                    <a className="box-title1" href="https://www.capgemini.com/insights/research-library/luxury-the-new-assets-of-the-customer-experience/" aria-label="Luxury: The new assets of the customer experience">
                                        <h4>Luxury: The new assets of the customer experience</h4>
                                    </a>
                                    <div className="box-date">
                                        <div className="author-info">
                                            <span>4 Oct 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <span className="box-read-more-btn">
                                        <a className="more2" aria-label="Read more about Luxury: The new assets of the customer experience" href="https://www.capgemini.com/insights/research-library/luxury-the-new-assets-of-the-customer-experience/" target="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/10/CPR_Luxury-article_dotcom_2880x1800px-1.jpg" title="Opens in a new window">
                                            Read More
                                        </a>
                                    </span>
                                    {" "} </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="box box--event">
                                <div className="col-md-4 box-img-wrapper ">
                                    <picture>
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/07/People_experience_advantager_2880X1800.jpg?w=800&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/07/People_experience_advantager_2880X1800.jpg?w=800&quality=90 2x" media="(min-width: 1500px)" />
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/07/People_experience_advantager_2880X1800.jpg?w=400&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/07/People_experience_advantager_2880X1800.jpg?w=800&quality=90 2x" media="(min-width: 992px)" />
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/07/People_experience_advantager_2880X1800.jpg?w=350&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/07/People_experience_advantager_2880X1800.jpg?w=700&quality=90 2x" media="(min-width: 768px)" />
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/07/People_experience_advantager_2880X1800.jpg?w=350&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/07/People_experience_advantager_2880X1800.jpg?w=700&quality=90 2x" media="(min-width: 0)" />
                                        <img loading="lazy" src="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/07/People_experience_advantager_2880X1800.jpg" alt="The people experience advantage" />
                                    </picture>
                                </div>
                                <div className="col-md-5 box-inner-news">

                                    <span className="box-tag"/>

                                    <a className="box-title1" href="https://www.capgemini.com/insights/research-library/the-people-experience-advantage/" aria-label="The people experience advantage">
                                        <h4>The people experience advantage</h4>
                                    </a>
                                    <div className="box-date">
                                        <div className="author-info">
                                            <span>4 Oct 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <span className="box-read-more-btn">
                                        <a className="more2" aria-label="Read more about The people experience advantage" href="https://www.capgemini.com/insights/research-library/the-people-experience-advantage/" target="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/07/People_experience_advantager_2880X1800.jpg" title="Opens in a new window">
                                            Read More
                                        </a>
                                    </span>
                                    {" "} </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="box box--event">
                                <div className="col-md-4 box-img-wrapper ">
                                    <picture>
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/WQR2022_DotCom-Banner_1440x900-1.jpg?w=800&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/WQR2022_DotCom-Banner_1440x900-1.jpg?w=800&quality=90 2x" media="(min-width: 1500px)" />
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/WQR2022_DotCom-Banner_1440x900-1.jpg?w=400&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/WQR2022_DotCom-Banner_1440x900-1.jpg?w=800&quality=90 2x" media="(min-width: 992px)" />
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/WQR2022_DotCom-Banner_1440x900-1.jpg?w=350&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/WQR2022_DotCom-Banner_1440x900-1.jpg?w=700&quality=90 2x" media="(min-width: 768px)" />
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/WQR2022_DotCom-Banner_1440x900-1.jpg?w=350&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/WQR2022_DotCom-Banner_1440x900-1.jpg?w=700&quality=90 2x" media="(min-width: 0)" />
                                        <img loading="lazy" src="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/WQR2022_DotCom-Banner_1440x900-1.jpg" alt="World Quality Report 2022/23" />
                                    </picture>
                                </div>
                                <div className="col-md-5 box-inner-news">
                                   <span className="box-tag" />

                                    <a className="box-title1" href="https://www.capgemini.com/insights/research-library/world-quality-report-wqr-2022/" aria-label="World Quality Report 2022/23">
                                        <h4>World Quality Report 2022/23</h4>
                                    </a>
                                    <div className="box-date">
                                        <div className="author-info">
                                            <span>3 Oct 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <span className="box-read-more-btn">
                                        <a className="more2" aria-label="Read more about World Quality Report 2022/23" href="https://www.capgemini.com/insights/research-library/world-quality-report-wqr-2022/" target="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/WQR2022_DotCom-Banner_1440x900-1.jpg" title="Opens in a new window">
                                            Read More
                                        </a>
                                    </span>
                                    {" "} </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="box box--event">
                                <div className="col-md-4 box-img-wrapper ">
                                    <picture>
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/MicrosoftTeams-image-5.jpg?w=800&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/MicrosoftTeams-image-5.jpg?w=800&quality=90 2x" media="(min-width: 1500px)" />
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/MicrosoftTeams-image-5.jpg?w=400&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/MicrosoftTeams-image-5.jpg?w=800&quality=90 2x" media="(min-width: 992px)" />
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/MicrosoftTeams-image-5.jpg?w=350&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/MicrosoftTeams-image-5.jpg?w=700&quality=90 2x" media="(min-width: 768px)" />
                                        <source srcSet="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/MicrosoftTeams-image-5.jpg?w=350&quality=90 1x, https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/MicrosoftTeams-image-5.jpg?w=700&quality=90 2x" media="(min-width: 0)" />
                                        <img loading="lazy" src="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/MicrosoftTeams-image-5.jpg" alt="Enabling the intelligent production system of the future" />
                                    </picture>
                                </div>
                                <div className="col-md-5 box-inner-news ">

                                    <span className="box-tag"/>
                                    <a className="box-title1" href="https://www.capgemini.com/insights/research-library/enabling-the-intelligent-production-system-of-the-future/" aria-label="Enabling the intelligent production system of the future">
                                        <h4>Enabling the intelligent production system of the future</h4>
                                    </a>
                                    <div className="box-date">
                                        <div className="author-info">
                                            <span>28 Sep 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <span className="box-read-more-btn">
                                        <a className="more2" aria-label="Read more about Enabling the intelligent production system of the future" href="https://www.capgemini.com/insights/research-library/enabling-the-intelligent-production-system-of-the-future/" target="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/09/MicrosoftTeams-image-5.jpg" title="Opens in a new window">
                                            Read More
                                        </a>
                                    </span>
                                    {" "} </div>
                            </div>
                        </div>
                        <div className="content-more">
                            <a className="more2" aria-label="Read all reports about Latest research and insights" href="/insights/research-library/" target="" title="Opens in a new window">
                                See all reports
                            </a>
                        </div>
                    </div>
                </section>

                <section className="newssection latestStoriesBlock ">
                    <div className="container">
                        <div className="contentTitle">
                            <h3>Inside stories</h3>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-lg-8">
                                <div className="storyBox ">
                                    <div className="imageWrapper focused-image-container">
                                        <a href="https://www.capgemini.com/news/inside-stories/hunting-for-dragons/" aria-label="Hunting for dragons">
                                            <picture>
                                                <source srcSet="https://www.capgemini.com/wp-content/uploads/2022/05/Dragons-without-shape.png?w=1024&quality=90" media="(min-width: 992px)" />
                                                <source srcSet="https://www.capgemini.com/wp-content/uploads/2022/05/Dragons-without-shape.png?w=1024&quality=90" media="(min-width: 768px)" />
                                                <source srcSet="https://www.capgemini.com/wp-content/uploads/2022/05/Dragons-without-shape.png?w=500&quality=90" media="(min-width: 0)" />
                                                <img loading="lazy" src="https://www.capgemini.com/wp-content/uploads/2022/05/Dragons-without-shape.png" alt="Hunting for dragons"
                                                    style={
                                                        {
                                                            objectPosition: "58% 27%",
                                                            objectFit: "cover"
                                                        }
                                                    }
                                                    className="focused-image" />
                                            </picture>
                                        </a>
                                    </div>
                                    <div className="storyInfo">
                                        <span className="storyTag">Future-shaping projects</span>
                                        <a className="storyTitle" href="https://www.capgemini.com/news/inside-stories/hunting-for-dragons/" aria-label="Hunting for dragons">
                                            <h4>Hunting for dragons</h4>
                                        </a>
                                        <p>
                                            Sarah Gonçalves wasn’t always a data engineer. She began her
                                            career as an archaeologist, unearthing the secrets of the past in
                                            sites across France before retraining as a data engineer. She
                                            brings the same curiosity to her new vocation at Capgemini, using
                                            artificial intelligence (AI) to uncover what lies beneath the
                                            surface.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-4">
                                <div className="row">
                                    <div className="storyBox btmSpaceThreeStory col-lg-12 col-md-6">
                                        <div className="imageWrapper focused-image-container">
                                            <a href="https://www.capgemini.com/news/inside-stories/sustaining-a-national-wonder-with-ai/">
                                                <picture>

                                                    <source srcSet="https://www.capgemini.com/wp-content/uploads/2022/05/Mojave-without-shape.png?w=1024&quality=90" media="(min-width: 992px)" />
                                                    <source srcSet="https://www.capgemini.com/wp-content/uploads/2022/05/Mojave-without-shape.png?w=1024&quality=90" media="(min-width: 768px)" />
                                                    <source srcSet="https://www.capgemini.com/wp-content/uploads/2022/05/Mojave-without-shape.png?w=500&quality=90" media="(min-width: 0)" />
                                                    <img loading="lazy" src="https://www.capgemini.com/wp-content/uploads/2022/05/Mojave-without-shape.png" alt="Latest Story Image"

                                                        style={
                                                            {
                                                                objectPosition: "50% 50%",
                                                                objectFit: "cover"
                                                            }
                                                        }
                                                        className="focused-image" />
                                                </picture>
                                            </a>
                                        </div>
                                        <div className="storyInfo">
                                            <span className="storyTag">Environment</span>
                                            <a className="storyTitle" href="https://www.capgemini.com/news/inside-stories/sustaining-a-national-wonder-with-ai/" aria-label="Sustaining a national wonder with AI">
                                                <h4>Sustaining a national wonder with AI</h4>
                                            </a>
                                            <p />
                                        </div>
                                    </div>
                                    <div className="storyBox btmSpaceThreeStory col-lg-12 col-md-6">
                                        <div className="imageWrapper focused-image-container">
                                            <a href="https://www.capgemini.com/news/inside-stories/building-bridges/">
                                                <picture>

                                                    <source srcSet="https://www.capgemini.com/wp-content/uploads/2022/05/Building-bridges.png?w=1024&quality=90" media="(min-width: 992px)" />
                                                    <source srcSet="https://www.capgemini.com/wp-content/uploads/2022/05/Building-bridges.png?w=1024&quality=90" media="(min-width: 768px)" />
                                                    <source srcSet="https://www.capgemini.com/wp-content/uploads/2022/05/Building-bridges.png?w=500&quality=90" media="(min-width: 0)" />
                                                    <img loading="lazy" src="https://www.capgemini.com/wp-content/uploads/2022/05/Building-bridges.png" alt="Latest Story Image"

                                                        style={
                                                            {
                                                                objectPosition: "41% 30%",
                                                                objectFit: "cover"
                                                            }
                                                        }
                                                        className="focused-image" />
                                                </picture>
                                            </a>
                                        </div>
                                        <div className="storyInfo">
                                            <span className="storyTag">Life at Capgemini</span>
                                            <a className="storyTitle" href="https://www.capgemini.com/news/inside-stories/building-bridges/" aria-label="Building bridges">
                                                <h4>Building bridges</h4>
                                            </a>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="readMoreBtnWrapper">
                                <a className="more2" data-maxlength="" href="/news/inside-stories/" aria-label="Read more stories about Inside stories" target="" title="Opens in a new window">
                                    Read more stories
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* next */}
                <br />
                <section>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-xl-8 text-center">
                            <h3 className="mb-4">Get in touch</h3>

                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4 mb-5 mb-md-0">
                            <div className="card testimonial-card">
                                <div className="card-up"
                                    style={
                                        { backgroundColor: "#9d789b" }
                                    } />
                                <div className="avatar mx-auto bg-white">

                                    <img src="https://prod.ucwe.capgemini.com/wp-content/uploads/2020/11/news-getin-1.png?w=250&quality=90" className="rounded-circle img-fluid" alt=""/>

                                </div>
                                <div className="card-body">
                                    <h4 className="mb-4">Sam Connatty</h4>

                                    <p className="dark-grey-text mt-4">
                                        {/* <i className="fas fa-quote-left pe-2" /> */}
                                        Group Press Office
                                    </p>
                                    <hr />
                                    <li>

                                        <a className="icon-wrapper" aria-label="Phone" href="tel:+44%20370%20904%203601" tabIndex="0">
                                            <i className="fas fa-phone"></i>
                                        </a>

                                    </li>
                                    <li>


                                        <a className="icon-wrapper" aria-label="Email" href="mailto:sam.connatty@capgemini.com" tabIndex="0">
                                            <i className="fas fa-envelope"></i>
                                        </a>

                                    </li>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 mb-md-0">
                            <div className="card testimonial-card">
                                <div className="card-up"
                                    style={
                                        { backgroundColor: "#7a81a8" }
                                    } />
                                <div className="avatar mx-auto bg-white">

                                    <img src="https://prod.ucwe.capgemini.com/wp-content/uploads/2021/01/MicrosoftTeams-image-25.jpg?w=250&quality=90" className="rounded-circle img-fluid" alt=""/>

                                </div>
                                <div className="card-body">
                                    <h4 className="mb-4">Victoria Grux</h4>

                                    <p className="dark-grey-text mt-4">
                                        {/* <i className="fas fa-quote-left pe-2" /> */}
                                        Group Press Office
                                    </p>
                                    <hr />
                                    <li>

                                        <a className="icon-wrapper" aria-label="Phone" href="tel:+33%206%2004%2052%2016%2055" tabIndex="0">
                                            <i className="fas fa-phone"></i>

                                        </a>

                                    </li>
                                    <li>


                                        <a className="icon-wrapper" aria-label="Email" href="mailto:victoire.grux@capgemini.com" tabIndex="0">

                                            <i className="fas fa-envelope"></i>
                                        </a>

                                    </li>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-0">
                            <div className="card testimonial-card">
                                <div className="card-up"
                                    style={
                                        { backgroundColor: "#6d5b98" }
                                    } />
                                <div className="avatar mx-auto bg-white">

                                    <img src="https://prod.ucwe.capgemini.com/wp-content/uploads/2020/11/news-getin-2.png?w=250&quality=90" className="rounded-circle img-fluid" alt="" />

                                </div>
                                <div className="card-body">
                                    <h4 className="mb-4">Florence Lievre</h4>

                                    <p className="dark-grey-text mt-4">
                                        {/* <i className="fas fa-quote-left pe-2" /> */}
                                        Group Press Office
                                    </p>
                                    <hr />
                                    <li>

                                        <a className="icon-wrapper" aria-label="Phone" href="tel:+33%201%2047%2054%2050%2071" tabIndex="0">

                                            <i className="fas fa-phone"></i>
                                        </a>

                                    </li>
                                    <li>


                                        <a className="icon-wrapper" aria-label="Email" href="mailto:florence.lievre@capgemini.com" tabIndex="0">

                                            <i className="fas fa-envelope"></i>
                                        </a>

                                    </li>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>

    )
}

export default News