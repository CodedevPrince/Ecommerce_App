import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";
const Contact_hero = () => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <div className="box-wrapper">
          <div className="contact-img">
            <div className="img-text">
              <h1>Contact US</h1>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .contact-img {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("./images/contact-img.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: contain;
    background-position: center;
    height: 53vh;
    width: 100vw;
  }
  .img-text {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 4rem;
    height: 100%;
    width: 100%;
  }
`;
export default Contact_hero;
