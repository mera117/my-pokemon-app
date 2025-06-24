import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { usePokemonList } from '@/hooks/usePokemonList'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import type { PropsWithChildren } from 'react'

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
    const limit = req.url.searchParams.get('limit')
    const offset = req.url.searchParams.get('offset')

    if (limit === '2' && offset === '0') {
      return res(
        ctx.json({
          results: [
            { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
            { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' }
          ]
        })
      )
    }

    return res(ctx.status(404))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const createWrapper = () => {
  const queryClient = new QueryClient()
  const Wrapper = ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
  return Wrapper
}

test('returns paginated pokemon list', async () => {
  const wrapper = createWrapper()
  const { result } = renderHook(() => usePokemonList(), { wrapper })

  await waitFor(() => result.current.isSuccess)

  expect(result.current.data?.length).toBe(2)
  expect(result.current.data?.[0].name).toBe('bulbasaur')
  expect(result.current.data?.[1].name).toBe('charmander')
})
