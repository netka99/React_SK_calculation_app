const initState = {
  data: [],
  kartacze: [],
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state };
    default:
      return { ...state };
  }
};

export default productReducer;
