// import { LibraryItem } from "../../styles";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const category = props.category;
  return (
    <div className="col">
        
      <h3 >{category.name}</h3>
      <Link to={`/categories/${category.slug}`}>
        <img src={category.image} style={{width:"300px",height:"300px",borderRadius:"20px",border:"solid 3px darkblue"}} />
        </Link><br/><br/><br/>
    </div>
  );
};
export default CategoryItem;