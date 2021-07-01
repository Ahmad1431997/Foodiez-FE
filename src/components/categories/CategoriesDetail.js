import { Link, Redirect, useParams } from "react-router-dom";

// Components

import { useSelector } from "react-redux";

import IngredientsList from "../ingredients/IngredientsList";
const CategoriesDetail = () => {
  const ingredientLoading = useSelector((state) => state.ingredients.loading);
  const categoryLoading = useSelector((state) => state.categories.loading);
  const categories = useSelector((state) => state.categories.categories);
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const categorySlug = useParams().categorySlug;
  const category = categories.find(
    (category) => category.slug === categorySlug
  );
  console.log(category);

  if (!category || categoryLoading || ingredientLoading)
    return <Redirect to="/categories" />;
  const getIngredientById = (ingredientId, ingredients) =>
    ingredients.find((ingredient) => ingredient.id === ingredientId);

  const listOfIngredients = category.ingredients
    ? category.ingredients.map((ingredient) =>
        getIngredientById(ingredient.id, ingredients)
      )
    : [];

  return (
    <div>
      <Link to="/categories">Back to Categories</Link>
      <Link to={`/categories/${category.id}/ingredients/new`}>
        Add Ingredient
      </Link>
      <h1>{category.name}</h1>
      <img
        src={category.image}
        alt={category.name}
        style={{ width: "250px", height: "250px" }}
      />
      <br />
      <br />

      {categoryLoading ? (
        <h3>Loading..</h3>
      ) : (
        <IngredientsList ingredients={listOfIngredients} />
      )}
    </div>
  );
};

export default CategoriesDetail;
