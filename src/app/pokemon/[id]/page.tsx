'use client'

import { useState } from 'react'
import { usePokemonList } from '@/hooks/usePokemonList'
import { usePokemonTypes } from '@/hooks/usePokemonTypes'
import { PokemonCard } from '@/components/PokemonCard'
import { FilterBar } from '@/components/FilterBar'

export default function Home() {
  const [nameFilter, setNameFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('')

  const { data: pokemonData, isLoading } = usePokemonList()
  const { data: typeData } = usePokemonTypes()

  const filteredPokemons = pokemonData?.filter((p) =>
    p.name.toLowerCase().includes(nameFilter.toLowerCase())
  ) ?? []

  return (
    <main className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Pokédex</h1>

      <FilterBar
        nameFilter={nameFilter}
        typeFilter={typeFilter}
        onNameChange={setNameFilter}
        onTypeChange={setTypeFilter}
        types={typeData ?? []}
      />

      {isLoading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredPokemons.map((pokemon, index) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
            />
          ))}
        </div>
      )}
    </main>
  )
}
