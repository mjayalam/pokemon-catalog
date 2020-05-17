const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async () => {
    const response = await fetch(`${BASE_URL}/pokemon/`);
    const data = await response.json();
    return data;
}

export const fetchFilters = async () => {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    return data;
}

export const fetchNextPokemons = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const fetchPokemon = async (id) => {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`);
    const data = await response.json();
    return data;
}