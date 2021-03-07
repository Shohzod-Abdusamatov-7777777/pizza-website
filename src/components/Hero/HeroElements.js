import styled from "styled-components";
import ImgBg from "../../images/pizza.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(10vh);
  margin-top: -60px;
  padding: 0rem calc((100vw-1300px) / 2);
  max-height: 100%;
`;
export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    max-width: 100%;
  }
`;
export const HeroH1 = styled.h1`
  color: white;
  max-width: 100%;
  font-size: clamp(2.5rem, 5vw, 4rem);
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 2px;
  margin: 1.5rem 0;
  font-weight: bold;
`;
export const HeroP = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 4rem);
  margin-bottom: 2rem;
`;
export const HeroBtn = styled.button`
  border: none;
  padding: 0.5rem clamp(1.5rem, 4vw, 5rem);
  font-size: clamp(1.5rem, 3vw, 5rem);
  border-radius: 2rem;
  color: #fff;
  background: red;
  transition: 0.2s ease-out;
  outline: none;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    outline: none;
  }
`;
