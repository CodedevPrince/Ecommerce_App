import React from "react";
import { styled } from "styled-components";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { useFilterContext } from "../context/FilterContext";

const Sort = () => {
  const { grid_view, Setgridview, Setlistview, Sorting } = useFilterContext();

  return (
    <Wrapper>
      <div className="box-wrapper">
        <div className="btn-box">
          <button
            className={grid_view ? "active sort-btn" : "sort-btn"}
            onClick={Setgridview}
          >
            <BsFillGrid3X3GapFill className="icon" />
          </button>
          <button
            className={grid_view ? "sort-btn" : "active sort-btn"}
            onClick={Setlistview}
          >
            <BsListUl className="icon" />
          </button>
        </div>
        <div>
          <h2>Sort by popularity</h2>
        </div>
        <div>
          <form action="#">
            <label for="sort"></label>
            <select
              name="sort"
              id="sort"
              className="sort-apply"
              onClick={Sorting}
            >
              <option value="lowest">Low to High</option>
              <option value="heighest">High to Low</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: white;
  .box-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }
  .btn-box {
    display: flex;
    gap: 10px;
  }
  .sort-btn {
    border: none;
    outline: none;
    padding: 0.7rem;
  }
  .active {
    background-color: black;
    color: white;
  }
  .icon {
    height: 2rem;
    width: 2rem;
  }
  .sort-apply {
    padding: 1rem 2rem;
  }
`;

export default Sort;
