"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BookAnimationProps {
  onAnimationComplete?: () => void
  className?: string
}

export function BookAnimation({ onAnimationComplete, className }: BookAnimationProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)

      const completeTimer = setTimeout(() => {
        if (onAnimationComplete) {
          onAnimationComplete()
        }
      }, 1000)

      return () => clearTimeout(completeTimer)
    }, 500)

    return () => clearTimeout(timer)
  }, [onAnimationComplete])

  return (
    <div className={cn("relative w-full max-w-2xl mx-auto", className)}>
      <motion.div
        className="book-container"
        initial={{ opacity: 1 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="book"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isOpen ? 180 : 0 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          <div className="book-cover">
            <div className="book-spine"></div>
            <div className="book-front">
              <div className="book-title">
                <h3 className="text-2xl font-bold text-amber-200">Guia de Sobrevivência</h3>
                <p className="text-amber-100/80 text-sm mt-2">Os segredos de Valheim</p>
              </div>
            </div>
          </div>
          <div className="book-back"></div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .book-container {
          perspective: 1000px;
          width: 300px;
          height: 400px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .book {
          transform-style: preserve-3d;
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .book-cover, .book-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 5px;
        }
        
        .book-cover {
          background: linear-gradient(45deg, #3a2a15, #5a3a20);
          display: flex;
          transform: rotateY(0deg);
        }
        
        .book-back {
          background: linear-gradient(45deg, #2a1a0a, #3a2a15);
          transform: rotateY(180deg);
        }
        
        .book-spine {
          position: absolute;
          left: 0;
          width: 40px;
          height: 100%;
          background: linear-gradient(to right, #2a1a0a, #3a2a15);
          border-radius: 5px 0 0 5px;
          box-shadow: inset -5px 0 10px rgba(0,0,0,0.5);
        }
        
        .book-front {
          position: absolute;
          left: 40px;
          width: calc(100% - 40px);
          height: 100%;
          background: url('/images/pergaminho-bg.png');
          background-size: cover;
          border-radius: 0 5px 5px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          box-shadow: 0 0 20px rgba(0,0,0,0.3);
        }
        
        .book-title {
          text-align: center;
          color: #5a3a20;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  )
}
