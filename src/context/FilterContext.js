import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useAppContext } from "./productcontex";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialstate = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sort_value: "lowest",
  filter: {
    text: "",
    category: "All",
    company: "All",
    colors: "All",
    price: 0,
    maxprice: 0,
    minprice: 0
  }
};

export const FilterContextprovider = ({ children }) => {
  const { products } = useAppContext();
  const [state, dispatch] = useReducer(reducer, initialstate);

  // Funtion to set the grid view
  const Setgridview = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // Function to set the list view
  const Setlistview = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // Function to set the sort functionality
  const Sorting = (event) => {
    return dispatch({ type: "SET_SORTING", payload: event.target.value });
  };

  // To add the Search Functionality
  const Updatefilterproduct = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    return dispatch({
      type: "UPDATE_FILTER_PRODUCT",
      payload: { name, value }
    });
  };

  // To Clear the sorting
  const Clearfilter = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  // To sort the products

  useEffect(() => {
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, state.sort_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);

  // TO display products on Search

  useEffect(() => {
    dispatch({ type: "DISPLAY_SEARCH_DATA" });
  }, [state.filter]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        Setgridview,
        Setlistview,
        Sorting,
        Updatefilterproduct,
        Clearfilter
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
