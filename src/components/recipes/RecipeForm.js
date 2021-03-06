import { useState } from "react";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { createRecipe } from "../../store/actions/recipeActions";

const RecipeFrom = () => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    video: "",
    ingredients: [],
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const resetForm = () => {
    setRecipe({
      name: "",
      image: "",
      video: "",
      ingredients: [],
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createRecipe(recipe));
    history.push("/recipes");

    resetForm();
  };
  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
    // console.log(event.target.value);
  };

  const handleImage = (event) => {
    setRecipe({ ...recipe, image: event.target.files[0] });
  };
  const handleOption = (event) => {
    recipe.ingredients.push(event.target.value);
    // console.log(recipe.ingredients);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name of Recipe</label>
        <input
          type="text"
          className="form-control"
          
          placeholder="Name of Recipe"
          onChange={handleChange}
          name="name"
          value={recipe.name}
        />
      </div>

      <div className="form-group">
        <label>Image of recipe</label>
        <input
          type="file"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Image of recipe"
          onChange={handleImage}
          name="image"
          //   value={recipe.image}
        />
      </div>

      <div className="form-group">
        <label>video URL</label>
        <input
          type="text"
          className="form-control"
          
          placeholder="Name of Recipe"
          onChange={handleChange}
          name="video"
          value={recipe.video}
        />
      </div>

      <div>
        <label for="ing">Choose ingredient:</label>
        <select name="ingredients" id="ing" multiple>
          {ingredients.map((ingredient) => (
            <option onClick={handleOption} value={ingredient.id}>
              {ingredient.name}
            </option>
          ))}

          {/* <option value="2">Saab</option>
          <option value="3">Opel</option>
          <option value="4">Audi</option> */}
        </select>
      </div>

      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
};

export default RecipeFrom;
