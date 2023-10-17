import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/FilterContext";

const Filtersection = () => {
  const {
    filter: { text, category, company, colors, price, minprice, maxprice },
    all_products,
    Updatefilterproduct,
    Clearfilter
  } = useFilterContext();

  //  Get the unique data

  const getUniquedata = (data, attr) => {
    let newVal = data.map((currElem) => {
      return currElem[attr];
    });
    if (attr === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }
    // newVal = [...new Set(newVal)];
    // console.log(newVal);
    return (newVal = ["All", ...new Set(newVal)]);
  };

  // We need a unique data for different sorting options

  const categorydata = getUniquedata(all_products, "category");
  // console.log(categorydata);
  const companydata = getUniquedata(all_products, "company");
  // console.log(companydata);
  const colordata = getUniquedata(all_products, "colors");
  // console.log(colordata);

  return (
    <Wrapper>
      <div className="input-box">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search"
            name="text"
            value={text}
            onChange={Updatefilterproduct}
          />
        </form>
      </div>
      <div className="Category-box">
        <h1>Category</h1>
        <div className="categories">
          {categorydata.map((currElem, index) => {
            return (
              <button
                className="Category-btn"
                key={index}
                type="button"
                name="category"
                value={currElem}
                onClick={Updatefilterproduct}
              >
                {currElem}
              </button>
            );
          })}
        </div>
        <div className="company-category">
          <form action="#">
            <select name="company" id="company" onClick={Updatefilterproduct}>
              {companydata.map((currElem, index) => {
                return (
                  <option key={index} value={currElem} name="company">
                    {currElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>
      <div className="color-box">
        {colordata.map((currCol, index) => {
          if (currCol === "All") {
            return (
              <button
                key={index}
                type="button"
                value={currCol}
                name="colors"
                onClick={Updatefilterproduct}
                className="All-color"
              >
                All
              </button>
            );
          }
          return (
            <button
              key={index}
              type="button"
              value={currCol}
              name="colors"
              onClick={Updatefilterproduct}
              style={{ backgroundColor: currCol }}
              className="filter-color"
            >
              {colors === currCol ? "" : null}
            </button>
          );
        })}
      </div>
      <div className="price-filter">
        <h3>Price</h3>
        <p>{price}</p>
        <input
          type="range"
          name="price"
          value={price}
          max={maxprice}
          min={minprice}
          onChange={Updatefilterproduct}
        />
      </div>
      <div>
        <button onClick={Clearfilter}>Clear filters</button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .categories {
    display: flex;
    flex-direction: column;
  }
  .Category-btn {
    display: inline-block;
    border: none;
    outline: none;
    margin-bottom: 1.4rem;
    color: Black;
    /* background-color: #d3d3d3; */
    background-color: red;
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .Category-btn:hover {
    border-bottom: 1px solid black;
  }
  .filter-color {
    height: 2rem;
    width: 2rem;
    /* border: none; */
    outline: none;
    border-radius: 50%;
    opacity: 0.5;
  }
  .filter-color:hover {
    opacity: 1;
  }
  .All-color {
    font-size: 2rem;
    border: none;
    outline: none;
    background-color: #d3d3d3;
    border-radius: 50%;
  }
`;

export default Filtersection;
