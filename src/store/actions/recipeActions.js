import axios from "axios";
import { ADD_RECIPE,FETCH_RECIPES } from "./types";



export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:8080/recipes`);
      dispatch({
        type: FETCH_RECIPES,
        payload: { recipes: res.data },
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const createRecipe = (newRecipe) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
     const ingredientIds=[1,2,3,4,5].join(",")
      for (const Key in newRecipe)
       formData.append(Key, newRecipe[Key]);
      const res = await axios.post(`http://localhost:8080/recipes`,formData,ingredientIds);
      
      dispatch({
        type: ADD_RECIPE,
        payload: { newRecipe: res.data },
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};