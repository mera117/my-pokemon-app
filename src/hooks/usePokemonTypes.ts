import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const usePokemonTypes = () => {
  return useQuery<string[], Error>({
    queryKey: ['pokemonTypes'],
    queryFn: async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/type')
      return res.data.results.map((t: any) => t.name)
    },
    staleTime: 1000 * 60 * 60,
  })
}
