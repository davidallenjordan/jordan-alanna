'use client'

import { useState } from 'react'
import NameVerificationForm from './NameVerificationForm'
import RSVPForm from './RSVPForm'
import SuccessMessage from './SuccessMessage'

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

  const handleChangeName = () => {
    setIsVerified(false)
    setGuestName('')
  }

  const handleReset = () => {
    setStatus('idle')
  }

  if (status === 'success') {
    return <SuccessMessage onReset={handleReset} />
  }

  return (
    <section id="rsvp" className="container md:max-w-2xl mx-auto py-[60px]">
      <h2 className="heading-2 text-pearl text-center pb-[16px] sm:pb-[32px] font-didot font-normal">RSVP</h2>
      <p className="text-pearl text-didot pb-[16px] sm:pb-[32px] text-lg">
        Please note: if you're responding for more than one guest, please submit an RSVP for each individual by listing their name, selecting their meal choice, and confirming whether they'll be celebrating with us.
      </p>

      {!isVerified ? (
        <NameVerificationForm
          guestName={guestName}
          setGuestName={setGuestName}
          verifying={verifying}
          verifyError={verifyError}
          onSubmit={handleVerifyName}
        />
      ) : (
        <RSVPForm
          guestName={guestName}
          formData={formData}
          status={status}
          errorMessage={errorMessage}
          onChangeName={handleChangeName}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
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
