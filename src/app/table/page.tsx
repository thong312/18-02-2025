'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Pokemon {
  name: string;
  url: string;
  image?: string;
}

export default function Page() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemonList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(pokemonList.length / itemsPerPage);

  return (
    <div className="min-h-scree p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Pokémon List</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map(pokemon => (
          <li key={pokemon.name} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:scale-105 transition">
            <a href={pokemon.url} className="flex flex-col items-center">
              <Image 
                src={pokemon.image || '/path/to/fallback-image.png'} 
                alt={pokemon.name} 
                width={96} 
                height={96} 
                className="w-24 h-24 object-contain mb-3" 
              />
              <span className="text-lg font-semibold capitalize text-gray-700">{pokemon.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-1">{currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
