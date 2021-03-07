import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: repeating-radial-gradient(#fc1c34, #000);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 5rem calc((100vw-1300px) / 2);
  color: #fff;
`;
export const ProductsHeading = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: clamp(1.8rem, 5vw, 3rem);
  padding: 1rem;
  width: 100%;
  text-align: center;
  backdrop-filter: grayscale(1);
`;
export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ProductCard = styled.div`
  margin: 1rem 2rem;
  width: 300px;
  border-radius: 10px;
  border: 1px solid hsl(0, 0%, 40%);
  box-shadow: 0 0 0 2px hsl(0, 0%, 80%), 0 0 0 5px hsl(0, 0%, 90%);
`;
export const ProductImg = styled.img`
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  height: 200px;
  width: 100%;
  min-width: 200px;
  background: cover center center;
`;
export const ProductInfo = styled.div`
  background: repeating-radial-gradient(#fc1c34, #000);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const ProductPrice = styled.div`
  font-weight: bold;
  font-family: sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export const ProductTitle = styled.div`
  margin-bottom: 0.8rem;
  font-size: 1.5rem;
`;
export const ProductDesc = styled.p`
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const ProductBtn = styled.div`
  background: #ffc500;
  padding: 0.5rem clamp(1.5rem, 3vw, 4rem);
  color: #000;
  font-size: 1rem;
  font-weight: 800;
  border-radius: 50px;
  transition: all 0.2s ease;
  &:hover {
    color: #000;
    cursor: pointer;
    background: cyan;
    transition: all 0.2s ease;
  }
`;
