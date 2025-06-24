
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const usePokemonByType = (type: string) => {
  return useQuery<string[], Error>({
    queryKey: ['pokemonByType', type],
    enabled: !!type,
    queryFn: async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
      return res.data.pokemon.map((p: any) => p.pokemon.name)
    },
    staleTime: 1000 * 60 * 60,
  })
}
