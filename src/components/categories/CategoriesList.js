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
    <><br/>
    <div className="row"><br/><br/>
      <Link style={{textDecoration:"none",backgroundColor:"darkcyan",width:"200px",margin:"auto",color:"white"}} to="/categories/new">Add New Category</Link><br/><br/>
      <SearchBar setQuery={setQuery}  /><br/><br/><br/>
      
      <div className="row">{categories}</div>
      
    </div>
    </>
  );
};

export default CategoriesList;