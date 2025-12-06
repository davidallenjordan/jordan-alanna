import RSVPForm from './components/form/RSVPForm'
import Hero from './components/hero/Hero'
import Image from 'next/image'
import backgroundImage from './assets/martini-background.jpeg'

export default function Home() {
  return (
    <main className="relative space-y-[60px] pb-[60px]">

      <Image
        className="absolute h-full w-full object-cover -z-1"
        src={backgroundImage}
        alt=""
      />

      <Hero />
      <RSVPForm />
    </main>
  )
}
