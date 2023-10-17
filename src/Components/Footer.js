import React from "react";
import { styled } from "styled-components";
import { IoLogoFacebook } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper>
      <div className="box-wrapper">
        <div className="sales-banner">
          <h1>
            SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
          </h1>
        </div>
        <div className="footer-box">
          <div className="footer-1">
            <h1>DNK</h1>
            <p>The best look anytime, anywhere.</p>
          </div>
          <div className="side-footer">
            <h1>For HER</h1>
            <p>Women Jeans</p>
            <p>Tops and Shirts</p>
            <p>Women Jackets</p>
            <p>Heels and Flats</p>
            <p>Women Accessories</p>
          </div>
          <div className="side-footer">
            <h1>For Him</h1>
            <p>Men Jeans</p>
            <p>Men Shirts</p>
            <p>Men Shoes</p>
            <p>Men Accessories</p>
            <p>Men Jackets</p>
          </div>
          <div className="side-footer">
            <h1>Subscribe</h1>
            <input type="text" placeholder="Your email address..." />
            <br />
            <br />
            <br />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="lower-footer">
          <p>Copyright © 2023 Brandstore. Powered by Brandstore.</p>
          <div className="lower-footer-left">
            <IoLogoFacebook />
            <BsTwitter />
            <BsYoutube />
            <AiOutlineGoogle />
            <BsInstagram />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: white;
  .sales-banner {
    padding: 4rem 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    font-size: 1.6rem;
    border: inset;
    padding-left: 16rem;
  }
  .footer-box {
    display: flex;
    justify-content: space-between;
    width: 78%;
    margin: 0 auto;
    padding-top: 7rem;
    padding-bottom: 10rem;
  }
  .footer-1 h1 {
    font-size: 3.8rem;
    margin-bottom: 2rem;
  }
  .footer-1 p {
    font-size: 3rem;
  }
  .side-footer {
    margin-top: 1.7rem;
  }
  .side-footer h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .side-footer p {
    font-size: 1.6rem;
    margin-bottom: 1.3rem;
    font-weight: 200;
  }
  .side-footer input {
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
  }
  .side-footer input:focus {
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
  }
  button {
    padding: 1rem 2.5rem;
    background-color: blue;
    color: white;
    font-size: 2rem;
    outline: none;
    border: none;
  }
  .lower-footer {
    padding: 2rem 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border: inset;
    padding-left: 16rem;
  }
  .lower-footer p {
    font-size: 1.9rem;
    font-weight: 200;
  }
`;

export default Footer;
