import React from "react";
import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  ProductCard,
  ProductPrice,
  ProductTitle,
  ProductInfo,
  ProductImg,
  ProductBtn,
  ProductDesc,
} from "./ProductsElements";

const Products = ({ heading, productData }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
        {productData.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>${product.price}</ProductPrice>
                <ProductBtn>{product.button}</ProductBtn>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Products;
