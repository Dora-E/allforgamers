import React from "react";
import Logo from "../../assets/img/Logo.png";
import { NavLink } from "react-router-dom";

export default function logo() {
  return (
    <div>
      <NavLink exact to="/">
        <figure className="logo">
          <img src={Logo} alt="" />
        </figure>
      </NavLink>
    </div>
  );
}
