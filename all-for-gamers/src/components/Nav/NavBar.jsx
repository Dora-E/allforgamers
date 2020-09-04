import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  .navi {
    min-height: 8vh;
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default Navbar;
