import React from "react";
import { styled } from "styled-components";
import { useAppContext } from "../context/productcontex";
import FeatureProduct from "./FeatureProduct";
const Featured = () => {
  const { isLoading, FeaturedProduct } = useAppContext();
  // console.log(FeaturedProduct);
  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <Wrapper>
      <div className="box-wrapper">
        <div className="heading">
          <h1>Featured Products</h1>
        </div>
        <div className="Featured-product-box">
          {FeaturedProduct.map((currElem) => {
            return <FeatureProduct key={currElem.id} {...currElem} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #d3d3d3;
  margin-top: 6rem;
  .box-wrapper {
    width: 80%;
    padding: 4rem;
    margin: 0 auto;
  }
  .heading h1 {
    text-align: center;
    font-size: 3rem;
  }
  .Featured-product-box{
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    /* Add any other styling you want for the card */
   } 
  .card-image {
    width: 100%;
    max-width: 200px; /* Adjust the maximum width as needed */
   height: auto;
   }
   a{
     text-decoration:none;
     color:black;
   }
  img {
    max-width: 90%;
    margin-top: 1.5rem;
    height: 20rem; */
  
  .card-data--price {
    font-weight: bold;
  }
  
`;

export default Featured;
