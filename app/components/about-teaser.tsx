'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'

const teaserContent = [
  {
    text: "Transforming spaces into experiences",
    image: "/BedWithStudy.jpg"
  },
  {
    text: "Where functionality meets aesthetics",
    image: "/Bookshelf.jpg"
  },
  {
    text: "Crafting your perfect living environment",
    image: "/Bedroom.jpg"
  }
]

export function AboutTeaser() {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth)
      controls.start({ x: `${-scrollPercentage * 100}%` })
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [controls])

  return (
    <div 
      ref={containerRef}
      className="w-full overflow-x-scroll whitespace-nowrap scrollbar-hide"
    >
      <div className="inline-flex">
        {teaserContent.map((item, index) => (
          <div key={index} className="w-screen h-screen flex-shrink-0 relative">
            <Image
              src={item.image}
              alt={`Interior design ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-center px-4"
              >
                {item.text}
              </motion.h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

