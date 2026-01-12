import heroImage from '../../assets/jordan-alanna-wedding-hero.png'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="flex justify-center items-center bg-accent pt-[60px] container">
      <div className="text-pearl flex flex-col items-center justify-center space-y-6 md:space-y-10 max-w-full">
        <h1 className="flex flex-row items-center justify-center gap-3 sm:gap-6 heading-1 uppercase">
          <div className="flex flex-col items-end leading-none">
            <span>Jordan</span>
            <span className="font-snell text-[20px] sm:text-3xl md:text-4xl font-black mt-0 normal-case">May</span>
          </div>

          <span className="font-snell text-[20px] sm:text-3xl md:text-4xl font-black self-center">&</span>

          <div className="flex flex-col items-end leading-none">
            <span>Alanna</span>
            <span className="font-snell font-black text-[20px] sm:text-3xl md:text-4xl mt-0 normal-case">Dunlop</span>
          </div>
        </h1>

        <div className="relative w-full max-w-[650px] pb-[120px]">
          <Image
            className="w-full h-auto"
            src={heroImage}
            alt="A series of photobooth portraits of the wedding couple"
          />

          <span className="font-snell text-[2rem] xs:text-[3.5rem] sm:text-[4.5rem] md:text-[5rem] absolute bottom-16 right-0 left-0 text-center rotate-[-8deg]">
            are getting married
          </span>
        </div>
      </div>
    </div>
  )
}