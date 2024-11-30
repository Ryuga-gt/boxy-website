'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Navigation() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  
  const topNavOpacity = useTransform(scrollY, [0, window.innerHeight], [1, 0])
  const bottomNavOpacity = useTransform(scrollY, [0, window.innerHeight], [0, 1])

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      setIsScrolled(latest > window.innerHeight)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <>
      {/* Top-left vertical navigation */}
      <motion.div 
        style={{ opacity: topNavOpacity }}
        className="fixed left-8 top-8 z-50 flex flex-col space-y-4"
      >
        <Link href="/portfolio" className="text-sm hover:text-[#FF4500] transition-colors">
          Portfolio
        </Link>
        <Link href="/about" className="text-sm hover:text-[#FF4500] transition-colors">
          About us
        </Link>
        <Link href="/auth/signin" className="text-sm hover:text-[#FF4500] transition-colors">
          Login
        </Link>
      </motion.div>

      {/* EST 2024 text */}
      <motion.div 
        className="fixed right-8 top-8 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span className="text-sm text-[#FF4500]">EST - 2024</span>
      </motion.div>

      {/* Bottom navigation with glassmorphism */}
      <motion.nav 
        style={{ opacity: bottomNavOpacity }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-[70%]"
      >
        <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-full">
          <div className="container mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex space-x-8">
              <Link href="/portfolio" className="text-sm hover:text-[#FF4500] transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-sm hover:text-[#FF4500] transition-colors">
                About us
              </Link>
              <Link href="/auth/signin" className="text-sm hover:text-[#FF4500] transition-colors">
                Login
              </Link>
            </div>
            <Link 
              href="/contact" 
              className="bg-[#FF4500] px-6 py-2 rounded-full text-sm text-white hover:bg-[#FF4500]/90 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  )
}

