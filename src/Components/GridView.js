import React from "react";
import { styled } from "styled-components";
import FeatureProduct from "./FeatureProduct";

const GridView = ({ product }) => {
  console.log(product);
  return (
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {product.map((currElem) => {
          return <FeatureProduct key={currElem.id} {...currElem} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: white;

  padding: 5rem;
  .container {
    max-width: 120rem;
  }
  .grid-three-column {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2rem;
  }

  .img {
    height: 20rem;
    width: 27rem;
  }
  a {
    text-decoration: none;
    color: black;
  }

  figcaption {
    color: black;
    font-size: 1.7rem;
  }
  .card-data-flex h3 {
    font-size: 2.4rem;
    margin: 0.6rem 0;
  }
  .card-data-flex p {
    font-size: 1.8rem;
    color: black;
  }
  .card-data--price {
    font-size: 2.9rem;
    margin-bottom: 0.6rem;
  }
`;
export default GridView;
