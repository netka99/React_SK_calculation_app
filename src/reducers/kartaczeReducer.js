const initState = {
  sklep: "",
  kartacze: "",
};

const kartaczeReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_KARTACZE":
      return { ...state };
    default:
      return { ...state };
  }
};

//ACTION CREATOR
const fetchKartacze = (userData) => {
  return {
    type: "FETCH_KARTACZE",
  };
};
export default kartaczeReducer;
