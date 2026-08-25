import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What age do I need to be to rent a car?",
      answer:
        "You must be at least 18 years old with a valid driver's license to rent a car from RideNow. Some premium vehicles may require a minimum age of 25.",
    },
    {
      id: 2,
      question: "What documents do I need to provide?",
      answer:
        "You'll need a valid photo ID, a valid driver's license, and a credit card for payment and security deposit. International customers may need an International Driving Permit (IDP).",
    },
    {
      id: 3,
      question: "Can I cancel my booking?",
      answer:
        "Yes, you can cancel for free up to 24 hours before your pick-up time. Cancellations made within 24 hours may incur a charge depending on your plan.",
    },
    {
      id: 4,
      question: "Is insurance included in the rental price?",
      answer:
        "Basic insurance is included in all rental packages. You can upgrade to premium coverage or full coverage for additional peace of mind at checkout.",
    },
    {
      id: 5,
      question: "What if I have an accident?",
      answer:
        "If you're involved in an accident, contact our 24/7 support team immediately. We'll guide you through the process and handle all insurance claims for you.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 min-h-screen font-sans border-y border-indigo-500/20">
      <div className="max-w-3xl mx-auto">
        <h2
          className="section-title text-3xl md:text-4xl font-bold text-center text-white mb-10"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="300"
          data-aos-once="true">
          FAQ
        </h2>
        <div className="faq-container space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-lg shadow-md overflow-hidden border border-indigo-500/20 bg-indigo-500/5 shadow-indigo-500/5 hover:border-indigo-500/40 hover:shadow-indigo-500/20 transition-all duration-300">
              <button
                className="faq-question w-full flex items-center justify-between p-4 md:p-5 text-left text-white font-medium  transition-all duration-200 focus:outline-none"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={activeIndex === faq.id}>
                <span className="text-base md:text-lg">{faq.question}</span>
                <span
                  className={`faq-toggle ml-4 text-2xl transition-transform duration-300 ${
                    activeIndex === faq.id ? "rotate-180" : ""
                  }`}>
                  ⌄
                </span>
              </button>
              <div
                className={`faq-answer px-4 md:px-5 transition-all duration-300 ease-in-out ${
                  activeIndex === faq.id
                    ? "py-4 md:py-5 max-h-96"
                    : "max-h-0 py-0"
                } overflow-hidden text-white`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
