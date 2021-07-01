import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoriesList from './components/categories/CategoriesList';
import NavBar from './components/NavBar';
import {Route , Switch} from "react-router-dom"
import CategoriesDetail from './components/categories/CategoriesDetail';
import IngredientsList from './components/ingredients/IngredientsList';
import {useSelector} from "react-redux";
import CategoryForm from './components/categories/CategoryFom';
import IngredientForm from './components/ingredients/IngredientForm';
import RecipesList from './components/recipes/RecipesList';
import RecipeDetail from './components/recipes/ReceipeDetail';
import RecipeFrom from './components/recipes/RecipeForm';


function App() {
  const ingredients= useSelector(state => state.ingredients.ingredients)
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/categories/:categoryId/ingredients/new">
        <IngredientForm/>
      </Route>
        <Route exact path="/categories/new" >
          <CategoryForm/>
        </Route>
        <Route exact path="/recipes/new">
          <RecipeFrom/>
        </Route>
        <Route exact path="/categories/:categorySlug">
          <CategoriesDetail/>
        </Route>
        <Route exact path="/recipes/:recipeSlug">
          <RecipeDetail/>
        </Route>
       
        <Route exact path="/categories">
     <CategoriesList />
     </Route>
        <Route exact path="/ingredients">
          <IngredientsList ingredients={ingredients} />
        </Route>
        <Route exact path="/recipes">
          <RecipesList/>
        </Route>
     
     </Switch>
    </div>
  );
}

export default App;
