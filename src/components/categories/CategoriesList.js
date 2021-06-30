import CategoryItem from "./CategoryItem";
import { useState } from "react";
import SearchBar from "../SearchBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  const [query, setQuery] = useState("");
  
  const categoriesData = useSelector((state) => state.categories.categories);
  let categories = categoriesData
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem category={category} key={category.id} />);

    
  return (
    <div>
      <Link to="/categories/new">Add New Category</Link>
      <SearchBar setQuery={setQuery}  />
      
      {categories}
      
    </div>
  );
};

export default CategoriesList;