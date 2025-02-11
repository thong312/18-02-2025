'use client'
import React, { useEffect, useState } from 'react';

interface Pokemon {
  name: string;
  url: string;
  image?: string;
}

export default function Page() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      .then(response => response.json())
      .then(data => {
        const fetches = data.results.map((pokemon: Pokemon) =>
          fetch(pokemon.url)
            .then(response => response.json())
            .then(details => ({
              name: pokemon.name,
              url: pokemon.url,
              image: details.sprites.front_default,
            }))
        );
        Promise.all(fetches).then(setPokemonList);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center bg-custom">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Pokémon List</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonList.map(pokemon => (
          <li key={pokemon.name} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:scale-105 transition">
            <a href={pokemon.url} className="flex flex-col items-center">
              <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 object-contain mb-3" />
              <span className="text-lg font-semibold capitalize text-gray-700">{pokemon.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
