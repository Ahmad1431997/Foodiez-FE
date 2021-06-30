// Styling
// import { ListWrapper } from "../styles";
// Components
import SearchBar from "../SearchBar";

import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import IngredientItem from "./IngredientItem";

const IngredientsList = (props) => {

  // const products = useSelector((state)=> state.products.products)
  const ingredients= props.ingredients;
//   console.log(Ingredients)
  const [query, setQuery] = useState("");

  const ingredientList = ingredients
    .filter((ingredient) =>
    ingredient.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((ingredient) => (
      <IngredientItem
      ingredient={ingredient}
        key={ingredient.id}

      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {/* <Link to="/products/FormProduct">
      <button type="button" class="btn btn-secondary">Add a Product</button>
        </Link> */}
      <div>{ingredientList}</div>
    </div>
  );
};

export default IngredientsList;