interface NameVerificationFormProps {
  guestName: string
  setGuestName: (name: string) => void
  verifying: boolean
  verifyError: string
  onSubmit: (e: React.FormEvent) => void
}

export default function NameVerificationForm({
  guestName,
  setGuestName,
  verifying,
  verifyError,
  onSubmit
}: NameVerificationFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
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
          placeholder="Your full name"
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
  )
}
