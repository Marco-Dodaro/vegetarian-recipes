import React, {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';


export default function SingleRecipe() {

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  let params = useParams();

  async function fetchRecipe(e) {
       try {
         const response = await axios.get(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
         setDatas(response.data);
         setLoading(true);
       } catch (error) {
         console.log(error);
       }
    }


  useEffect (() => {
    fetchRecipe();
  }, [fetchRecipe]);

  return (
    <div className="displayFlex alignCenter divWrapper">
      <div className="recipeContainer displayFlex alignCenter flexColumn">
       <h2 className="recipeTitle">{datas.title}</h2>
       <img src={loading ? (datas.image) : <Loading/>} alt={datas.title} className="recipeImg"/>
       <h3 className="subtitle">Ingredients:</h3>
       <ul className="">
         {loading ? (datas.extendedIngredients?.map((ingredient) => (
           <li key={ingredient.id}>{ingredient.original}</li>
         ))) : <Loading/>}
       </ul>
        <h3 className="subtitle">Instructions:</h3>
        <ol className="customCounter">
          {loading ? (datas.analyzedInstructions?.map((instructions) => (
            instructions.steps.map((toDo) => (
              <li key={toDo.number}>{toDo.step}</li>
            ))
          ))) : <Loading/>}
        </ol>
      </div>
    </div>
  )
}
