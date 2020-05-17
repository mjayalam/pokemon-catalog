import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PokemonList from './components/pokemonList';
import PokemonFilter from './components/pokemonFilter';
/*
Consuma los servicios del pokemon API
Haga un catalogo del listado de pokemons
Contenga filtros de tipos de pokemon
Que puedas ver los detalles de un pokemon
*/

const App = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4">
				<PokemonFilter />
				</div>
				<div className="col-md-8">
					<PokemonList/>
				</div>
			
				
			</div>
			
		</div>
		
	);
  }

ReactDOM.render(<App/>,document.querySelector("#root"));