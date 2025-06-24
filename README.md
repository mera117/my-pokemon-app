# 🧪 Proyecto Técnico: Pokédex con Next.js, React Query y Tailwind

Este proyecto es parte de una prueba técnica para desarrolladores frontend. Se trata de una aplicación web construida con **Next.js**, **React Query**, **TypeScript**, **TailwindCSS** y **Jest**, que consume la API pública de Pokémon y permite visualizar, filtrar y explorar datos de diferentes Pokémon.

---

## 🚀 Demo

- 🌐 **Aplicación desplegada:** [my-pokemon-app en Vercel](https://my-pokemon-app-chi-five.vercel.app/)
- 💻 **Repositorio en GitHub:** [github.com/mera117/my-pokemon-app](https://github.com/mera117/my-pokemon-app)

---

## 🧱 Tecnologías Utilizadas

- ⚛️ **Next.js** – Framework de React para SSR/SSG
- 🧑‍💻 **TypeScript** – Tipado estático robusto
- 🎨 **TailwindCSS** – Estilos rápidos y responsive
- 🔁 **React Query** – Manejo de datos asíncronos
- 🧪 **Jest + MSW** – Pruebas unitarias e interceptación de APIs
- 🔍 **PokeAPI** – API pública de datos Pokémon

---

## 🧩 Estructura del Proyecto
```text
/
├── app/              → Páginas y rutas del proyecto
│   └── components/   → Componentes específicos por vista
├── components/       → Componentes globales reutilizables
├── constants/        → Constantes como tipos de Pokémon
├── hooks/            → Hooks personalizados con React Query
├── public/           → Imágenes públicas (favicon, etc.)
├── services/         → Lógica de acceso a la API (axios)
├── styles/           → Archivos CSS globales
├── tests/            → Pruebas unitarias con Jest + MSW
│   └── mocks/        → Handlers de MSW para endpoints
├── types/            → Tipos TypeScript globales
└── utils/            → Funciones auxiliares y helpers
```
---

## ✅ Funcionalidades

- 📄 Listado de Pokémon con paginación
- 🔍 Filtro por nombre y tipo de Pokémon
- 📌 Vista de detalle para cada Pokémon
- 🧠 Hooks personalizados (`usePokemonList`, `usePokemonDetails`, etc.)
- 💅 Estilos responsive con Tailwind
- 🧪 Pruebas unitarias para hooks y componentes

---

## 🧪 Ejecutar Pruebas

```bash
npm install
npm test
```

---

## Incluye:

jest

@testing-library/react

msw para simular las llamadas a la API

Cobertura de hooks como usePokemonDetails

---

## ▶️ Cómo Correr el Proyecto Localmente

```bash
git clone https://github.com/mera117/my-pokemon-app.git
cd mi-pokedex
npm install
npm run dev
```
---

## 📌 Notas Técnicas
Se utilizó React Query para manejo de caché, fetching y estado remoto.

MSW simula respuestas de la API en las pruebas, desacoplando el frontend de la red.

Las rutas están organizadas con el App Router de Next.js.

Los tipos de datos se definieron en la carpeta /types para mayor claridad.

---

## ✨ Mejoras Opcionales
[ ] Agregar animaciones con Framer Motion

[x] Tests para múltiples hooks

[x] Paginación dinámica en el listado

[ ] Estado global con Zustand o Context API

---

## 👩‍💻 Autor
Elizabeth
📍 Bogotá, Colombia
