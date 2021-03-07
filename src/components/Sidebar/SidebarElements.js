import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  top: 0;
  position: fixed;
  height: 100vh;
  width: 350px;
  display: flex;
  background: #000;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  align-items: center;
  z-index: 999;
  transition: 0.4s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
`;
export const CloseIcon = styled(FaTimes)`
  &:hover {
    cursor: pointer;
  }
`;
export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
`;
export const SideBarLink = styled(Link)`
  list-style-type: none;
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  margin: 1.8rem 0;
  &:hover {
    color: cyan;
  }
`;
export const SideBtnWrap = styled.div`
  margin-top: 1rem;
`;
export const SideBarRoute = styled(Link)`
  list-style-type: none;
  text-decoration: none;
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  color: #fff;
  font-size: 1.5rem;
  margin: 1.8rem 0;
  background: blue;
  font-weight: bold;
  transition: all 0.3s ease-out;
  &:hover {
    color: #000;
    background: cyan;
    transition: all 0.3s ease-out;
  }
`;
