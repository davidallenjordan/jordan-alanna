'use client'

import {useState} from 'react'

export default function RSVP() {
  const [guestName, setGuestName] = useState('')
  const [isVerified, setIsVerified] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [verifyError, setVerifyError] = useState('')

  const [formData, setFormData] = useState({
    email: '',
    attending: '',
    foodPreference: '',
    dietaryRestrictions: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleVerifyName = async (e: React.FormEvent) => {
    e.preventDefault()
    setVerifying(true)
    setVerifyError('')

    try {
      const response = await fetch('/api/verify-guest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: guestName })
      })

      const data = await response.json()

      if (data.exists) {
        setIsVerified(true)
        setVerifyError('')
      } else {
        setVerifyError('Name not found on guest list. Please enter your name exactly as it appears on your invitation.')
      }
    } catch (error) {
      setVerifyError('Error verifying name. Please try again.')
    } finally {
      setVerifying(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: guestName,
          ...formData
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
      setGuestName('')
      setIsVerified(false)
      setFormData({
        email: '',
        attending: '',
        foodPreference: '',
        dietaryRestrictions: '',
        message: ''
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit RSVP')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (status === 'success') {
    return (
      <div className="container max-w-2xl mx-auto py-[60px]">
        <div className="text-center">
          <div className="text-6xl mb-4">💐</div>
          <h2 className="heading-2 text-pearl mb-4">Thank You!</h2>
          <p className="heading-3 text-pearl mb-6">
            Your RSVP has been received. We canʼt wait to celebrate with you!
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="font-didot text-pearl hover:no-underline underline cursor-pointer"
          >
            Submit another RSVP
          </button>
        </div>
      </div>
    )
  }

  return (
    <section id="rsvp" className="container md:max-w-2xl mx-auto py-[60px]">
      <h2 className="heading-2 text-pearl text-center pb-[16px] sm:pb-[32px]">RSVP</h2>

      {!isVerified ? (
        // Step 1: Name verification
        <form onSubmit={handleVerifyName} className="space-y-6">
          <div>
            <label htmlFor="guestName" className="block text-sm font-medium text-pearl mb-2">
              Full Name (as it appears on your invitation) *
            </label>
            <input
              type="text"
              id="guestName"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-pearl placeholder-dark focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          {verifyError && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800 text-sm">{verifyError}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={verifying}
            className="w-full bg-dark text-pearl py-3 px-6 rounded-md font-medium hover:bg-[#1f1f1fcc] focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {verifying ? 'Verifying...' : 'Continue'}
          </button>
        </form>
      ) : (
        // Step 2: Full RSVP form
        <div>
          <div className="mb-6 p-4 bg-pearl bg-opacity-10 rounded-md">
            <p className="text-dark text-xl">
              RSVP for: <span className="font-didot font-bold">{guestName}</span>
            </p>
            <button
              onClick={() => {
                setIsVerified(false)
                setGuestName('')
              }}
              className="text-dark text-sm underline hover:no-underline mt-2"
            >
              Change name
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-pearl mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-pearl placeholder-dark focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="attending" className="block text-sm font-medium text-pearl mb-2">
                Will you be attending? *
              </label>
              <select
                id="attending"
                name="attending"
                required
                value={formData.attending}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-pearl text-dark focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                <option value="">-- Please choose an option --</option>
                <option value="yes">Joyfully accepts</option>
                <option value="no">Regretfully declines</option>
              </select>
            </div>

            {formData.attending === 'yes' && (
              <>
                <div>
                  <label htmlFor="foodPreference" className="block text-sm font-medium text-pearl mb-2">
                    Meal Preference *
                  </label>
                  <select
                    id="foodPreference"
                    name="foodPreference"
                    required
                    value={formData.foodPreference}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-pearl text-dark focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  >
                    <option value="">-- Please choose --</option>
                    <option value="beef">Beef</option>
                    <option value="chicken">Chicken</option>
                    <option value="vegetarian">Vegan</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-pearl mb-2">
                    Dietary Restrictions or Allergies
                  </label>
                  <input
                    type="text"
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-pearl placeholder-dark focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="e.g., Gluten-free, Nut allergy, None"
                  />
                </div>
              </>
            )}

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-pearl mb-2">
                Message to the Couple
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-pearl placeholder-dark focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Share your well wishes..."
              />
            </div>

            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800 text-sm">{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-dark text-pearl py-3 px-6 rounded-md font-medium hover:bg-[#1f1f1fcc] focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {status === 'loading' ? 'Submitting...' : 'Submit RSVP'}
            </button>
          </form>
        </div>
      )}

      <p className="text-pearl text-center text-sm my-8">
        Having trouble? <a
        href="mailto:alanna.dunlop@gmail.com?subject=RSVP%20Help&body=Please%20include:%0A%0AYour%20name:%0AAttending:%20Yes%20/%20No%0AFood%20preference:%20Beef%20/%20Chicken%20/%20Vegetarian%0AAny%20dietary%20restrictions:"
        className="underline hover:no-underline"
      >
        Email us your RSVP
      </a>
      </p>
    </section>
  )
}