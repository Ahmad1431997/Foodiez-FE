import { ADD_RECIPE, FETCH_RECIPES } from "../actions/types";



const initialState = {
    recipes: [],
    loading: true
}

const recipeReducer = (state=initialState, action) => {
    switch (action.type){
        case FETCH_RECIPES:
            return {
                ...state,
                recipes: action.payload.recipes, 
                loading: false
            };
          case ADD_RECIPE:
            const {newRecipe} = action.payload;
            return{
                ...state, 
                recipes: [...state.recipes, newRecipe]
            };
        default: return state;
    };
};

export default recipeReducer;