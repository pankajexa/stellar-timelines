'use client'

import { motion } from 'framer-motion'

interface TimelineCardProps {
  id: string
  title: string
  teaser: string
  index?: number
}

export default function TimelineCard({ id, title, teaser, index = 0 }: TimelineCardProps) {
  const colors = [
    { from: 'from-purple-600/20', to: 'to-pink-600/20', border: 'border-purple-500/30' },
    { from: 'from-blue-600/20', to: 'to-cyan-600/20', border: 'border-blue-500/30' },
    { from: 'from-emerald-600/20', to: 'to-teal-600/20', border: 'border-emerald-500/30' }
  ]
  
  const cardColor = colors[index] || colors[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: `0 8px 20px rgba(0, 0, 0, 0.3)`,
      }}
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${cardColor.from} ${cardColor.to} backdrop-blur-sm border ${cardColor.border} cursor-pointer transition-all duration-300 aspect-square`}
    >
      {/* Content */}
      <div className="relative z-10 p-3 h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-green-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                Timeline
              </span>
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
              {title}
            </h3>
          </div>
          
          {/* Timeline Icon */}
          <motion.div 
            className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs">🌟</span>
          </motion.div>
        </div>
        
        {/* Description */}
        <div className="flex-1 flex items-center">
          <p className="text-gray-300 text-xs leading-snug group-hover:text-gray-200 transition-colors duration-300">
            {teaser}
          </p>
        </div>
        
        {/* Footer */}
        <div className="pt-2 border-t border-gray-700/30">
          <div className="flex items-center justify-between">
            <span className="text-xs text-purple-400 font-medium">
              {id}
            </span>
            <motion.div
              className="text-xs text-green-400 flex items-center gap-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-1 h-1 rounded-full bg-green-400"></span>
              ACTIVE
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
    </motion.div>
  )
} 