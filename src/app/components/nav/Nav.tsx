'use client'

import { useState } from 'react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-pearl fixed top-0 inset-x-0 z-50 border-b border-accent">
      {/* Mobile hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden p-4 text-dark hover:text-accent"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menu */}
      <ul
        className={`
          flex flex-col sm:flex-row font-didot bg-pearl
          sm:border-t border-accent
          transition-all duration-300 ease-in-out
          overflow-hidden sm:overflow-visible
          ${isOpen ? 'max-h-96 border-t' : 'max-h-0 sm:max-h-none'}
        `}
      >
        <li className="sm:w-1/4 border-b last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 border-accent">
          <a
            className="block p-4 text-dark hover:text-accent text-center"
            href="#rsvp"
            onClick={handleLinkClick}
          >
            RSVP
          </a>
        </li>
        <li className="sm:w-1/4 border-b last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 border-accent">
          <a
            className="block p-4 text-dark hover:text-accent text-center"
            href="#details"
            onClick={handleLinkClick}
          >
            Details
          </a>
        </li>
        <li className="sm:w-1/4 border-b last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 border-accent">
          <a
            className="block p-4 text-dark hover:text-accent text-center"
            href="#order-of-events"
            onClick={handleLinkClick}
          >
            Order Of Events
          </a>
        </li>
        <li className="sm:w-1/4 border-b last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 border-accent">
          <a
            className="block p-4 text-dark hover:text-accent text-center"
            href="#faq"
            onClick={handleLinkClick}
          >
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  )
}