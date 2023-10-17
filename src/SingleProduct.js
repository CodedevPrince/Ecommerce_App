import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import PageNavigation from "./Components/PageNavigation";
import { useAppContext } from "./context/productcontex";
import MYImages from "./Components/MYImages";
import Navbar2 from "./Components/Navbar2";
import Footer from "./Components/Footer";
import Star from "./Components/Star";
import Addtocart from "./Components/Addtocart";

const API = `https://api.pujakaitem.com/api/products`;
function SingleProduct() {
  const { getSingleProduct, Singleproduct } = useAppContext();
  // console.log(Singleproduct);
  const { id } = useParams();
  // console.log(Singleproduct);
  const {
    id: alias,
    colors,
    name,
    company,
    image,
    price,
    description,
    category,
    stock,
    stars,
    reviews
  } = Singleproduct;
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  return (
    <Wrapper>
      <Navbar2 />
      <div className="box-wrapper">
        <div className="product-img">
          <MYImages imgs={image} />
        </div>
        <div className="product-text">
          <PageNavigation title={name} />
          <h1>{name}</h1>
          <Star stars={stars} reviews={reviews} />
          <h2>
            $ {price}
            <span>+ Free Shipping</span>
          </h2>
          <p>{description}</p>
          <div>
            {stock > 0 ? <Addtocart product={Singleproduct} /> : "Not in stock"}
          </div>
          <hr />
          <h3>Category: {category}</h3>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
}
const Wrapper = styled.section`
  background-color: #d3d3d3;
  .box-wrapper {
    display: flex;
    justify-content: center;
  }
  .product-img {
    width: 50%;
  }
  .product-text {
    width: 39%;

    padding-top: 8rem;
  }
  .product-text h1 {
    font-size: 3.9rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .product-text h2 {
    font-size: 3.4rem;
    margin-bottom: 1.8rem;
    margin-top: 2.3rem;
  }
  span {
    font-size: 1.7rem;
  }
  .product-text p {
    font-size: 1.9rem;
    line-height: 32px;
  }
  .value-change {
    display: flex;
    align-items: center;
  }
  .addtocartbox {
    width: 100%;
  }
  .addtocart {
    width: 70%;
    text-align: center;
    color: whitesmoke;
    background-color: #0066b2;
    outline: none;
    border: none;
    padding: 1.001rem 0;
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-left: 1.5rem;
    cursor: pointer;
  }
  hr {
    margin-top: 3rem;
  }
  h3 {
    font-size: 2rem;
    font-weight: 100;
    margin-top: 2rem;
  }
`;
export default SingleProduct;
