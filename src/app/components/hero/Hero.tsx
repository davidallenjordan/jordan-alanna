import heroImage from '../../assets/jordan-alanna-wedding-hero.png'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="flex justify-center items-center bg-accent pt-[60px] container">
      <div className="text-pearl flex flex-col items-center justify-center space-y-6 md:space-y-10 max-w-full pb-[60px]">
        <h1 className="flex flex-row items-center justify-center gap-3 sm:gap-6 heading-1 uppercase">
          <div className="flex flex-col items-end leading-none">
            <span>Jordan</span>
            <span className="font-snell font-black sm:-mt-1 md:-mt-3 normal-case text-[30px] sm:text-[45px] md:text-[60px] lg:text-[80px]">May</span>
          </div>

          <span className="font-snell font-black self-center text-[30px] sm:text-[45px] md:text-[60px] lg:text-[80px]">&</span>

          <div className="flex flex-col items-end leading-none">
            <span>Alanna</span>
            <span className="font-snell font-black sm:-mt-1 md:-mt-3 normal-case text-[30px] sm:text-[45px] md:text-[60px] lg:text-[80px]">Dunlop</span>
          </div>
        </h1>

        <div className="relative w-full max-w-[650px] pb-[100px] sm:pb-[120px] md:pb-[140px]">
          <Image
            className="w-full h-auto"
            src={heroImage}
            alt="A series of photobooth portraits of the wedding couple"
          />

          <span className="font-snell text-[30px] sm:text-[45px] md:text-[60px] lg:text-[75px] absolute bottom-16 right-0 left-0 text-center rotate-[-8deg]">
            are getting married!
          </span>
        </div>

        <p className="text-center heading-3">
          <span className="block pb-4">Saturday, April 25th, 2026</span>
          <span className="block">The Great Hall</span>
          <span className="block">1087 Queen Street W.</span>
          <span className="block">Toronto, ON</span>
        </p>
      </div>
    </div>
  )
}