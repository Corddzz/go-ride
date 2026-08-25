import { Testimonial } from "../components/Testimonial";
import { useState, useEffect } from "react";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      name: "Maria Santos",
      role: "Weekend Explorer",
      text: "Affordable prices, great service, and a wide selection of cars. GoRide is my go-to for every trip I plan!",
      rating: 5,
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      name: "John Driver",
      role: "Business Traveler",
      text: "Best car rental service I've used! The booking process is seamless and the cars are always in perfect condition.",
      rating: 4,
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      name: "Sarah Admin",
      role: "Office Manager",
      text: "Reliable and easy to book. Our team loves using GoRide for all our transportation needs. Highly recommended!",
      rating: 4,
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      name: "Alex Johnson",
      role: "Frequent Traveler",
      text: "Outstanding service and competitive pricing. I recommend GoRide to all my friends and colleagues.",
      rating: 5,
    },
    {
      id: 5,
      src: "https://plus.unsplash.com/premium_photo-1689531953275-a5cfcc458931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxwcm9maWxlfGVufDB8fDB8fHww",
      name: "Emma Wilson",
      role: "Road Trip Enthusiast",
      text: "Perfect for my cross-country road trip! The customer support team was incredibly helpful throughout my journey.",
      rating: 4,
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1756806885486-e289ac412b9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxwcm9maWxlfGVufDB8fDB8fHww",
      name: "Michael Chen",
      role: "Corporate Travel Manager",
      text: "We've partnered with GoRide for our company travel needs. They consistently deliver quality vehicles and exceptional service.",
      rating: 5,
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1739133783212-e1c93795d9c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkxfHxwcm9maWxlfGVufDB8fDB8fHww",
      name: "Jessica Martinez",
      role: "Adventure Seeker",
      text: "Loved renting from GoRide! The cars are well-maintained and the app is so user-friendly. Will definitely use again!",
      rating: 4,
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1521676129211-b7a9e7592e65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxwcm9maWxlfGVufDB8fDB8fHww",
      name: "David Brown",
      role: "Family Vacation Planner",
      text: "As a family of 5, we needed spacious accommodations. GoRide had exactly what we needed at unbeatable prices!",
      rating: 5,
    },
    {
      id: 9,
      src: "https://plus.unsplash.com/premium_photo-1732086293220-7ef5613ef2e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE3fHxwcm9maWxlfGVufDB8fDB8fHww",
      name: "Lisa Anderson",
      role: "Student",
      text: "Budget-friendly and hassle-free! GoRide made my semester road trips so much easier. Great discounts for students too!",
      rating: 5,
    },
    {
      id: 10,
      src: "https://plus.unsplash.com/premium_photo-1689564003745-946f35267ffe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI5fHxwcm9maWxlfGVufDB8fDB8fHww",
      name: "Robert Thompson",
      role: "Wedding Coordinator",
      text: "Used GoRide for multiple wedding transportation needs. Professional, reliable, and their fleet is simply stunning!",
      rating: 4,
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ0fHxwcm9maWxlfGVufDB8fDB8fHww",
      name: "Nina Patel",
      role: "Event Organizer",
      text: "GoRide made our event logistics so smooth. They accommodated our unique needs and delivered perfect results every time.",
      rating: 4,
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      name: "Carlos Rodriguez",
      role: "Real Estate Agent",
      text: "Using GoRide for client pickups has been a game-changer. Professional image, competitive rates, and top-notch vehicles.",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="p-4 min-h-screen font-sans border-y border-indigo-500/20 flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-indigo-100 mb-2"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-once="true">
            What Our Customers Say
          </h2>
          <p
            className="text-indigo-300 mt-4"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-once="true">
            Join thousands of satisfied riders
          </p>
        </div>

        <div className="relative flex justify-center items-center px-10 sm:px-12">
          <div className="w-full max-w-2xl overflow-hidden rounded-lg">
            <div
              className="flex justify-center items-center min-h-[26rem] sm:min-h-[24rem] slide-in"
              key={currentIndex}>
              <Testimonial
                src={testimonials[currentIndex].src}
                alt={testimonials[currentIndex].name}
                name={testimonials[currentIndex].name}
                role={testimonials[currentIndex].role}
                text={testimonials[currentIndex].text}
                rating={testimonials[currentIndex].rating}
              />
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-1 sm:p-2 text-indigo-400 hover:text-indigo-200 transition-colors duration-200 focus:outline-none"
            aria-label="Previous testimonial">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-1 sm:p-2 text-indigo-400 hover:text-indigo-200 transition-colors duration-200 focus:outline-none"
            aria-label="Next testimonial">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-indigo-500 w-8"
                  : "bg-indigo-500/30 w-2 hover:bg-indigo-500/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-6 text-indigo-300 text-sm">
          {currentIndex + 1} / {testimonials.length}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
