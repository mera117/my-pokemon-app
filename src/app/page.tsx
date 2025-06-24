'use client'

import { useState } from 'react'
import { usePokemonList } from '@/hooks/usePokemonList'
import { usePokemonTypes } from '@/hooks/usePokemonTypes'
import { usePokemonByType } from '@/hooks/usePokemonType'
import { PokemonCard } from '@/components/PokemonCard'
import { FilterBar } from '@/components/FilterBar'

const POKEMONS_PER_PAGE = 12

export default function Home() {
  const [nameFilter, setNameFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const { data: pokemonData, isLoading } = usePokemonList()
  const { data: typeData } = usePokemonTypes()
  const { data: allowedNames = [], isLoading: loadingType } = usePokemonByType(typeFilter)

    const filteredPokemons = pokemonData?.filter((p) =>
    p.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
    (typeFilter === '' || allowedNames.includes(p.name))
  ) ?? []

  const totalPages = Math.ceil(filteredPokemons.length / POKEMONS_PER_PAGE)
  const start = (currentPage - 1) * POKEMONS_PER_PAGE
  const currentPokemons = filteredPokemons.slice(start, start + POKEMONS_PER_PAGE)

  return (
    <main className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Pokédex</h1>

      <FilterBar
        nameFilter={nameFilter}
        typeFilter={typeFilter}
        onNameChange={(v) => {
          setNameFilter(v)
          setCurrentPage(1)
        }}
        onTypeChange={(v) => {
          setTypeFilter(v)
          setCurrentPage(1)
        }}
        types={typeData ?? []}
      />

      {isLoading || loadingType ? (
        <p className="text-center">Cargando Pokémon...</p>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {currentPokemons.map((pokemon, index) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${start + index + 1}.png`}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                ◀ Anterior
              </button>
              <span className="text-sm font-medium">
                Página {currentPage} de {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Siguiente ▶
              </button>
            </div>
          )}
        </>
      )}
    </main>
  )
}
