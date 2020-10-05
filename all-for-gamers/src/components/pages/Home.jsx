import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import image from "../../assets/img/spiderman.png";

import image2 from "../../assets/img/Watch-Dogs-Legion-oj8f22e8vh71wpmjw6dw9w5ivriilk45k56z6lqkbi.jpg";
import image3 from "../../assets/img/1594533802-maxresdefault-11-1594552747.jpg";
import image4 from "../../assets/img/demon_s_souls_asie_2542.jpg";
import image5 from "../../assets/img/little devil inside.jpg";
import image1 from "../../assets/img/assassins-creed-valhalla-key-art-e1588261446136.jpg";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h3 className="home">
        All For Gamers. fait par les joueurs et pour les joueurs. Site
        d’informations sur les jeux a venirs. Les dates prevues, les premieres
        images, bandes annonces. Enjoy Games!
      </h3>
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
        <div data-src={image3} />
        <div data-src={image4} />
        <div data-src={image5} />
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
