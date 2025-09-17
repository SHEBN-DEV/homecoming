'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const { error } = await supabase
        .from('email_subscriptions')
        .insert([{ email }])

      if (error) {
        if (error.code === '23505') {
          setMessage('Este email ya está registrado')
        } else {
          setMessage('Error al registrar el email')
        }
      } else {
        setMessage('Thank you! We\'ll notify you when it\'s ready')
        setEmail('')
      }
    } catch (error) {
      setMessage('Error al conectar con el servidor')
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-dark-magenta to-light-pink flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            {/* Logo - reemplaza con tu imagen real */}
            <img 
              src="/Log.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-6xl font-bold text-white mb-6">
          Coming Soon
        </h1>   

        {/* Descriptive Text */}
        <p className="text-white text-lg md:text-xl max-w-lg mx-auto mb-8 text-center">
          Get ready everyone! We are currently working on something awesome.
        </p>

        {/* Email Subscription Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="flex-1 px-4 py-3 bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isLoading ? 'Enviando...' : 'Notify Me'}
            </button>
          </div>
          
          {message && (
            <p className={`text-sm ${message.includes('Thank you') ? 'text-green-300' : 'text-red-300'}`}>
              {message}
            </p>
          )}
        </form>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8">
          <a
            href="https://x.com/shebn_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-hot-pink transition-colors"
            aria-label="Twitter"
          >
            <img 
              src="/logX.png" 
              alt="Twitter" 
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://www.instagram.com/shebn.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-hot-pink transition-colors"
            aria-label="Instagram"
          >
            <img 
              src="/logIn.png" 
              alt="Instagram" 
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
