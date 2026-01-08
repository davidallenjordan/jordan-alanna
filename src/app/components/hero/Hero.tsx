import heroImage from '../../assets/jordan-alanna-wedding-hero.jpeg'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="flex justify-center items-center bg-accent my-4 md:my-10 px-4">
      <div className="text-pearl flex flex-col items-center justify-center space-y-6 md:space-y-10 max-w-full">
        <h1 className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-6 text-5xl sm:text-7xl md:text-8xl font-didot">
          <div className="flex flex-col items-end leading-none">
            <span>Jordan</span>
            <span className="font-snell text-2xl sm:text-3xl md:text-4xl font-bold mt-0">May</span>
          </div>

          <span className="font-snell text-2xl sm:text-3xl md:text-4xl font-bold self-center">&</span>

          <div className="flex flex-col items-end leading-none">
            <span>Alanna</span>
            <span className="font-snell text-2xl sm:text-3xl md:text-4xl font-bold mt-0">Dunlop</span>
          </div>
        </h1>

        <div className="relative w-full max-w-[650px]">
          <Image
            className="w-full h-auto"
            src={heroImage}
            alt="A series of photobooth portraits of the wedding couple"
          />

          <span className="absolute bottom-2 right-0 sm:bottom-4 sm:right-2 md:bottom-0 md:right-16 font-snell text-3xl xs:text-5xl md:text-7xl rotate-[-8deg] origin-bottom-right translate-x-0 translate-y-0 md:translate-x-[20%] md:translate-y-[20%] whitespace-nowrap">
            are getting married
          </span>
        </div>
      </div>
    </div>
  )
}