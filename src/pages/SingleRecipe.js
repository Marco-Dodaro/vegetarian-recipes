import React, {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


export default function SingleRecipe() {

  const [datas, setDatas] = useState([]);
  let params = useParams();

  async function fetchRecipe(e) {
       try {
         const response = await axios.get(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
         setDatas(response.data);
       } catch (error) {
         console.log(error);
       }
    }


  useEffect (() => {
    fetchRecipe();
  }, []);

  return (
    <div className="displayFlex alignCenter divWrapper">
      <div className="recipeContainer displayFlex alignCenter flexColumn">
       <h2 className="recipeTitle">{datas.title}</h2>
       <img src={datas.image} alt={datas.title} className="recipeImg"/>
       <h3 className="subtitle">Ingredients:</h3>
       <ul className="">
         {datas.extendedIngredients?.map((ingredient) => (
           <li key={ingredient.id}>{ingredient.original}</li>
         ))}
       </ul>
        <h3 className="subtitle">Instructions:</h3>
        <ol className="customCounter">
          {datas.analyzedInstructions?.map((instructions) => (
            instructions.steps.map((toDo) => (
              <li key={toDo.number}>{toDo.step}</li>
            ))
          ))}
        </ol>
      </div>
    </div>
  )
}
