// import { LibraryItem } from "../../styles";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const category = props.category;
  return (
    <div>
        <Link to={`/categories/${category.slug}`}>
      <h3>{category.name}</h3>
      </Link>
        <img src={category.img} />

    </div>
  );
};
export default CategoryItem;