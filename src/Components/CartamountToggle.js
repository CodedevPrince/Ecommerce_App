import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const CartamountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <div className="itemValue">
      <div
        className="value-change"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          alignItems: "center"
        }}
      >
        <button
          onClick={() => setIncrease()}
          className="value-btn"
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "#d3d3d3",
            padding: "1rem",
            cursor: "pointer"
          }}
        >
          <AiOutlinePlus
            className="value-icon"
            style={{ height: "1.7rem", width: "1.7rem" }}
          />
        </button>
        <p className="amount">{amount}</p>
        <button
          onClick={() => setDecrease()}
          className="value-btn"
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "#d3d3d3",
            padding: "1rem",
            cursor: "pointer"
          }}
        >
          <AiOutlineMinus
            className="value-icon"
            style={{ height: "1.7rem", width: "1.7rem" }}
          />
        </button>
      </div>
    </div>
  );
};

export default CartamountToggle;
