import React from 'react';
import {Link} from 'react-router-dom';

export default function DisplayRecipes(recipe) {
  return (
    <Link to={'/recipe/' + recipe.recipe.id} className="noUnderline">
      <div className="recipeCard">
        <img src={recipe.recipe.image} alt={recipe.recipe.title} className="imagePreview"/>
        <h3>{recipe.recipe.title}</h3>
      </div>
    </Link>
  )
}
