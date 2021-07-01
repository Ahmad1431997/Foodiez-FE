import ingredientRducer from "./ingredientReducer";
import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import recipeReducer from "./recipeReducer";


const rootReducer = combineReducers({
  ingredients: ingredientRducer,
  categories : categoryReducer,
  recipes: recipeReducer
})

export default rootReducer;