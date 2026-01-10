import Hero from './components/hero/Hero'
import Nav from '@/app/components/nav/Nav'
import Details from '@/app/components/details/Details'
import FAQ from '@/app/components/faq/FAQ'
import OrderOfEvents from '@/app/components/order-of-events/OrderOfEvents'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Details />
      <OrderOfEvents />
      <FAQ />
      {/*<FormContainer />*/}
    </main>
  )
}
