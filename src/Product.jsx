import React from "react";
import { styled } from "styled-components";
import Navbar2 from "./Components/Navbar2";
import Filtersection from "./Components/Filtersection";
import ProductList from "./Components/ProductList";
import Sort from "./Components/Sort";
import { useFilterContext } from "./context/FilterContext";
import Footer from "./Components/Footer";

const Product = () => {
  const { filter_products } = useFilterContext();

  return (
    <Wrapper>
      <Navbar2 />
      <div className="grid-column-view">
        <div className="grid-filtersection">
          <Filtersection />
        </div>
        <div className="grid-sort-product-view">
          <div className="grid-sort">
            <Sort />
          </div>
          <div className="grid-products">
            <ProductList />
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #d3d3d3;
  .grid-column-view {
    display: grid;
    grid-template-columns: 0.4fr 1fr;
    justify-items: center;
    padding: 6rem 0;
  }
`;
export default Product;
