import React from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
const FeatureProduct = (currElem) => {
  const { id, name, price, image, category } = currElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <div>
          <img src={image} alt={name} className="img" />
        </div>
        <div className="card-data">
          <div className="card-data-flex">
            <figcaption>{category}</figcaption>
            <h3>{name}</h3>
            <p className="card-data--price">$ {price}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
export default FeatureProduct;
