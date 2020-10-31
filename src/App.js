import React, { useEffect, useState } from 'react';
import './App.scss';
import Recipe from './Recipe'

const App = () => {

  const APP_ID = 'fafc2139';
  const API_KEY = 'dbc09a36ccd060b7e4a909187975c857';


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [result_search, setResult_search] = useState('');

  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${result_search}&app_id=${APP_ID}&app_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => { setRecipes(data.hits); console.log(data.hits) })
  }, [result_search])


  const updateSearch = e => {
    setSearch(e.target.value)
    if (e.key === 'Enter') {
      getSearch();
    }
  }

  const getSearch = e => {
    e.preventDefault();
    setResult_search(search);
    setSearch('');
  }

  return (
    <div className="App">
      <p className="Instruction">Write the name of product</p>
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes.length === 0 ? <div className='notfound'>Не найдено</div> :
          recipes.map(recipe => (
            <Recipe key={recipe.recipe.label} title={recipe.recipe.label} 
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
