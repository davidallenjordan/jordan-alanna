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
        <div className="pt-[165px] sm:pt-[60px]">
          <Nav />
          <Hero />
          <Details />
          <OrderOfEvents />
          <FAQ />
          <RSVP />
          <div className="bg-accent py-[8px]">
            <p className="container text-didot text-sm text-pearl text-right">This website was built by David Allen-Jordan</p>
          </div>
        </div>
      </PasswordGate>
    </main>
  )
}
