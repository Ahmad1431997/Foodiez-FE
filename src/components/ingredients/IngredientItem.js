


// Components

import { Link } from "react-router-dom";
// Styling
// import { IngredientWrapper } from "../styles";

const IngredientItem = (props) => {
 
  const ingredient=props.ingredient
  return (
    <div>
       
        <img alt={ingredient.name} src={ingredient.image} />
     
      <p>{ingredient.name}</p>
      
     
      
    </div>
  );
};

export default IngredientItem;