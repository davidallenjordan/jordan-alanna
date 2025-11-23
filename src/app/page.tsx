import RSVPForm from './components/RSVPForm'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-12 px-4">
      <Hero />
      <RSVPForm />
    </main>
  )
}
