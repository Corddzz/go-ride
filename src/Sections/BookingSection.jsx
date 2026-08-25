import Card from "../components/Card";

const BookingSection = () => {
  return (
    <section
      className="p-4 min-h-screen font-sans border-y border-indigo-500/20 flex items-center justify-center mt-4"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true">
      <Card
        className="hover:shadow-indigo-500/50 transition-all duration-300"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="100"
        data-aos-once="true">
        <h3
          className="text-center font-bold text-2xl text-indigo-400"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="200"
          data-aos-once="true">
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
              htmlFor="seater-type"
              className="block mt-4 text-white/70 tracking-wider">
              Seater Type
              <select
                id="seater-type"
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
  );
};

export default BookingSection;
