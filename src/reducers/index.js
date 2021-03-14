import { combineReducers } from "redux";
import productReducer from "./productReducer";
import kartaczeReducer from "./kartaczeReducer";

const rootReducer = combineReducers({
  productData: productReducer,
  kartaczeData: kartaczeReducer,
});

export default rootReducer;
