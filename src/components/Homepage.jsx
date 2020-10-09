import React, { Component } from "react";
import camerabackground from "./camerabackground.jpg";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";
import image_2 from "../Imgs/2.jpg";
import image_4 from "../Imgs/4.jpg";
import image_5 from "../Imgs/5.jpeg";

const bounceAnimation = keyframes`${fadeInDown}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;
class Homepage extends Component {
  render() {
    return (
      <div className="conten-hmpge">
        <div className="homepage" style={{ backgroundColor: "black" }}>
          <div className="caption-home-div">
            <BouncyDiv>
              <span
                className="caption-home"
                style={{ paddingTop: "250px", borderStyle: "none" }}
              >
                Feel Like <br /> Celebrity
              </span>
            </BouncyDiv>
          </div>
          {/* <img src={camerabackground} style={{backgroundColor:"GrayText",backgroundImage:url("camerabackground.jpg")}} />     */}
        </div>

        <div style={{ paddingBottom: "2%" }}>
          <center>{/* <button class="pf">Visit portfolio </button> */}</center>
          <center>
            {" "}
            <h2 class="display-3 container" style={{ padding: "10px" }}>
              {" "}
              Team behind the lense{" "}
            </h2>{" "}
          </center>
          <p id="sa">
            Born and bred in the godavarikhani, I grew up on the beautiful
            beaches of Nature’s Valley, Wilderness and Vic Bay where I developed
            a pretty easy-going outlook to life and people. Life was good,
            friends were awesome, and the misty coastline of the Garden Route
            always kept me smiling. At the age of 20, I moved to Cape Town which
            landed me slap bang in the middle of the fashion and film industry
            as a model where my interest in photography started. After a few
            years I decided to take a break and tackle what I learnt to love
            most about the industry, the creative challenge of being behind the
            lens.
          </p>
        </div>
        <div style={{ padding: "15px 0 80px 0" }}>
          <div className="container karousel">
            <div className="row">
              <div className="col-md-4">
                <img src={image_5} alt="Image1" width="100%" height="100%" />
              </div>
              <div className="col-md-4">
                <img src={image_2} alt="Image1" width="100%" />
              </div>
              <div className="col-md-4">
                <img src={image_4} alt="Image1" width="100%" />
              </div>
            </div>
            {/* <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src={image_2} alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src={image_3} alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="..." alt="Third slide" />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
