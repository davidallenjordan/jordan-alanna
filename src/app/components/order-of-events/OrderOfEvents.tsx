export default function OrderOfEvents() {
  return (
    <section
      className="bg-pearl"
      id="order-of-events"
    >
      <div className="container py-[60px] text-accent">
        <h2 className="heading-2 pb-[16px] sm:pb-[32px] text-center">Order of Events</h2>

        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0">
          <li className="md:w-1/5 flex flex-col items-center text-center">
            <span className="font-didot text-[32px]">4:00 PM</span>
            <span className="font-didot text-[32px]">Arrivals</span>
          </li>
          <li className="md:w-1/5 flex flex-col items-center text-center">
            <span className="font-didot text-[32px]">4:30 PM</span>
            <span className="font-didot text-[32px]">Ceremony</span>
          </li>
          <li className="md:w-1/5 flex flex-col items-center text-center">
            <span className="font-didot text-[32px]">5:00 PM</span>
            <span className="font-didot text-[32px]">Cocktail Hour</span>
          </li>
          <li className="md:w-1/5 flex flex-col items-center text-center">
            <span className="font-didot text-[32px]">6:30 PM</span>
            <span className="font-didot text-[32px]">Dinner</span>
          </li>
          <li className="md:w-1/5 flex flex-col items-center text-center">
            <span className="font-didot text-[32px] my-auto">Dancing - late!</span>
          </li>
        </ul>
      </div>
    </section>
  )
}