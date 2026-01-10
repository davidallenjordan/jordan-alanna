import Hero from './components/hero/Hero'
import Nav from '@/app/components/nav/Nav'
import Details from '@/app/components/details/Details'

export default function Home() {
  return (
    <main className="space-y-[60px] pb-[60px]">
      <Nav />
      <Hero />
      <Details />
      {/*<FormContainer />*/}
    </main>
  )
}
