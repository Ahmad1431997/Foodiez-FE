import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory, fetchCategories, updateCategory } from "../../store/actions/categoryActions";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const CategoryForm = () => {
 
  const categorySlug = useParams().categorySlug;
  const categories = useSelector((state) => state.categories.categories);


    const [category, setCategory] = useState(
       {
            name: "",
            image: "",
       } 
    );
    
  const dispatch = useDispatch();
  const history = useHistory();
  const resetForm = () => {
    setCategory({
      name: "",
      image: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
 dispatch(addCategory(category));
    history.push("/categories");
    
    resetForm();
  };
  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };
  const handleImage = (event) => {
    setCategory({ ...category, image: event.target.files[0] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label >Name of Category</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name of Category"
          onChange={handleChange}
          name="name"
          value={category.name}
        />
      </div>

      <div className="form-group">
        <label >Image of category</label>
        <input
          type="file"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Image of category"
          onChange={handleImage}
          name="image"
        //   value={category.image}
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
};

export default CategoryForm;
