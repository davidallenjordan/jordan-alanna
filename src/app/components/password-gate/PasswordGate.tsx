'use client'

import { useState, useEffect, ReactNode } from 'react'

interface PasswordGateProps {
  children: ReactNode
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true) // Add loading state
  const [error, setError] = useState('')

  // Check sessionStorage after hydration
  useEffect(() => {
    const isAuthed = sessionStorage.getItem('wedding-auth') === 'true'
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsAuthenticated(isAuthed)
    setIsLoading(false)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })

      const data = await response.json()

      if (data.success) {
        setIsAuthenticated(true)
        sessionStorage.setItem('wedding-auth', 'true')
        setError('')
      } else {
        setError('Incorrect password. Please try again.')
        setPassword('')
      }
    } catch (error) {
      setError(`An error occurred. Please try again. Error: ${error}`)
    }
  }

  // Show nothing during initial load to prevent flash
  if (isLoading) {
    return null
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-accent flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-pearl rounded-lg shadow-lg p-8">
        <h1 className="heading-2 text-dark text-center mb-6">
          Jordan & Alanna
        </h1>
        <p className="text-dark text-center mb-8">
          Please enter the password to view our wedding details
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-dark mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-dark focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Enter password"
              autoFocus
            />
          </div>

          {error && (
            <p className="text-accent text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-accent text-pearl py-3 px-6 rounded-md font-medium hover:bg-opacity-90 transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}