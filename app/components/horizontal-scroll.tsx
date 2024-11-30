'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const sections = [
  {
    title: "BOXY",
    subtitle: "INTERIOR DESIGN STUDIO",
    image: "/images/Scandi_living.jpg"
  },
  {
    title: "BUILD",
    subtitle: "CRAFTING SPACES",
    image: "/images/Scandi_bed1.jpg"
  }
]

export function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  return (
    <div className="relative h-[200vh]">
      <motion.div 
        ref={containerRef}
        style={{ x }}
        className="sticky top-0 flex h-screen"
      >
        {sections.map((section, index) => (
          <div 
            key={index}
            className="flex h-screen w-screen flex-none items-center justify-end relative px-20"
          >
            <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[70%] h-[80%] overflow-hidden">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <div className="absolute left-32 top-1/2 -translate-y-1/2 z-10">
              <motion.h1 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-[12vw] font-bold leading-none text-[#FF4500]"
              >
                {section.title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl font-light tracking-wider"
              >
                {section.subtitle}
              </motion.p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

