import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer";

const AppContext = createContext();
const API = `https://api.pujakaitem.com/api/products`;
const initialState = {
  isLoading: false,
  isError: false,
  isSingleLoading: false,
  isSingleError: false,
  products: [],
  FeaturedProduct: [],
  Singleproduct: {}
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      // console.log(res);
      dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // 2nd api call function for SingleProduct

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleitem = await res.data;
      dispatch({ type: "MY_SINGLE_PRODUCT", payload: singleitem });
    } catch (error) {
      dispatch({ type: "API_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};

export { DataProvider, AppContext, useAppContext };
