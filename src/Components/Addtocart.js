import React, { useState } from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import CartamountToggle from "./CartamountToggle";
import { useCartContext } from "../context/cartContext";
const Addtocart = ({ product }) => {
  const { addtocart } = useCartContext();
  const { colors, id, stock } = product;
  const [color, setcolor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  return (
    <Wrapper>
      <div>
        <p>Colors:</p>
        {colors &&
          colors.map((currColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: currColor }}
                className={color === currColor ? "btn active" : "btn"}
                onClick={() => {
                  setcolor(currColor);
                }}
              >
                {colors === currColor ? (
                  <FaCheck className="checkstyle" />
                ) : null}
              </button>
            );
          })}
      </div>
      <hr />
      <CartamountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink to="/cart">
        <button
          className="addtocart"
          onClick={() => addtocart(id, color, product, amount)}
        >
          Add to cart
        </button>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  div {
    display: flex;
    align-items: center;
  }
  .btn {
    border: none;
    outline: none;
    height: 2rem;
    width: 2rem;
    margin-left: 1.2rem;
    /* background-color: #000; */
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;
  }
  &:hover {
    opacity: 1;
  }
  .active {
    opacity: 1;
  }
  .checkstyle {
    color: red;
    font-size: 2rem;
  }
  .amount {
    margin: 0 0.8rem;
  }
  .itemValue {
    display: flex;
    align-items: center;
    margin-top: 1.4rem;
  }
  .value-btn {
    border: none;
    outline: none;
    background-color: light-grey;
    padding: 1rem;
  }
  .value-icon {
    height: 1.7rem;
    width: 1.7rem;
  }
  hr {
    margin-top: 3rem;
  }
`;
export default Addtocart;
