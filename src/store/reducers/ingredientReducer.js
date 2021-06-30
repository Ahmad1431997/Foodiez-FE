import { ADD_INGREDIENT, FETCH_INGREDIENTS } from "../actions/types";


const initialState = {
    ingredients: [], 
    loading:true,
  };


  const ingredientRducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_INGREDIENT:
     
      const {ingredient}= action.payload
      return {
        ...state,
        ingredients: [...state.ingredients, ingredient],
      };

      case FETCH_INGREDIENTS:
        return {
          ...state,
          ingredients: action.payload,
          loading:false,
        };
  
      default:
        return state;

    }
  }

  export default ingredientRducer;