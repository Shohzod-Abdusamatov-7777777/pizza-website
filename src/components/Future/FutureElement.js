import styled from "styled-components";
import bgImg from "../../images/pizza_4.jpg";
export const FutureCotainer = styled.div`
  min-height: 100vh;
  background: url(${bgImg});
  background-size: cover;
  background-position: center center;
`;
export const FutureWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const FutureH1 = styled.h1`
  font-size: clamp(2rem, 10vw, 5rem);
  color: #000;
  font-family: "Times New Roman", Times, serif;
  backdrop-filter: blur(15px);
  padding: 0.8rem;
  border-radius: 15px;
`;
export const FutureP = styled.p`
  margin: 2rem 0rem;
  color: blue;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0 2rem;
`;
export const FutureBtn = styled.button`
  background: linear-gradient(to right, #ffc500, red);
  padding: 0.5rem 2rem;
  outline: none;
  border: none;
  border-radius: 50px;
  color: cyan;
  font-size: 1.5rem;
  font-weight: bold;
`;
