import React from 'react';
import {Link} from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import Title from '../components/Title';
import RecipeCard from '../components/RecipeCard';

function Home() {



  return (
    <>
        <div className="displayFlex alignCenter flexColumn positionFixedTitle">
          <Title/>
          <SearchBar/>
        </div>
    </>
  );
}

export default Home
