import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface PokemonDetail {
  id: number
  name: string
  sprites: {
    front_default: string
    other?: {
      dream_world?: {
        front_default?: string
      }
    }
  }
  types: {
    type: {
      name: string
    }
  }[]
  height: number
  weight: number
  abilities: {
    ability: {
      name: string
    }
  }[]
}

export const usePokemonDetails = (idOrName: string | number) => {
  return useQuery<PokemonDetail, Error>({
    queryKey: ['pokemonDetails', idOrName],
    queryFn: async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
      return response.data
    },
    enabled: !!idOrName,
    staleTime: 1000 * 60 * 10
  })
}
