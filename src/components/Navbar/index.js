import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./Navbar.elements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
