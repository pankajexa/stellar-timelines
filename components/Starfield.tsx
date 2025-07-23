'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Star {
  id: number
  x: number
  y: number
  delay: number
  duration: number
  size: number
}

export default function Starfield() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      for (let i = 0; i < 300; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 2 + Math.random() * 6,
          size: Math.random() * 2 + 0.5
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black opacity-60" />
      
      {/* Galaxy clusters */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-xl" />
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-radial from-indigo-500/8 to-transparent rounded-full blur-lg" />
      
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"
          style={{
            width: '150px',
            top: `${15 + i * 40}%`,
            left: '-150px',
          }}
          animate={{
            x: ['0px', '100vw'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 6,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
} 