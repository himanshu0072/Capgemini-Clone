import React from "react";
import { Link } from "react-router-dom";
const Carausal = () => {


  let heading = "A PERFECT APPROACH TO THE RYDER CUP"
  let textPara = " As a Worldwide Partner of the Ryder Cup, we are celebrating one year until the first player tees off "
  return (

    <div className="">
      {/* <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel "
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="d-block w-100"
              height="350px"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <Link style={{ textDecoration: "none", color: "whitesmoke" }} to="/about-us/passion-for-sport/ryder-cup/">

                <h2 >A PERFECT APPROACH TO THE RYDER CUP</h2>
              </Link>
              <p>
                As a Worldwide Partner of the Ryder Cup, we are celebrating one
                year until the first player tees off.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
              className="d-block w-100"
              height="350px"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <Link style={{ textDecoration: "none", color: "whitesmoke" }} to="/about-us/passion-for-sport/ryder-cup/">

                <h2>A PERFECT APPROACH TO THE RYDER CUP</h2>
              </Link>
              <p>
                As a Worldwide Partner of the Ryder Cup, we are celebrating one
                year until the first player tees off.
              </p>
            </div>
          </div>
          <div className="carousel-item " data-bs-interval="4000">
            <img
              src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="d-block w-100"
              height="350px"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <Link style={{ textDecoration: "none", color: "whitesmoke" }} to="/about-us/passion-for-sport/ryder-cup/">

                <h2>A PERFECT APPROACH TO THE RYDER CUP</h2>
              </Link>
              <p>
                As a Worldwide Partner of the Ryder Cup, we are celebrating one
                year until the first player tees off.
              </p>
            </div>

          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="d-block w-100"
              height="350px"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <Link style={{ textDecoration: "none", color: "whitesmoke" }} to="/about-us/passion-for-sport/ryder-cup/">

                <h2 >A PERFECT APPROACH TO THE RYDER CUP</h2>
              </Link>
              <p>
                As a Worldwide Partner of the Ryder Cup, we are celebrating one
                year until the first player tees off.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
              className="d-block w-100"
              height="350px"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <Link style={{ textDecoration: "none", color: "whitesmoke" }} to="/about-us/passion-for-sport/ryder-cup/">

                <h2>A PERFECT APPROACH TO THE RYDER CUP</h2>
              </Link>
              <p>
                As a Worldwide Partner of the Ryder Cup, we are celebrating one
                year until the first player tees off.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="d-block w-100"
              height="350px"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carausal;
