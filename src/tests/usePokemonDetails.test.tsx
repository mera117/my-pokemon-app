/// <reference types="jest" />
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { usePokemonDetails } from '@/hooks/usePokemonDetails'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import type { PropsWithChildren } from 'react'

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokemon/:name', (req, res, ctx) => {
    const { name } = req.params
    return name === 'charmander'
      ? res(ctx.json({
          id: 4,
          name: 'charmander',
          sprites: { front_default: '', other: {} },
          types: [{ type: { name: 'fire' } }],
          height: 6,
          weight: 85,
          abilities: [{ ability: { name: 'blaze' } }]
        }))
      : res(ctx.status(404))
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

test('fetches pokemon details for "charmander"', async () => {
  const wrapper = createWrapper()
  const { result } = renderHook(() => usePokemonDetails('charmander'), { wrapper })

  await waitFor(() => result.current.isSuccess)

  expect(result.current.data?.name).toBe('charmander')
  expect(result.current.data?.types?.[0]?.type?.name).toBe('fire')
})
