export default function Details() {
  return (
    <section
      className="bg-pearl"
      id="details"
    >
      <div className="container py-[60px]">
        <h2 className="heading-2 text-dark pb-[16px] sm:pb-[32px]">Details</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
          {/* Location */}
          <li>
            <h3 className="heading-3 text-dark mb-3">Location</h3>
            <p className="text-dark mb-4">
              The Great Hall is located at 1087 Queen Street W. and is situated on the south east corner of Queen and
              Dovercourt Rd. Wedding celebrations will take place on the second floor of the venue in the Conversation
              Room and Main Hall.
            </p>
            <p className="text-dark mb-2">
              <strong>Parking:</strong> Green P parking is located a short distance from the Great Hall at 45 Abell St.
              and is accessible from both Abell St. and Lisgar Ave. Additionally, street parking is available throughout
              the neighbourhood.
            </p>
            <p className="text-dark">
              <strong>Public Transit:</strong> If you are making your way via TTC, the 501 streetcar stops at Queen
              Street W. and Dovercourt Rd.
            </p>
          </li>

          {/* Accommodations */}
          <li>
            <h3 className="heading-3 text-dark mb-3">Accommodations</h3>
            <p className="text-dark mb-4">
              If you are coming in from out of town, we recommend the following hotels in the area, which are within
              walking distance of the venue!
            </p>

            <div className="mb-4">
              <h4 className="font-didot text-dark text-lg font-bold mb-1">The Drake Hotel</h4>
              <p className="text-dark text-sm mb-2">1150 Queen St W, Toronto, ON M6J 1J3</p>
              <a
                href="https://thedrake.ca/thedrakehotel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline hover:no-underline"
              >
                thedrake.ca/thedrakehotel
              </a>
              <p className="text-dark text-sm mt-2 italic">
                * If you are looking to stay at the Drake Hotel from April 24-26, please use the
                code <strong>JM20</strong> to receive a 20% discount on web bookings.
              </p>
            </div>

            <div>
              <h4 className="font-didot text-dark text-lg font-bold mb-1">The Gladstone House</h4>
              <p className="text-dark text-sm mb-2">1214 Queen St W, Toronto, ON M6J 1J6</p>
              <a
                href="https://www.gladstonehouse.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline hover:no-underline"
              >
                gladstonehouse.ca
              </a>
            </div>
          </li>

          {/* Gifts */}
          <li>
            <h3 className="heading-3 text-dark mb-3">Gifts</h3>
            <p className="text-dark">
              We are extremely grateful to celebrate this wonderful day with our loved ones. If you feel inclined to
              provide a gift, a contribution towards our honeymoon/next life adventure would be greatly appreciated. A
              busta/card box will be at our reception!
            </p>
          </li>

          {/* Dress Code */}
          <li>
            <h3 className="heading-3 text-dark mb-3">Dress Code</h3>
            <p className="text-dark">
              Formal attire / whatever makes you feel fabulous :)
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}