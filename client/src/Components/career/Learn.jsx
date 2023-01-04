import React from 'react'
import "./careerStyles/learn.css"
const Learn = () => {
  return (
    <div className="container" >
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  src="https://www.capgemini.com/wp-content/uploads/2021/09/Capgemini_people_diversity_inclusion_Gender-Equality.jpg" className="d-block w-100"  height="450px" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-back-color my-10">
        <h5>Careers at Capgemini Invent</h5>
        <p className="my-2" >Get the future you want – for yourself, for our clients, and for society as a whole.</p>
      <button type="button" className="btn btn-success btn-set-center">Find your future at Capgemini Invent</button>
     
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.capgemini.com/wp-content/uploads/2021/08/Capgemini_Careers_Engineering-2.jpg" className="d-block w-100"  height="450px" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-back-color my-10">
        <h5>Careers at Capgemini Engineering</h5>
        <p className="my-2">Unleash the potential of R&amp;D, harness the power of data to help the largest innovators engineer the products and services of tomorrow.</p>
        <button type="button" className="btn btn-success btn-set-center">Find your future at Capgemini Engineering</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.capgemini.com/wp-content/uploads/2021/08/Capgemini_careers_sogeti.jpg" className="d-block w-100"  height="450px" alt="..."/>
      <div className="carousel-caption d-none d-md-block text-back-color my-10">
      <h5>Careers at Sogeti</h5>
        <p className="my-2">At Sogeti we believe that a combination of different people, and the fusion of different ideas, provides the essential fuel for progress.</p>
        <button type="button" className="btn btn-success btn-set-center">Find your future at Sogeti</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        <div>
            <img className="rating-img-set" src="https://www.capgemini.com/wp-content/uploads/2022/05/Glassdoor.png" alt="not found" />
        </div>
        
        <div className="card-career-set">
            <section className="discoverMain">
          <h3 className="discoverHeading">Learn more</h3>
          <div className="discover">
            <div className="discoverCard">
              <div className="discoverImg">
                <img src={require("./images/Capgemini_About-US_Corporate-responsibility.webp")} alt="not found" />
              </div>
              <div className="discoverCont">
                <h4 style={{fontSize: "22px" , cursor : "pointer" , }} className="hover-card-text">Corporate social responsibility</h4>
              </div>
            </div>
            <div className="discoverCard">
              <div className="discoverImg">
                <img src={require("./images/Capgemini_Our_Brands.webp")} alt="not found" />
              </div>
              <div className="discoverCont">
                <h4 style={{fontSize: "22px" , cursor : "pointer"}}className="hover-card-text">About us</h4>
              </div>
            </div>
            <div className="discoverCard">
              <div className="discoverImg">
                <img src={require("./images/Capgemini-about-us-hero-banner.webp")} alt="not found" />
              </div>
              <div className="discoverCont">
                <h4 style={{fontSize: "22px" , cursor : "pointer"}} className="hover-card-text">Our brands</h4>
              </div>
            </div>
          </div>
        </section>
        </div>
    </div>
  )
}

export default Learn