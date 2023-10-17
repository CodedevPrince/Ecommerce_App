const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "MY_API_DATA":
      const FeaturePro = action.payload.filter((currEle) => {
        return currEle.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        FeaturedProduct: FeaturePro
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true
      };
    case "MY_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleError: false,
        isSingleLoading: true,
        Singleproduct: action.payload
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isSingleError: true
      };
    default:
      return state;
  }
};

export default ProductReducer;
