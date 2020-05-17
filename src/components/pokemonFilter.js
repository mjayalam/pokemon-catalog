import React, { useState, useEffect } from 'react';
import {fetchFilters} from '../services/pokemons';
import PokemonList from './pokemonList';


const PokemonFilter = () => {
  const [filters,setFilters] = useState({});
  useEffect(() => {
		async function getFilters(){
			const response = await fetchFilters();
			console.log(response);
			setFilters(response);
		}
		getFilters();
  },[]);

  return(
      <div className="card sticky-top">
        <div className="card-header">
          Filter your listed pokemons
        </div>
        <div className="card-body">
          <select>
            <option value="-1">Choose a category</option>
            <option value={filters.ability}>Ability</option>
          </select>
        </div>
        
      </div>
  );

}

export default PokemonFilter;