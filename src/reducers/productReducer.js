const initState = {
  data: [],
  kartacze: [],
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, data: action.payload.data };
    default:
      return { ...state };
  }
};

export default productReducer;
