import { Link } from "react-router-dom";

const RecipeItem = (props) => {
  const recipe = props.recipe;
  return (
    <div>
        <Link to={`/recipes/${recipe.slug}`}>
      <h3>{recipe.name}</h3>
      </Link>
        <img src={recipe.img} />

    </div>
  );
};
export default RecipeItem;