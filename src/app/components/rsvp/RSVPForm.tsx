interface RSVPFormProps {
  guestName: string
  formData: {
    email: string
    attending: string
    foodPreference: string
    dietaryRestrictions: string
    message: string
  }
  status: 'idle' | 'loading' | 'success' | 'error'
  errorMessage: string
  onChangeName: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function RSVPForm({
  guestName,
  formData,
  status,
  errorMessage,
  onChangeName,
  onChange,
  onSubmit
}: RSVPFormProps) {
  return (
    <div>
      <div className="mb-6 p-4 bg-pearl bg-opacity-10 rounded-md">
        <p className="text-dark text-xl">
          RSVP for: <span className="font-didot font-bold">{guestName}</span>
        </p>
        <button
          onClick={onChangeName}
          className="text-dark text-sm underline hover:no-underline mt-2"
        >
          Change name
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
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
            onChange={onChange}
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
            onChange={onChange}
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
                onChange={onChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-pearl text-dark focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                <option value="">-- Please choose --</option>
                <option value="beef">Beef</option>
                <option value="chicken">Chicken</option>
                <option value="vegetarian">Vegetarian</option>
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
                onChange={onChange}
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
            onChange={onChange}
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
  )
}
