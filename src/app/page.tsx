import Hero from './components/hero/Hero'
import Nav from '@/app/components/nav/Nav'
import Details from '@/app/components/details/Details'
import FAQ from '@/app/components/faq/FAQ'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Details />
      <FAQ />
      {/*<FormContainer />*/}
    </main>
  )
}
