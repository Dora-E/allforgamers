import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: RGB(255, 230, 185);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <NavLink
          exact
          to="/"
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          Home{" "}
        </NavLink>
      </li>
      <li>
        <NavLink to="/2020" style={{ textDecoration: "none", color: "black" }}>
          {" "}
          2020{" "}
        </NavLink>
      </li>
      <li>
        <NavLink to="/2021" style={{ textDecoration: "none", color: "black" }}>
          {" "}
          2021{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          Profile{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          Contact{" "}
        </NavLink>
      </li>
    </Ul>
  );
};

export default RightNav;
