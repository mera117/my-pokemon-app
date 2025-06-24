import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface Pokemon {
  name: string
  url: string
}

interface PokemonResponse {
  results: Pokemon[]
}

export const usePokemonList = () =>
  useQuery<Pokemon[], Error>({
    queryKey: ['pokemonList'],
    queryFn: async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      return response.data.results
    }
  })

