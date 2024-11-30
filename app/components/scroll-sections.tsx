'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const horizontalSections = [
  {
    title: "BOXY",
    subtitle: "INTERIOR DESIGN STUDIO",
    source: "/images/Scandi_living.mp4",
    type: "video"
  },
  {
    title: "DESIGN",
    subtitle: "THAT RESONATES AND ELEVATES",
    source: "/images/Compact_bed1.mp4",
    type: "video"
  },
  {
    title: "CREATE",
    subtitle: "SPACES TO ADMIRE AND INSPIRE",
    image: "/images/Compact_kitchen.jpg",
    type: "image"
  }
]

export function ScrollSections() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  // Transform for horizontal scroll
  const x = useTransform(
    scrollYProgress,
    [0, 0.3], // Adjust these values to control when horizontal scroll ends
    ['0%', '-200%']
  )

  return (
    <div className="relative">
      {/* Horizontal Scroll Section */}
      <div className="h-[100vh] lg:h-[300vh]">
        <motion.div 
          ref={containerRef}
          style={{ x }}
          className="sticky top-0 flex h-screen"
        >
          {horizontalSections.map((section, index) => (
            <div 
              key={index}
              className="flex h-screen w-screen flex-none items-center justify-end relative px-20"
            >
              <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[70%] h-[80%] overflow-hidden">
                {section.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop={false}
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    onEnded={() => {
                      const nextVideo = index === 0 ? "/images/Scandi_living_2.mp4" : "/images/Scandi_living.mp4";
                      const videoElement = document.getElementById(`video-${index}`) as HTMLVideoElement;
                      videoElement.src = nextVideo;
                      videoElement.load();
                      videoElement.play();
                    }}
                    id={`video-${index}`}
                  >
                    <source src={section.source} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={section.image!}
                    alt={section.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                )}
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

      {/* Vertical Scroll Section */}
      <div className="min-h-screen bg-black px-4 py-20 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="text-6xl lg:text-8xl font-bold mb-4">
              <span className="text-[#FF4500]">YOUR</span>{' '}
              <span className="text-white">RELIABLE</span>{' '}
              <span className="text-[#FF4500]">PARTNER</span>
            </div>
            <div className="text-4xl lg:text-6xl font-bold text-[#FF4500]">
              IN INTERIOR DESIGN
            </div>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-[#FF4500] text-8xl lg:text-9xl font-bold">
                  100%
                </span>
                <span className="text-white text-4xl lg:text-5xl font-bold">
                  CREATIVE
                </span>
              </div>
              <div className="text-white text-4xl lg:text-6xl font-bold mt-8">
                IN PERFECT
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-visible"
            >
              <div className="bg-[#FF4500] text-black inline-block px-8 py-4 -ml-16">
                <div className="text-8xl lg:text-9xl font-bold mb-4">
                  APPROACH
                </div>
                <div className="-ml-8 whitespace-nowrap text-8xl lg:text-8xl font-bold">
                  ACCORDANCE
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

