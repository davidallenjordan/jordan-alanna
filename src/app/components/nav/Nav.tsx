export default function Nav() {
  return (
    <nav className="bg-pearl fixed top-0 inset-x-0 z-100">
      <ul className="flex flex-col sm:flex-row font-didot bg-pearl border border-accent">
        <li className="sm:w-1/4 p-2 sm:p-4 flex justify-center border-b last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 border-accent">
          <a className="text-dark hover:text-accent" href="#rsvp">RSVP</a>
        </li>
        <li className="sm:w-1/4 p-2 sm:p-4 flex justify-center border-b last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 border-accent">
          <a className="text-dark hover:text-accent" href="#details">Details</a>
        </li>
        <li className="sm:w-1/4 p-2 sm:p-4 flex justify-center border-b last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 border-accent">
          <a className="text-dark hover:text-accent" href="#order-of-events">Order Of Events</a>
        </li>
        <li className="sm:w-1/4 p-2 sm:p-4 flex justify-center border-b last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 border-accent">
          <a className="text-dark hover:text-accent" href="#faq">FAQ</a>
        </li>
      </ul>
    </nav>
  )
}