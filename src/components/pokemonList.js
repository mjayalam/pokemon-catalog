
import React, { useState, useEffect } from 'react';
import {fetchPokemons} from '../services/pokemons.js';
import PokemonCard from './pokemonCard';
import styled from 'styled-components'
const PokemonList = () => {
	const [pokemons,setPokemons] = useState([]);
	const [previousRequest,setPreviousRequest] = useState(null);
	const [nextRequest,setNextRequest] = useState(null);
	useEffect(() => {
		async function getPokemons(){
			const response = await fetchPokemons();
			console.log(response);
			setPokemons(response.results);
			setPreviousRequest(response.prev);
			setNextRequest(response.next);
		}
		getPokemons();
	},[]);
	if(pokemons.length){
		console.log(pokemons.length)
		return (
			<div className="col-md-12">
				<div className="row">
					{pokemons.map(item => (
						<PokemonCard  key={item.name} name={item.name}></PokemonCard>
					))}
				</div>
			</div>
		);
	}else{
		return <img alt="Cargando"   src="./loading.gif"></img>;
	}

}
export default PokemonList;