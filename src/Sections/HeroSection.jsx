import Toyota from "../assets/Toyota.png";
import Nissan from "../assets/Nissan.png";
import Suzuki from "../assets/Suzuki.png";
import Mitsubishi from "../assets/Mitsubishi.png";
import Chevy from "../assets/Chevy.png";
import Ford from "../assets/Ford.png";
import Honda from "../assets/Honda.png";
import Hyundai from "../assets/Hyundai.png";
import Kia from "../assets/Kia.png";
import Button from "../components/Button";
import Card from "../components/Card";

const HeroSection = () => {
  const cars = [
    { id: 1, name: "Toyota", logo: Toyota, alt: "Toyota Logo" },
    { id: 2, name: "Nissan", logo: Nissan, alt: "Nissan Logo" },
    { id: 3, name: "Suzuki", logo: Suzuki, alt: "Suzuki Logo" },
    { id: 4, name: "Mitsubishi", logo: Mitsubishi, alt: "Mitsubishi Logo" },
    { id: 5, name: "Chevy", logo: Chevy, alt: "Chevy Logo" },
    { id: 6, name: "Ford", logo: Ford, alt: "Ford Logo" },
    { id: 7, name: "Honda", logo: Honda, alt: "Honda Logo" },
    { id: 8, name: "Hyundai", logo: Hyundai, alt: "Hyundai Logo" },
    { id: 9, name: "Kia", logo: Kia, alt: "Kia Logo" },
  ];

  return (
    <section
      id="get-started"
      className="w-full min-h-screen lg:h-screen px-4 sm:px-8 lg:px-16 xl:px-28 py-24 lg:py-12 text-white flex flex-col lg:flex-row justify-evenly items-center gap-12"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true">
      <div
        className="flex-1 min-w-0 w-full p-2 sm:p-6 lg:p-10 text-center lg:text-left"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="100"
        data-aos-once="true">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Need Wheels? <br />
          <span className="text-indigo-400">GoRide</span>
        </h2>

        <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
          <Button>Book RideNow</Button>

          <a href="#about-us">
            <Button variant="secondary">About Us</Button>
          </a>
        </div>
        <div className="flex flex-row flex-wrap gap-4 sm:gap-2 mt-9 justify-center lg:justify-start">
          <div className="border-r-indigo-500 border-r flex justify-center items-center flex-col pr-4 mr-2">
            <p className="mt-2 text-center">
              <span className="text-yellow-300 text-3xl sm:text-4xl">
                ★★★★☆
              </span>{" "}
              <br />{" "}
              <p className="text-base sm:text-lg font-semibold text-white/40">
                Rating
              </p>
              <span className="font-bold text-lg sm:text-xl">(4.8/5)</span>{" "}
              <br />
              <span className="text-xs sm:text-sm text-white/55">
                based on 1,200+ reviews
              </span>
            </p>
          </div>
          <div className="border-r-indigo-500 border-r flex justify-center items-center flex-col pr-4 mr-2">
            <p className="font-semibold text-indigo-500 text-3xl sm:text-4xl text-center">
              500+
            </p>
            <p className="mt-2 text-md text-center">
              <span className="text-base sm:text-lg font-semibold text-white/40">
                Cars
              </span>
              <br />
              <span className="font-bold text-base sm:text-lg">
                Available
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center flex-col pr-4 mr-2">
            <p className="font-semibold text-indigo-500 text-3xl sm:text-4xl text-center">
              5K+
            </p>
            <p className="mt-2 text-base sm:text-lg text-center">
              <span className="text-base sm:text-lg font-semibold text-white/40">
                Happy
              </span>
              <br /> Customers <br />
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 min-w-0 w-full lg:max-h-[calc(100dvh-120px)] flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold shrink-0 text-center">
          Popular Car Brands to choose from.
        </h3>

        <div className="flex-1 min-h-0 w-full grid grid-cols-3 gap-2 sm:gap-4 overflow-hidden p-4 sm:p-10 lg:p-20 items-center justify-center">
          {cars.map((car, index) => (
            <div
              key={car.id}
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay={50 + index * 30}
              data-aos-once="true">
              <Card className="flex items-center justify-center hover:translate-y-[-4px] transition-transform duration-300">
                <img
                  src={car.logo}
                  alt={car.alt}
                  className="max-w-[80%] max-h-[80%] object-contain"
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
