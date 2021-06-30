import { useState } from "react";
import { useDispatch } from "react-redux";
import { addIngredient } from "../../store/actions/ingredientActions";
import { Redirect, useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const IngredientForm = () => {
  const CategoryId = useParams().categoryId
  const ingredientSlug = useParams().ingredientSlug;
  const ingredients = useSelector((state) => state.ingredients.ingredients);
    const categorySlug= useParams().categorySlug
  

  const [ingredient, setIngredient] = useState(
   {
          name: "",
          image: "",
        }
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const resetForm = () => {
    setIngredient({
      name: "",
    
      image: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addIngredient(ingredient,CategoryId));
    // history.push(`/categories/:categorySlug`);
    // <Redirect to="/categories/:categorySlug"/>
    history.push("/ingredients")
    resetForm();
    

  };
  const handleChange = (event) => {
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });
  };
  const handleImage=(event)=>{
    setIngredient({...ingredient, image:event.target.files[0]})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="exampleFormControlInput1">Name of ingredient</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name of ingredient"
          onChange={handleChange}
          name="name"
          value={ingredient.name}
        />
      </div>
     

     
      <div className="form-group">
        <label for="exampleFormControlInput1">Image of ingredient</label>
        <input
          type="file"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Image of ingredient"
          onChange={handleImage}
          name="image"
          // value={ingredient.image}
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
};

export default IngredientForm;