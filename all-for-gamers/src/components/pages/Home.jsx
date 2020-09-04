import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import image from "../../assets/img/cyberpunk.jpg";
import image1 from "../../assets/img/pragmata2022.jpg";
import image2 from "../../assets/img/gollum.jpg";

import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <NavLink
        exact
        to="/2020"
        style={{ textDecoration: "none", color: "black" }}
      >
        <h2>2020</h2>
      </NavLink>
      <AwesomeSlider>
        <div data-src={image} />
        <div data-src={image1} />
        <div data-src={image2} />
      </AwesomeSlider>

      <NavLink
        exact
        to="/2021"
        style={{ textDecoration: "none", color: "black" }}
      >
        <h2>2021</h2>
      </NavLink>
      <AwesomeSlider>
        <div data-src={image} />
        <div data-src={image1} />
        <div data-src={image2} />
      </AwesomeSlider>

      {/* <NavLink
        exact
        to="/Login"
        style={{ textDecoration: "none", color: "black" }}
      >
        <h2>Login</h2>
      </NavLink>
      <AwesomeSlider>
        <div data-src={image} />
        <div data-src={image1} />
        <div data-src={image2} />
      </AwesomeSlider> */}
      {/* <div class="img">
        <img src={image} alt="" />
      </div>
      <div class="img">
       
        <img src={image1} alt="" />
      </div>
      <div class="img">
        
        <img src={image2} alt="" />
      </div> */}
    </div>
  );
}
// https://reactjsexample.com/react-component-that-renders-a-media-gallery-slider-carousel/ use pour le carousel
