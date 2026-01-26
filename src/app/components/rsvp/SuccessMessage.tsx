import Image from 'next/image'
import jordanAlannaHeart from '../../assets/jordan-alanna-heart.png'

interface SuccessMessageProps {
  onReset: () => void
}

export default function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <>
      <style jsx global>{`
        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

      <div className="container max-w-2xl mx-auto py-[60px]">
        <div className="text-center">
          <div className="scale-in">
            <Image
              src={jordanAlannaHeart}
              alt="The happy couple embracing"
              className="mx-auto sm:max-w-[500px]"
            />
          </div>
          <h2 className="heading-2 text-pearl mb-4">Thank You!</h2>
          <p className="heading-3 text-pearl mb-6">
            Your RSVP has been received. We canʼt wait to celebrate with you!
          </p>
          <button
            onClick={onReset}
            className="font-didot text-pearl hover:no-underline underline cursor-pointer"
          >
            Submit another RSVP
          </button>
        </div>
      </div>
    </>
  )
}
