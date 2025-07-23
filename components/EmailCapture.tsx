'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError('')
    
    try {
      // Send email to Airtable
      const response = await fetch('/api/collect-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          timestamp: new Date().toISOString(),
          source: 'Landing Page'
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting email:', error)
      setError('Network error. Please check your connection.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5 }}
          className="text-3xl mb-1"
        >
          ✨
        </motion.div>
        <h3 className="text-lg font-semibold text-white mb-1">You&apos;re in!</h3>
        <p className="text-sm text-gray-300">
          Welcome to the multiverse. Check your email for next steps.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="relative w-full max-w-md"
    >
      {/* Outer glow container */}
      <div className="relative">
        {/* Animated background particles - reduced */}
        <div className="absolute inset-0 -m-4">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full"
              style={{
                left: `${25 + i * 20}%`,
                top: `${15 + (i % 2) * 70}%`,
              }}
              animate={{
                y: [-5, 5, -5],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Main glowing border */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            boxShadow: [
              "0 0 15px rgba(147, 51, 234, 0.4), 0 0 30px rgba(147, 51, 234, 0.2)",
              "0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)",
              "0 0 15px rgba(147, 51, 234, 0.4), 0 0 30px rgba(147, 51, 234, 0.2)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full bg-black/80 backdrop-blur-sm rounded-xl" />
        </motion.div>

        {/* Content container */}
        <div className="relative z-10 p-4 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-md rounded-xl border border-purple-500/30">
          {/* Header with tagline */}
          <motion.div 
            className="text-center mb-4"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">
              All your timelines in one place
            </h2>
            <p className="text-xs text-gray-300">
              Discover your most successful timeline
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Email input with enhanced styling */}
            <div className="relative">
              {/* Input glow effect */}
              <motion.div
                className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  isFocused 
                    ? 'bg-gradient-to-r from-purple-600/30 to-blue-600/30 shadow-lg shadow-purple-500/25' 
                    : 'bg-gradient-to-r from-gray-700/20 to-gray-600/20'
                }`}
                animate={isFocused ? {
                  scale: [1, 1.01, 1],
                  opacity: [0.5, 0.8, 0.5],
                } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              
              {/* Floating label */}
              <motion.label
                className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                  isFocused || email 
                    ? 'top-1.5 text-xs text-purple-300' 
                    : 'top-3 text-sm text-gray-400'
                }`}
                initial={false}
                animate={isFocused || email ? { y: 0, scale: 0.9 } : { y: 0, scale: 1 }}
              >
                Enter your email to get started
              </motion.label>
              
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="relative w-full px-3 pt-5 pb-1.5 bg-transparent border-2 border-purple-500/50 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/25 transition-all duration-300"
                required
              />
              
              {/* Input accent line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isFocused ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Error message */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs text-center"
              >
                {error}
              </motion.p>
            )}
            
            {/* Enhanced button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg overflow-hidden group transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                boxShadow: "0 0 15px rgba(147, 51, 234, 0.3), 0 0 30px rgba(59, 130, 246, 0.1)",
              }}
            >
              {/* Button background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <span>🚀</span>
                    Start Exploring
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </>
                )}
              </span>
            </motion.button>
          </form>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-xs text-gray-400 mt-3"
          >
            No spam. Just alternate realities where you made it. ✨
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
} 