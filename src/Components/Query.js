import React from "react";
import { styled } from "styled-components";

const Query = () => {
  return (
    <Wrapper>
      <div className="box-wrapper">
        <div className="query-head">
          <p>Have any queries?</p>
          <h1>We're here to help.​</h1>
        </div>
        <div className="query-box-parent">
          <div className="query-box">
            <h1>Sales</h1>
            <p className="text">
              Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
            <p className="number">1800 123 4567</p>
          </div>
          <div className="query-box">
            <h1>Complaints</h1>
            <p className="text">
              Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
            <p className="number">1900 223 8899</p>
          </div>
          <div className="query-box">
            <h1>Returns</h1>
            <p className="text">
              Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
            <p className="number">returns@mail.com</p>
          </div>
          <div className="query-box">
            <h1>Marketing</h1>
            <p className="text">
              Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
            <p className="number">1700 444 5578</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #d3d3d3;
  .box-wrapper {
    width: 85%;
    margin: 0 auto;
    text-align: center;
    padding: 6rem 0;
    padding-bottom: 15rem;
  }
  .query-head p {
    font-size: 2rem;
    font-family: cursive;
  }
  .query-head h1 {
    font-size: 5rem;
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
  .query-box-parent {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    margin: 0 auto;
  }
  .query-box {
    width: 25%;
    text-align: center;
    color: black;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 4rem 3rem;
    background-color: white;
    line-height: 36px;
    border-radius: 10px;
  }
  .query-box h1 {
    font-size: 3rem;
    margin-bottom: 1.3rem;
  }
  .text {
    font-size: 1.9rem;
  }
  .number {
    color: blue;
    font-size: 2.5rem;
  }
`;
export default Query;
