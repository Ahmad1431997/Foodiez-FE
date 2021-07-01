import { Link, Redirect, useParams } from "react-router-dom";

// Components

import { useSelector } from "react-redux";


import IngredientsList from "../ingredients/IngredientsList";
const RecipeDetail = () => {
  const ingredientLoading=useSelector((state)=>state.ingredients.loading)
  const recipeLoading = useSelector(state => state.recipes.loading)
  const recipes = useSelector((state) => state.recipes.recipes);
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const recipeSlug = useParams().recipeSlug;
  const recipe = recipes.find(
    (recipe) => recipe.slug === recipeSlug
  );
  console.log(recipe)

  if (!recipe||recipeLoading || ingredientLoading) return <Redirect to="/recipes" />;
const getIngredientById = (ingredientId, ingredients) => 
    ingredients.find((ingredient) => ingredient.id === ingredientId);

    
  const listOfIngredients = recipe.ingredients? recipe.ingredients.map((ingredient) =>getIngredientById(ingredient.id, ingredients)) : []
  
 
    
  return (
    <div>
      
      <Link to="/recipes">Back to Recipes</Link>
      {/* <Link to={`/recipes/${recipe.id}/ingredients/new`}  >Add Ingredient</Link> */}
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} style={{width:"250px",height:"250px"}} /><br/>
      <iframe width="550px" height="350px" src={recipe.video}>
      </iframe>

      {recipeLoading?<h3>Loading..</h3>:<IngredientsList ingredients={listOfIngredients} />}
      
    </div>
  );
};

export default RecipeDetail;