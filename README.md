🧪 Proyecto Técnico: Pokédex con Next.js, React Query y Tailwind
Este proyecto es parte de una prueba técnica para desarrolladores frontend. Se trata de una aplicación web construida con Next.js, React Query, TypeScript, TailwindCSS y Jest, que consume la API pública de Pokémon y permite visualizar, filtrar y explorar datos de diferentes Pokémon.

🚀 Demo
    Aplicación desplegada: https://mi-pokedex.vercel.app ← (reemplaza por tu URL real)
    Repositorio en GitHub: https://github.com/usuario/pokedex ← (reemplaza por tu repo)



🧱 Tecnologías utilizadas
    Next.js – Framework de React para SSR/SSG
    TypeScript – Tipado estático
    TailwindCSS – Estilos rápidos y responsive
    React Query – Manejo de datos asíncronos
    Jest + MSW – Pruebas unitarias e interceptación de APIs
    PokeAPI – API pública de datos Pokémon

🧩 Estructura del proyecto

/
├── app/                        → Páginas y rutas del proyecto
│   └── components/             → Componentes específicos por vista
├── components/                → Componentes globales reutilizables
├── constants/                 → Constantes como tipos de Pokémon
├── hooks/                     → Hooks personalizados con React Query
├── public/                    → Imágenes públicas (favicon, etc.)
├── services/                  → Lógica de acceso a la API (axios)
├── styles/                    → Archivos CSS globales
├── tests/                     → Pruebas unitarias con Jest + MSW
│   └── mocks/                 → Handlers de MSW para endpoints
├── types/                     → Tipos TypeScript globales
└── utils/                     → Funciones auxiliares y helpers

✅ Funcionalidades
    📄 Página de listado de Pokémon con paginación
    🔍 Filtro por nombre y tipo de Pokémon
    📌 Vista de detalle para cada Pokémon
    🧠 Lógica encapsulada en hooks (usePokemonList, usePokemonDetails, etc.)
    💅 Estilos responsive con Tailwind
    🧪 Pruebas unitarias para hooks y componentes


🧪 Ejecutar pruebas
    npm install
    npm test

Las pruebas utilizan:
    jest
    @testing-library/react
    msw para mockear las llamadas a la API
    Cobertura de hooks como usePokemonDetails y componentes como PokemonCard
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
