'use client'

import { useState } from 'react'
import { Navigation } from '../components/navigation'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })

    if (res.ok) {
      setStatus('Message sent successfully!')
      setName('')
      setEmail('')
      setMessage('')
    } else {
      setStatus('Failed to send message.')
    }
  }

  return (
    <main className="relative bg-black text-white min-h-screen">
      <Navigation />
      <div className="container mx-auto px-8 py-24 pt-32">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#FF4500]">Contact Us</h1>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
              required
            />
          </div>
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
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#FF4500] px-6 py-2 rounded-full text-sm text-white hover:bg-[#FF4500]/90 transition-colors"
            >
              Send Message
            </button>
          </div>
          {status && <p className="text-center mt-4">{status}</p>}
        </form>
      </div>
    </main>
  )
}
