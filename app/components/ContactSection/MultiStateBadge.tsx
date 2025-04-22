'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { lightBlue } from '@mui/material/colors'

interface MultiStateBadgeProps {
  state: 'idle' | 'loading' | 'success' | 'error'
  message?: string
  isValid?: boolean
  onReset?: () => void
}

export function MultiStateBadge({ state, message, isValid = true, onReset }: MultiStateBadgeProps) {
  const currentState = !isValid ? 'idle' : state

  const handleClick = (e: React.MouseEvent) => {
    if (currentState === 'error') {
      e.preventDefault()
      e.stopPropagation()
      if (onReset) {
        onReset()
      }
    }
  }

  const getText = () => {
    if (!isValid) return 'Envoyer le message'
    
    switch (currentState) {
      case 'idle':
        return 'Envoyer le message'
      case 'loading':
        return 'Envoi en cours...'
      case 'success':
        return message || 'Message envoyé !'
      case 'error':
        return message || 'Erreur lors de l\'envoi'
    }
  }

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.button
      type={currentState === 'error' ? 'button' : 'submit'}
      onClick={handleClick}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: !isValid ? 'pointer' : currentState === 'error' ? 'pointer' : currentState === 'idle' ? 'pointer' : 'default',
        width: '100%',
        display: 'block',
        opacity: !isValid ? 0.8 : 1
      }}
      whileHover={currentState === 'idle' || currentState === 'error' ? {
        scale: 1.015,
        transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] }
      } : undefined}
    >
      <motion.div
        initial={false}
        animate={{
          backgroundColor: currentState === 'success' ? '#4caf50' : 
                         currentState === 'error' ? '#f44336' : 
                         lightBlue[600],
        }}
        transition={{ 
          duration: 0.4,
          ease: [0.32, 0.72, 0, 1]
        }}
        style={{
          color: 'white',
          display: 'flex',
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px 20px',
          borderRadius: '12px',
          willChange: 'transform',
          width: '100%',
          minHeight: '48px'
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            position: 'relative'
          }}
        >
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              gap: '8px',
              position: 'relative'
            }}
          >
            <AnimatePresence mode="wait">
              {currentState !== 'idle' && (
                <motion.div
                  key={currentState}
                  initial={{ opacity: 0, scale: 0.8, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -15 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px'
                  }}
                >
                  {currentState === 'loading' && (
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={spinnerVariants.animate}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                    </motion.div>
                  )}
                  {currentState === 'success' && (
                    <motion.div
                      initial={{ scale: 0.8, y: 15 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.32, 0.72, 0, 1]
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </motion.div>
                  )}
                  {currentState === 'error' && (
                    <motion.div
                      initial={{ scale: 0.8, y: 15 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.32, 0.72, 0, 1]
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.span
                key={currentState + getText()}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  duration: 0.35,
                  ease: [0.32, 0.72, 0, 1]
                }}
              >
                {getText()}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.button>
  )
} 