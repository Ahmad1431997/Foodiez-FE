import {createStore , compose, applyMiddleware } from "redux"

import thunk from "redux-thunk";
import { fetchCategories } from "../actions/categoryActions";
import { fetchIngredients } from "../actions/ingredientActions";
import { fetchRecipes } from "../actions/recipeActions";

import rootReducer from "./rootReducer";


const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchCategories())
store.dispatch(fetchIngredients())
store.dispatch(fetchRecipes())

export default store;