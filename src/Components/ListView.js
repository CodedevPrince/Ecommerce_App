import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import FeatureProduct from "./FeatureProduct";

const ListView = ({ product }) => {
  return (
    <Wrapper>
      <div className="grid grid-single-column">
        {product &&
          product.map((currElem, index) => {
            const {
              id,
              name,
              image,
              category,
              price,
              review,
              description
            } = currElem;
            return (
              <div className="card">
                <div>
                  <img src={image} alt={name} className="img" />
                </div>
                <div className="card-data">
                  <p className="category">{category}</p>
                  <h3 className="name">{name}</h3>
                  <p className="card-data--price">$ {price}</p>
                  <p className="card-data-description">
                    {description.slice(0, 120)}....
                  </p>
                  <NavLink to={`/singleproduct/${id}`}>
                    <button className="btn">Read more</button>
                  </NavLink>
                </div>
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: white;
  width: 90%;
  padding: 4rem;
  .card-data {
  }
  .card {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    gap: 3rem;
    border: 1px solid #d3d3d3;
    padding: 2rem;
  }
  .img {
    height: 20rem;
    width: 27rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .category {
    font-size: 1.7rem;
  }
  .name {
    font-size: 2.4rem;
    margin: 0.6rem 0;
  }
  .card-data--price {
    font-size: 2.6rem;
    margin-bottom: 0.6rem;
  }
  .card-data-description {
    font-size: 1.6rem;
    line-height: 3rem;
  }
  .btn {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 1rem;
    padding: 1rem 2rem;
    cursor: pointer;
  }
`;
export default ListView;
