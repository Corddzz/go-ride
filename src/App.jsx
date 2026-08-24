import "./index.css";
import { useState, useEffect } from "react";
import Toyota from "./assets/Toyota.png";
import Nissan from "./assets/Nissan.png";
import Suzuki from "./assets/Suzuki.png";
import Mitsubishi from "./assets/Mitsubishi.png";
import Chevy from "./assets/Chevy.png";
import Ford from "./assets/Ford.png";
import Honda from "./assets/Honda.png";
import Hyundai from "./assets/Hyundai.png";
import Kia from "./assets/Kia.png";
import RideNowIcon from "./assets/RideNow_icon.svg";
import Card from "./components/Card";
import Badge from "./components/Badge";
import { Testimonial } from "./components/Testimonial";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cars = [
    { name: "Toyota", logo: Toyota, alt: "Toyota Logo" },
    { name: "Nissan", logo: Nissan, alt: "Nissan Logo" },
    { name: "Suzuki", logo: Suzuki, alt: "Suzuki Logo" },
    { name: "Mitsubishi", logo: Mitsubishi, alt: "Mitsubishi Logo" },
    { name: "Chevy", logo: Chevy, alt: "Chevy Logo" },
    { name: "Ford", logo: Ford, alt: "Ford Logo" },
    { name: "Honda", logo: Honda, alt: "Honda Logo" },
    { name: "Hyundai", logo: Hyundai, alt: "Hyundai Logo" },
    { name: "Kia", logo: Kia, alt: "Kia Logo" },
  ];

  const badges = [
    { name: "Easy Booking", icon: "✅" },
    { name: "Wide Selection", icon: "🚗" },
    { name: "Reliable Service", icon: "🌟" },
  ];

  const testimonials = [
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      name: "Maria Santos",
      role: "Weekend Explorer",
      text: "Affordable prices, great service, and a wide selection of cars. RideNow is my go-to for every trip I plan!",
      rating: 5,
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      name: "John Driver",
      role: "Business Traveler",
      text: "Best car rental service I've used! The booking process is seamless and the cars are always in perfect condition.",
      rating: 5,
    },
    {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      name: "Sarah Admin",
      role: "Office Manager",
      text: "Reliable and easy to book. Our team loves using RideNow for all our transportation needs. Highly recommended!",
      rating: 5,
    },
    {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      name: "Alex Johnson",
      role: "Frequent Traveler",
      text: "Outstanding service and competitive pricing. I recommend RideNow to all my friends and colleagues.",
      rating: 5,
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1689531953275-a5cfcc458931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxwcm9maWxlfGVufDB8fDB8fHww",
      name: "Emma Wilson",
      role: "Road Trip Enthusiast",
      text: "Perfect for my cross-country road trip! The customer support team was incredibly helpful throughout my journey.",
      rating: 5,
    },
    {
      src: "https://images.unsplash.com/photo-1756806885486-e289ac412b9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxwcm9maWxlfGVufDB8fDB8fHww",
      name: "Michael Chen",
      role: "Corporate Travel Manager",
      text: "We've partnered with RideNow for our company travel needs. They consistently deliver quality vehicles and exceptional service.",
      rating: 5,
    },
    {
      src: "https://images.unsplash.com/photo-1739133783212-e1c93795d9c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkxfHxwcm9maWxlfGVufDB8fDB8fHww",
      name: "Jessica Martinez",
      role: "Adventure Seeker",
      text: "Loved renting from RideNow! The cars are well-maintained and the app is so user-friendly. Will definitely use again!",
      rating: 5,
    },
    {
      src: "https://images.unsplash.com/photo-1521676129211-b7a9e7592e65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxwcm9maWxlfGVufDB8fDB8fHww",
      name: "David Brown",
      role: "Family Vacation Planner",
      text: "As a family of 5, we needed spacious accommodations. RideNow had exactly what we needed at unbeatable prices!",
      rating: 5,
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1732086293220-7ef5613ef2e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE3fHxwcm9maWxlfGVufDB8fDB8fHww",
      name: "Lisa Anderson",
      role: "Student",
      text: "Budget-friendly and hassle-free! RideNow made my semester road trips so much easier. Great discounts for students too!",
      rating: 5,
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1689564003745-946f35267ffe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI5fHxwcm9maWxlfGVufDB8fDB8fHww",
      name: "Robert Thompson",
      role: "Wedding Coordinator",
      text: "Used RideNow for multiple wedding transportation needs. Professional, reliable, and their fleet is simply stunning!",
      rating: 5,
    },
    {
      src: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ0fHxwcm9maWxlfGVufDB8fDB8fHww",
      name: "Nina Patel",
      role: "Event Organizer",
      text: "RideNow made our event logistics so smooth. They accommodated our unique needs and delivered perfect results every time.",
      rating: 5,
    },
    {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      name: "Carlos Rodriguez",
      role: "Real Estate Agent",
      text: "Using RideNow for client pickups has been a game-changer. Professional image, competitive rates, and top-notch vehicles.",
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
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-slate-900 to-indigo-950 text-white font-mono">
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100%);
          }
        }
        
        .slide-in {
          animation: slideIn 0.5s ease-in-out;
        }
        
        .slide-out {
          animation: slideOut 0.5s ease-in-out;
        }
      `}</style>

      {/* Navbar */}
      <nav className=" px-16 py-4 text-white flex justify-between items-center shadow-md shadow-indigo-500/20 sticky top-0 left-0 right-0 z-50 backdrop-blur-md">
        <div>
          <a href="#" className="flex items-center gap-2">
            <img src={RideNowIcon} alt="RideNow Icon" className="h-8" />

            <h1 className="text-2xl font-bold tracking-wider">
              Ride<span className="text-indigo-400">Now</span>
            </h1>
          </a>
        </div>

        <div className="flex gap-4">
          <a href="#get-started">
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:shadow-lg text-center transition-all duration-300 ">
              Get Started
            </button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="get-started"
        className="w-full h-screen px-16 py-9 text-white flex justify-around items-center gap-12">
        {/* LEFT */}
        <div className="flex-1 min-w-0 p-4">
          <h2 className="text-6xl font-bold mb-4">
            Need Wheels? <br />
            <span className="text-indigo-400">RideNow</span>
          </h2>

          <div className="flex gap-4">
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:shadow-lg hover:shadow-indigo-500/50 text-center transition-all duration-300">
              Book RideNow
            </button>

            <a href="#about-us">
              <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10">
                About Us
              </button>
            </a>
          </div>

          <div className="flex flex-row gap-2 mt-9">
            <div className="border-r-indigo-500 border-r flex justify-center items-center flex-col pr-4 mr-2">
              <p className="mt-2 text-center">
                <span className="text-yellow-300 text-4xl">★★★★☆</span> <br />{" "}
                <p className="text-2xl font-semibold text-indigo-500">Rating</p>
                <span className="font-bold text-lg">(4.8/5)</span> <br />
                <span className="text-sm text-white/55">
                  based on 1,200+ reviews
                </span>
              </p>
            </div>
            <div className="border-r-indigo-500 border-r flex justify-center items-center flex-col pr-4 mr-2">
              <p className="font-semibold text-indigo-500 text-4xl text-center">
                Cars
              </p>
              <p className="mt-2 text-md text-center">
                <span className="text-4xl">🚘</span> <br /> 500+ <br />
                Wide Variety of Cars
              </p>
            </div>
            <div className="border-r-indigo-500 border-r flex justify-center items-center flex-col pr-4 mr-2">
              <p className="font-semibold text-indigo-500 text-4xl text-center">
                Happy customers
              </p>
              <p className="mt-2 text-lg text-center">
                <span className="text-4xl">👥</span> <br /> 5K+ <br />
                satisfied customers
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 min-w-0 max-h-[calc(100dvh-120px)] flex flex-col">
          <h3 className="text-xl font-bold shrink-0 text-center">
            Popular Car Brands to choose from.
          </h3>

          <div className="flex-1 min-h-0 w-full grid grid-cols-3 grid-rows-3 gap-4 overflow-hidden p-20">
            {cars.map((car) => (
              <div
                key={car.name}
                className="
          size-full
          flex items-center justify-center
          p-4
          border border-indigo-500
          bg-indigo-50/10
          rounded-lg
          shadow-md
          hover:shadow-lg
          hover:shadow-indigo-500/50
          transition-all duration-300
          hover:translate-y-[-4px]
          cursor-pointer
        ">
                <img
                  src={car.logo}
                  alt={car.alt}
                  className="max-w-[80%] max-h-[80%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking section */}
      <section className="p-4 min-h-screen font-sans border-y border-indigo-500/20 flex items-center justify-center mt-4 ">
        <Card className="hover:shadow-indigo-500/50 transition-all duration-300">
          <h3 className="text-center font-bold text-2xl text-indigo-400">
            Book Your Ride
          </h3>
          <form action="#">
            <div className="grid grid-cols-2 gap-4 p-4">
              <label
                htmlFor="pickup-location"
                className="block mt-4 text-white/70 tracking-wider">
                Pickup Location
                <input
                  type="text"
                  id="pickup-location"
                  placeholder="Enter city or address"
                  className="w-full p-2 mt-2 mb-4 border border-indigo-500/20 rounded-lg bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </label>
              <label
                htmlFor="dropoff-location"
                className="block mt-4 text-white/70 tracking-wider">
                Drop-off Location
                <input
                  type="text"
                  id="dropoff-location"
                  placeholder="Enter city or address"
                  className="w-full p-2 mt-2 mb-4 border border-indigo-500/20 rounded-lg bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </label>
              <label
                htmlFor="pickup-date"
                className="block mt-4 text-white/70 tracking-wider">
                Pickup Date
                <input
                  type="date"
                  id="pickup-date"
                  className="w-full p-2 mt-2 mb-4 border border-indigo-500/20 rounded-lg bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </label>
              <label
                htmlFor="return-date"
                className="block mt-4 text-white/70 tracking-wider">
                Return Date
                <input
                  type="date"
                  id="return-date"
                  className="w-full p-2 mt-2 mb-4 border border-indigo-500/20 rounded-lg bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </label>
              <label
                htmlFor="car-type"
                className="block mt-4 text-white/70 tracking-wider">
                Car Type
                <select
                  id="car-type"
                  className="w-full p-2 mt-2 mb-4 border border-indigo-500/20 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer">
                  <option disabled selected>
                    Select Car Type
                  </option>
                  <option value="economy">Economy</option>
                  <option value="premium">Premium</option>
                  <option value="luxury">Luxury</option>
                </select>
              </label>
              <label
                htmlFor="car-type"
                className="block mt-4 text-white/70 tracking-wider">
                Seater Type
                <select
                  id="car-type"
                  className="w-full p-2 mt-2 mb-4 border border-indigo-500/20 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer">
                  <option disabled selected>
                    Select Seater Type
                  </option>
                  <option>4-5 seaters</option>
                  <option>6-7 seaters</option>
                  <option>8+ seaters</option>
                </select>
              </label>

              <div className="col-span-2 flex items-center justify-center py-4">
                <button
                  type="submit"
                  className="hover:shadow-lg hover:shadow-indigo-500/50 bg-indigo-500 rounded-lg h-12 px-8 transition-all duration-300 text-white font-semibold">
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </Card>
      </section>

      {/* About section */}
      <section
        id="about-us"
        className="p-4 min-h-screen font-sans border-y border-indigo-500/20 flex items-center justify-center">
        <div className="max-w-3xl text-center p-4">
          <span className="text-2xl font-semibold uppercase tracking-widest text-indigo-500">
            About RideNow
          </span>

          <h4 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            Your journey starts with the right ride.
          </h4>

          <p className="text-lg leading-relaxed text-white/70">
            At RideNow, we make renting a car simple from booking to drop-off.
            Whether you're heading out for a weekend adventure, a business trip,
            or just need a car for the day, you can find a vehicle that fits
            your plans and budget all in one place.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm font-medium">
            {badges.map((badge) => (
              <Badge key={badge.name}>
                {badge.icon} {badge.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="p-4 min-h-screen font-sans border-y border-indigo-500/20 flex flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-indigo-100 mb-2">
              What Our Customers Say
            </h2>
            <p className="text-indigo-300">
              Join thousands of satisfied riders
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative flex justify-center items-center">
            {/* Carousel Wrapper */}
            <div className="w-full max-w-2xl overflow-hidden rounded-lg">
              <div className="relative h-96 slide-in" key={currentIndex}>
                <Testimonial
                  src={testimonials[currentIndex].src}
                  name={testimonials[currentIndex].name}
                  role={testimonials[currentIndex].role}
                  text={testimonials[currentIndex].text}
                  rating={testimonials[currentIndex].rating}
                />
              </div>
            </div>

            {/* Left Arrow Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 text-indigo-400 hover:text-indigo-200 transition-colors duration-200 focus:outline-none"
              aria-label="Previous testimonial">
              <svg
                className="w-8 h-8"
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

            {/* Right Arrow Button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 text-indigo-400 hover:text-indigo-200 transition-colors duration-200 focus:outline-none"
              aria-label="Next testimonial">
              <svg
                className="w-8 h-8"
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

          {/* Dot Indicators */}
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

          {/* Counter */}
          <div className="text-center mt-6 text-indigo-300 text-sm">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
