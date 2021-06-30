// import { SearchBarStyled } from "../styles";
import { FormControl } from "react-bootstrap";

const SearchBar = (props) => {
  
    
  return (
      <center>
    <FormControl
      style={{ width: "250px" }}
      type="text"
    //   value="query"
      placeholder="Search"
      className="mr-sm-2"
      onChange={(event) => props.setQuery(event.target.value)}
    />
   
    </center>
  );
};

export default SearchBar;
