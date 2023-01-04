import React from "react";
import { Link } from "react-router-dom";
const Carausal = () => {


  return (
    <div className="container">
      <div
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
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carausal;
