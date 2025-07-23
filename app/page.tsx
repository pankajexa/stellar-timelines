'use client'

import Starfield from '@/components/Starfield'
import TimelineCard from '@/components/TimelineCard'
import EmailCapture from '@/components/EmailCapture'
import { timelines, type Timeline } from '@/lib/timelines'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      <Starfield />
      
      {/* Left-positioned title */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-6 left-6 z-20"
      >
        <h1 className="text-4xl md:text-5xl font-light tracking-wide bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
          Parallels
        </h1>
      </motion.div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 py-4">
        {/* Email Capture - Center of screen */}
        <div className="mb-6">
          <EmailCapture />
        </div>
        
        {/* Timeline Cards - Below email capture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl w-full mb-3">
          {timelines.map((timeline: Timeline, index: number) => (
            <TimelineCard 
              key={timeline.id} 
              {...timeline} 
              index={index}
            />
          ))}
        </div>
        
        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-1">
            First 100 explorers get lifetime founder access
          </p>
          <p className="text-xs text-gray-500">
            ⚡ Infinite timelines • 🎯 Your lucky breaks • 💎 Success stories
          </p>
        </div>
      </div>
    </main>
  )
} 