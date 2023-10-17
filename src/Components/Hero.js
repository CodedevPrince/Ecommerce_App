import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <div className="Herobox">
          <div className="Hero-text">
            <h1>Raining Offers For Hot Summers</h1>
            <p>25% Off On All Products</p>
            <button className="shopnow">Shop Now</button>
            <button className="more">Find More</button>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.section`
  .Herobox {
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("./images/Hero img-4.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: contain;
    background-position: top;
    background-attachment: fixed;
  }
  .Hero-text {
    color: white;
    width: 63%;
    padding: 22rem 14rem;
  }
  .Hero-text h1 {
    font-size: 7rem;
  }
  .Hero-text p {
    font-size: 4rem;
    margin: 3rem 0;
  }
  button {
    font-size: 2rem;
    padding: 1.6rem 3rem;
    margin-right: 1.8rem;
  }
  .shopnow {
    color: black;
    background-color: white;
    border: none;
  }
  .shopnow:hover {
    background-color: black;
    color: white;
    transition: all 0.2s ease-in-out;
  }
  .more {
    color: white;
    background-color: transparent;
    border: 1px solid white;
  }
  .more:hover {
    background-color: white;
    color: black;
    transition: all 0.2s ease-in-out;
  }
`;
export default Hero;
