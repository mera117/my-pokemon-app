'use client'

import { useState } from 'react'

interface PokemonCardProps {
  name: string
  image: string
  onClick?: () => void
}

export const PokemonCard = ({ name, image, onClick }: PokemonCardProps) => {
  const [imgSrc, setImgSrc] = useState(image)

  const handleError = () => {
    setImgSrc('/fallback.png')
  }

  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md rounded-xl p-4 cursor-pointer hover:scale-105 transition-transform"
    >
      <img
        src={imgSrc}
        alt={name}
        onError={handleError}
        className="w-full h-32 object-contain mb-2"
      />
      <h3 className="text-center capitalize font-semibold text-lg">{name}</h3>
    </div>
  )
}
