'use client'

import { useState } from 'react'
import { Navigation } from '../components/navigation'

// Mock data for previous consultations
const previousConsultations = [
  {
    id: 1,
    date: '2023-10-15',
    topic: 'Interior design for a 2BHK apartment',
  },
  {
    id: 2,
    date: '2023-11-20',
    topic: 'Kitchen remodeling plan',
  },
]

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would authenticate the user here
    // For this example, we'll just simulate a successful login
    if (email && password) {
      setIsLoggedIn(true)
    }
  }

  return (
    <main className="relative bg-black text-white min-h-screen">
      <Navigation />
      <div className="container mx-auto px-8 py-24 pt-32">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#FF4500]">Login</h1>
        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="max-w-sm mx-auto">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#FF4500] px-6 py-2 rounded-full text-sm text-white hover:bg-[#FF4500]/90 transition-colors"
              >
                Login
              </button>
            </div>
          </form>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Previous Consultations</h2>
            <div className="max-w-2xl mx-auto">
              {previousConsultations.length > 0 ? (
                <ul className="space-y-4">
                  {previousConsultations.map((consultation) => (
                    <li key={consultation.id} className="bg-black/30 p-4 border border-white/10 rounded-md">
                      <p className="font-bold">Date: {consultation.date}</p>
                      <p>Topic: {consultation.topic}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center">No previous consultations found.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
