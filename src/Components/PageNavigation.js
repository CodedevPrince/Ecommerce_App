import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
const PageNavigation = (props) => {
  return (
    <Wrapper>
      <div className="goback">
        <NavLink to="/" className="goback">
          <h4>Home</h4>
        </NavLink>
        <h4>/{props.title}</h4>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .goback {
    display: flex;
  }
  .goback h4 {
    font-size: medium;
  }
`;
export default PageNavigation;
