import axios from "axios";
import { productDataURL } from "../api";

//Action Creator

export const loadProductData = () => async (dispatch) => {
  //FETCH AXIOS
  const productData = await axios.get(productDataURL());
  dispatch({
    type: "FETCH_DATA",
    payload: {
      data: productData.data.data,
    },
  });
};
