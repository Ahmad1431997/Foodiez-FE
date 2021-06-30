import ingredientRducer from "./ingredientReducer";
import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";


const rootReducer = combineReducers({
  ingredients: ingredientRducer,
  categories : categoryReducer
})

export default rootReducer;