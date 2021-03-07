import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #111;
  width: 100%;
  height: 50px;
`;
export const FooterLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
`;
export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 2rem;
`;

export const SocialLink = styled(Link)`
  margin: 0 1rem;
  color: red;
`;
