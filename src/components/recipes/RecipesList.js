import { useState } from "react";
import SearchBar from "../SearchBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem";



const RecipesList = ()=>{
    const [query, setQuery] = useState("");
  
    const recipesData = useSelector((state) => state.recipes.recipes);
    let recipes = recipesData
      .filter((recipe) =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      )
      .map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />);



    return(
        <div>
            <Link to="/recipes/new">Add New Recipe</Link>
      <SearchBar setQuery={setQuery}  />
      
      {recipes}
        </div>
    );
}

export default RecipesList;