import Hero from './components/hero/Hero'
import Nav from '@/app/components/nav/Nav'

export default function Home() {
  return (
    <main className="space-y-[60px] pb-[60px]">
      <Nav />
      <Hero />
      {/*<FormContainer />*/}
    </main>
  )
}
