import Hero from './components/hero/Hero'
import Details from '@/app/components/details/Details'
import FAQ from '@/app/components/faq/FAQ'
import OrderOfEvents from '@/app/components/order-of-events/OrderOfEvents'
import Nav from '@/app/components/nav/Nav'
import RSVP from '@/app/components/rsvp/RSVP'
import PasswordGate from '@/app/components/password-gate/PasswordGate'

export default function Home() {
  return (
    <main>
      <PasswordGate>
        <Nav />
        <Hero />
        <Details />
        <OrderOfEvents />
        <FAQ />
        <RSVP />
      </PasswordGate>
    </main>
  )
}
