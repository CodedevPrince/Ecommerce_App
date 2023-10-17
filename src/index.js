import React from "react";
import { createRoot } from "react-dom"; // Import createRoot from the correct path
import App from "./App";
import { DataProvider } from "./context/productcontex";
import { FilterContextprovider } from "./context/FilterContext";
import { Cartprovider } from "./context/cartContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <DataProvider>
    <FilterContextprovider>
      <Cartprovider>
        <App />
      </Cartprovider>
    </FilterContextprovider>
  </DataProvider>
);
