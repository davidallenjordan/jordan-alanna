export default function Nav() {
  return (
    <nav className="bg-pearl">
      <ul className="flex flex-col sm:flex-row font-didot">
        <li className="sm:w-1/4 p-2 sm:p-4 flex justify-center border-b sm:border-b-0 sm:border-r border-solid border-accent">
          <a className="text-dark hover:text-accent" href="#rsvp">RSVP</a>
        </li>
        <li className="sm:w-1/4 p-2 sm:p-4 flex justify-center border-b sm:border-b-0 sm:border-r border-solid border-accent">
          <a className="text-dark hover:text-accent" href="#details">Details</a>
        </li>
        <li className="sm:w-1/4 p-2 sm:p-4 flex justify-center border-b sm:border-b-0 sm:border-r border-solid border-accent">
          <a className="text-dark hover:text-accent" href="#order-of-events">Order Of Events</a>
        </li>
        <li className="sm:w-1/4 p-2 sm:p-4 flex justify-center">
          <a className="text-dark hover:text-accent" href="#faq">FAQ</a>
        </li>
      </ul>
    </nav>
  )
}