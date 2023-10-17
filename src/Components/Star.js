import React from "react";
import { styled } from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (CurrElem, index) => {
    let number = index + 0.5;
    return stars >= index + 1 ? (
      <AiTwotoneStar className="icon" />
    ) : stars >= number ? (
      <BsStarHalf className="icon" />
    ) : (
      <AiOutlineStar className="icon" />
    );
  });
  return (
    <Wrapper>
      <span>{ratingStar}</span>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .icon {
    /* background-color: yellow; */
    color: yellow;
    margin-right: 0.5rem;
    height: 2rem;
    width: 2rem;
  }
`;
export default Star;
