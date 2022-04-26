import React from 'react'
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import RecipeCard from './RecipeCard';
import axios from 'axios';


export default function SearchBar() {

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const diet = "vegetarian";
  const sort = "random";
  const recipesReturned = 10;
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&includeIngredients=${query}&diet=${diet}&sort=${sort}&number=${recipesReturned}`;


  async function fetchData(e) {
    e.preventDefault();
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      if (response.data.results.length == 0) {
        alert("No recipes found with inserted ingredients")
      } else {
      setRecipes(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
    setQuery("");
  }

  const inputRef = React.useRef(null);

  React.useEffect(()=>{
    inputRef.current.focus();
  }, []);

    return (
      <>
        <div className="searchBarBcg displayFlex">
          <form className="displayFlex flexColumn" autoComplete="off" autoCorrect="off">
            <div className="searchBar">
              <input ref={inputRef} type="text" id="searchQueryInput" className="searchBar" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ingredient,ingredient..."/>
              <button type="submit" id="searchQuerySubmit" className="searchIcon" onClick={fetchData}><FaSearch/></button>
            </div>
          </form>
          <div className="recipeDiv displayFlex">
            {recipes.map((recipe,key) => {
              return <RecipeCard key={recipe.id} recipe={recipe}/>;
            })}
          </div>
        </div>
      </>
    )

}
