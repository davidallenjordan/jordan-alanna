export default function FAQ() {
  const faqs = [
    {
      question: "What date should I RSVP by?",
      answer: "We kindly ask that you RSVP by March 10, 2025."
    },
    {
      question: "What time should I arrive?",
      answer: "Please arrive to the venue at 4:00pm! The ceremony will begin promptly at 4:30pm."
    },
    {
      question: "What is the address of the venue?",
      answer: "The wedding ceremony and reception (including cocktail hour, dinner and dancing) will take place at The Great Hall which is located at 1087 Queen Street W. Toronto, ON."
    },
    {
      question: "What is the dress code?",
      answer: "Formal attire / whatever makes you feel fabulous :)"
    },
    {
      question: "What is the easiest way to get to / from the venue?",
      answer: "The Great Hall is located at the corner of Queen Street W and Dovercourt Ave and is easily accessible by TTC, car and/or walking."
    },
    {
      question: "Are plus ones allowed?",
      answer: "We respectfully ask that only the guests listed on your wedding invitation attend our celebration."
    },
    {
      question: "Are children allowed?",
      answer: "While we love all of your little ones, we are only able to accommodate the children whose names are listed on the invitation."
    }
  ]

  return (
    <section
      className="bg-pearl"
      id="faq"
    >
      <div className="container py-[60px]">
        <h2 className="heading-2 text-dark pb-[16px] sm:pb-[32px]">FAQs</h2>

        <div className="space-y-8 max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="heading-3 text-dark mb-3">
                {faq.question}
              </h3>
              <p className="text-dark">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <p className="text-dark text-center mt-12 italic font-bold">
          Please reach out to Alanna or Jordan directly if you have any specific questions!
        </p>
      </div>
    </section>
  )
}