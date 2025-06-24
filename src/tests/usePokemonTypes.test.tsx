import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { usePokemonTypes } from '@/hooks/usePokemonTypes'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import type { PropsWithChildren } from 'react'

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/type', (_req, res, ctx) =>
    res(ctx.json({ results: [{ name: 'fire' }, { name: 'water' }] }))
  )
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

test('returns pokemon types', async () => {
  const wrapper = createWrapper()
  const { result } = renderHook(() => usePokemonTypes(), { wrapper })

  await waitFor(() => result.current.isSuccess)

  expect(result.current.data).toEqual(['fire', 'water'])
})
