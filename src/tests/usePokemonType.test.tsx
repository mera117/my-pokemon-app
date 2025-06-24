import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { usePokemonByType } from '@/hooks/usePokemonType'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import type { PropsWithChildren } from 'react'

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/type/:type', (req, res, ctx) => {
    const { type } = req.params

    if (type === 'fire') {
      return res(ctx.json({ pokemon: [{ pokemon: { name: 'charmander' } }] }))
    }

    return res(ctx.status(404), ctx.json({ error: 'Tipo no encontrado' }))
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

test('returns pokemon for type fire', async () => {
  const wrapper = createWrapper()
  const { result } = renderHook(() => usePokemonByType('fire'), { wrapper })

  await waitFor(() => result.current.isSuccess)

  expect(result.current.data).toEqual(['charmander'])
})
