import Image from 'next/image'
import RSVPForm from '@/app/components/form/RSVPForm'
import backgroundImage from './martini-background.jpeg'

export default function FormContainer() {
  return (
    <main className="relative">

      <Image
        className="absolute h-full w-full object-cover -z-1"
        src={backgroundImage}
        alt=""
      />

      <RSVPForm/>
    </main>
  )
}