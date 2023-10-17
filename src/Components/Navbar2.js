import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsFillHandbagFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { useCartContext } from "../context/cartContext";

function Navbar2() {
  const { total_quantity } = useCartContext();
  return (
    <Wrapper>
      <div className="Navbox">
        <div className="Navbox-left">
          <div className="Navbox-left-1">
            <h1 className="logo">DNK</h1>
          </div>
          <ul className="Navlist">
            <li>
              <NavLink to="/everything">Everything</NavLink>
            </li>
            <li>
              <NavLink to="/men">Men</NavLink>
            </li>
            <li>
              <NavLink to="/women">Women</NavLink>
            </li>
            <li>
              <NavLink to="/accessories">Accessories</NavLink>
            </li>
          </ul>
        </div>
        <div className="Navbox-right">
          <ul className="Navlist">
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
          <div className="Navbox-right-2">
            <h1 className="price">$0.00</h1>
            <div className="cart-value">{total_quantity}</div>
            <div className="Handbagbox">
              <BsFillHandbagFill className="bag" />
            </div>
            <BiSolidUser className="user" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .Navbox {
    /* position: absolute;  */
    z-index: 999;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 1.5rem 0;
    color: black;
    background: white;
  }
  .logo {
    font-size: 4rem;
  }
  .Navbox-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    gap: 5rem;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    li {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.textcol};
      /* color: white; */ /* You might want to remove this line since you're using the theme color above */
      margin-right: 20px;
      /* ... */
    }
  }

  .Navbox-right {
    display: flex;
    align-items: center;
    padding: 2rem 3rem;
    gap: 5rem;
  }
  .Navbox-right-2 {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .price {
    font-size: 2rem;
  }
  .bag,
  .user {
    height: 17px;
    width: 17px;
  }
  .cart-value {
    background-color: blue;
    color: white;
    border-radius: 50%;
    width: 17px;
    height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40px;
    right: 43px;
    font-weight: bolder;
  }
`;

export default Navbar2;
