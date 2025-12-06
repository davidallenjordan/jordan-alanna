import Image from 'next/image'
import artDecoFrame from '../form/art-deco-frame.png'

export default function Hero() {
  return (
    <div className="flex justify-center items-center">

      {/*<div className="bg-[#b01616] relative">*/}
        {/*<Image*/}
        {/*  className="absolute inset-0"*/}
        {/*  src={artDecoFrame}*/}
        {/*  alt=""*/}
        {/*/>*/}

        <div className="text-black flex flex-col items-center justify-center">
          <h1 className="text-9xl font-dorothea flex flex-col justify-center items-center max-w-[400px] leading-none">
            Alanna
            <span className="block font-garamond text-4xl font-bold self-end leading-none">Dunlop</span>
            <span className="block font-garamond text-4xl font-bold leading-none">&</span>
            Jordan
            <span className="block font-garamond text-4xl font-bold self-end leading-none">May</span>
          </h1>
        </div>
      </div>
    // </div>
  )
}