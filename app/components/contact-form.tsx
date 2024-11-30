'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to your backend
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-20 px-8 bg-gray-900">
      <h2 className="text-4xl font-bold mb-10 text-[#FF4500]">Contact Us</h2>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#FF4500] text-white px-6 py-3 rounded-full hover:bg-[#FF4500]/90 transition-colors"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  )
}

