import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaPizzaSlice, FaTimes } from "react-icons/fa";
export const Nav = styled.nav`
  background: transparent;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: cyan;
  }
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #ff2f3d;

  p {
    transform: translate(-195%, 120%);
    font-weight: bold;
    color: #fff;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
