import { ADD_CATEGORY, FETCH_CATEGORIES } from "../actions/types";

const initialState = {
  categories: [],
  loading: true,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      const { category } = action.payload;
      return {
        ...state,
        categories: [...state.categories, category],
      };
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default categoryReducer;
