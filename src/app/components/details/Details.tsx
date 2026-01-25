export default function Details() {
  return (
    <section
      id="details"
    >
      <div className="container py-[60px] text-pearl">
        <h2 className="heading-2 text-pearl pb-[16px] sm:pb-[32px] text-center">Details</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[40px] font-didot">
          {/* Location */}
          <li>
            <h3 className="heading-3 mb-3">Location</h3>
            <p className="mb-4 font-didot">
              The Great Hall is located at 1087 Queen Street W. and is situated on the south east corner of Queen and
              Dovercourt Rd. Wedding celebrations will take place on the second floor of the venue in the Conversation
              Room and Main Hall.
            </p>

            <h4 className="font-didot text-lg font-bold mb-1">Parking</h4>
            <p className="mb-4">
              Green P parking is located a short distance from the Great Hall at 45 Abell St.
              and is accessible from both Abell St. and Lisgar Ave. Additionally, street parking is available throughout
              the neighbourhood.
            </p>

            <h4 className="heading-4 mb-1">Public Transit</h4>
            <p className="mb-4">
              If you are making your way via TTC, the 501 streetcar stops at Queen
              Street W. and Dovercourt Rd.
            </p>
          </li>

          {/* Accommodations */}
          <li>
            <h3 className="heading-3 mb-3">Accommodations</h3>
            <p className="mb-4">
              If you are coming in from out of town, we recommend the following hotels in the area, which are within
              walking distance of the venue!
            </p>

            <div className="mb-4">
              <h4 className="font-didot  text-lg font-bold mb-1">The Drake Hotel</h4>
              <p className="mb-2">
                <span className="block">1150 Queen St W. </span>
                <span className="block">Toronto, ON M6J 1J3</span>
              </p>
              <a
                href="https://thedrake.ca/thedrakehotel/"
                target="_blank"
                rel="noopener noreferrer"
                className=" underline hover:no-underline"
              >
                thedrake.ca/thedrakehotel
              </a>
              <p className="mt-2 italic">
                * If you are looking to stay at the Drake Hotel from April 24-26, please use the
                code <strong>JM20</strong> to receive a 20% discount on web bookings.
              </p>
            </div>

            <div>
              <h4 className="font-didot text-lg font-bold mb-1">The Gladstone House</h4>
              <p className="mb-2">
                <span className="block">1214 Queen St W.</span>
                <span className="block">Toronto, ON M6J 1J6</span>
              </p>
              <a
                href="https://www.gladstonehouse.ca"
                target="_blank"
                rel="noopener noreferrer"
                className=" underline hover:no-underline"
              >
                gladstonehouse.ca
              </a>
            </div>
          </li>

          {/* Gifts */}
          <li>
            <h3 className="heading-3 mb-3">Gifts</h3>
            <p>
              We are extremely grateful to celebrate this wonderful day with our loved ones. If you feel inclined to
              provide a gift, a contribution towards our honeymoon/next life adventure would be greatly appreciated. A
              busta/card box will be at our reception!
            </p>
          </li>

          {/* Dress Code */}
          <li>
            <h3 className="heading-3 mb-3">Dress Code</h3>
            <p>
              Formal attire / whatever makes you feel fabulous :)
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}