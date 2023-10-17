import React from "react";

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      let pricearray = action.payload.map((currElem) => currElem.price);

      // 1st way to get the maximum value in an array

      // console.log(Math.max.apply(null, pricearray));

      // 2nd way to get the maximum value in an array

      // let maxprice = pricearray.reduce(
      //   (initialval, maxval) => Math.max(initialval, maxval),
      //   0
      // );
      // console.log(maxprice);

      // 3rd way to get the maximum value in an array
      let maxprice = Math.max(...pricearray);
      // console.log(maxprice);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filter: { ...state.filter, maxprice, price: maxprice }
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false
      };
    case "SET_SORTING":
      // let userSort_value = document.getElementById("sort");
      // let sortvalueInput =
      //   userSort_value.options[userSort_value.selectedIndex].value;
      return {
        ...state,
        sort_value: action.payload
      };
    case "SORT_PRODUCTS":
      let newsortdata;
      // let tempsortdata = [...action.payload];
      const { filter_products } = state;
      let tempsortdata = [...filter_products];

      const Compare = (a, b) => {
        if (state.sort_value === "lowest") {
          return a.price - b.price;
        }
        if (state.sort_value === "heighest") {
          return b.price - a.price;
        }
        if (state.sort_value === "A-Z") {
          return a.name.localeCompare(b.name);
        }
        if (state.sort_value === "Z-A") {
          return b.name.localeCompare(a.name);
        }
      };

      // if (state.sort_value === "lowest") {
      //   const Compare = (a, b) => {
      //     return a.price - b.price;
      //   };
      //   newsortdata = tempsortdata.sort(Compare);
      // }
      // if (state.sort_value === "heighest") {
      //   const Compare = (a, b) => {
      //     return b.price - a.price;
      //   };
      //   newsortdata = tempsortdata.sort(Compare);
      // }
      // if (state.sort_value === "A-Z") {
      //   newsortdata = tempsortdata.sort((a, b) => a.name.localeCompare(b.name));
      // }
      // if (state.sort_value === "Z-A") {
      //   newsortdata = tempsortdata.sort((a, b) => b.name.localeCompare(a.name));
      // }
      newsortdata = tempsortdata.sort(Compare);
      return {
        ...state,
        filter_products: newsortdata
      };

    case "UPDATE_FILTER_PRODUCT":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value
        }
      };
    case "DISPLAY_SEARCH_DATA":
      let { all_products } = state;
      let Searchdata = [...all_products];
      const { text, category, company, colors, price } = state.filter;
      if (text) {
        Searchdata = Searchdata.filter((currElem) => {
          return currElem.name.toLowerCase().includes(text);
        });
      }
      if (category !== "All") {
        Searchdata = Searchdata.filter((currElem) => {
          return currElem.category === category;
        });
      }
      if (company !== "All") {
        Searchdata = Searchdata.filter((currElem) => {
          return currElem.company === company;
        });
      }
      if (colors !== "All") {
        Searchdata = Searchdata.filter((currElem) =>
          currElem.colors.includes(colors)
        );
      }
      if (price === 0) {
        Searchdata = Searchdata.filter((currElem) => currElem.price === price);
      } else {
        Searchdata = Searchdata.filter((currElem) => currElem.price <= price);
      }
      return {
        ...state,
        filter_products: Searchdata
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filter: {
          ...state.filter,
          text: "",
          category: "All",
          company: "All",
          colors: "All",
          maxprice: 0,
          price: state.filter.maxprice,
          minprice: state.filter.maxprice
        }
      };
    default:
      return state;
  }
};
export default FilterReducer;
