'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 'pushkin',
    title: 'ROYAL',
    image: '/images/Bedroom.jpg',
    description: 'Luxury apartment design with a royal touch'
  },
  {
    id: 'yacht-club',
    title: 'MODERN',
    image: '/images/kitchen3.jpg',
    description: 'Modern Kitchen interior with a perfect balance of functionality and aesthetics'
  },
  {
    id: 'avatar',
    title: 'FUSION',
    image: '/images/BedWithStudy.jpg',
    description: 'Realized interior design of apartments with an work table and a comfortable bed with modern design'
  },
  {
    id: 'marine-28',
    title: 'HERO ELEMENT',
    image: '/images/Drawing.jpg',
    description: 'Contemporary marine-themed TV-Panel as a star element of the living room.'
  },
  {
    id: 'samurai',
    title: 'MINIMALISIT',
    image: '/images/Bookshelf.jpg',
    description: 'Bookshelf next to an in-room low base temple.'
  }
]

export function ProjectsShowcase() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleProjectClick = (id: string) => {
    setSelectedId(id === selectedId ? null : id)
    
    // Scroll to center the selected project
    if (id !== selectedId && scrollContainerRef.current) {
      const element = document.getElementById(id)
      if (element) {
        const container = scrollContainerRef.current
        const scrollLeft = element.offsetLeft - (container.clientWidth / 2) + (element.clientWidth / 2)
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="relative h-screen bg-black">
      <div 
        ref={scrollContainerRef}
        className="flex h-full overflow-x-auto scrollbar-hide"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            id={project.id}
            layout
            className={`relative flex-none transition-all duration-500 ${
              selectedId === project.id ? 'w-[60vw]' : 'w-[20vw] cursor-pointer'
            }`}
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="relative h-full w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover brightness-50"
              />
              {/* Light effect at bottom */}
              <div 
                className={`absolute bottom-0 left-0 right-0 h-32 opacity-0 transition-opacity duration-300
                  bg-gradient-to-t from-white/20 to-transparent
                  ${selectedId !== project.id ? 'group-hover:opacity-100' : ''}`}
              />
              
              {/* Project title */}
              <div className="absolute bottom-0 left-0 top-0 flex items-center">
                <motion.div 
                  className={`-rotate-90 transform whitespace-nowrap p-8 text-2xl font-bold
                    ${selectedId === project.id ? 'opacity-0' : 'opacity-100'}`}
                >
                  {project.title}
                </motion.div>
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {selectedId === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent"
                  >
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-lg mb-16 max-w-xl">{project.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-[#FF4500] hover:text-[#FF4500]/80 transition-colors"
                    >
                      View Project <ArrowUpRight className="w-4 h-16" />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#FF4500] py-4 px-8 text-center">
        <button className="text-white hover:opacity-80 transition-opacity">
          DESIGNS
        </button>
      </div>
    </section>
  )
}

