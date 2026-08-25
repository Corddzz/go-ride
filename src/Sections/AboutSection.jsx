import Badge from "../components/Badge";

const AboutSection = () => {
  const badges = [
    { name: "Easy Booking", icon: "✅" },
    { name: "Wide Selection", icon: "🚗" },
    { name: "Reliable Service", icon: "🌟" },
  ];

  return (
    <section
      id="about-us"
      className="p-4 min-h-screen font-sans border-y border-indigo-500/20 flex items-center justify-center"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true">
      <div className="max-w-3xl text-center p-4">
        <span
          className="text-2xl font-semibold uppercase tracking-widest text-indigo-500"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="100"
          data-aos-once="true">
          About GoRide
        </span>

        <h4
          className="text-3xl md:text-4xl font-bold mt-3 mb-6"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
          data-aos-once="true">
          Your journey starts with the right ride.
        </h4>

        <p
          className="text-lg leading-relaxed text-white/70"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          data-aos-once="true">
          At GoRide, we make renting a car simple from booking to drop-off.
          Whether you're heading out for a weekend adventure, a business trip,
          or just need a car for the day, you can find a vehicle that fits your
          plans and budget all in one place.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm font-medium">
          {badges.map((badge, index) => (
            <Badge
              key={badge.name}
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay={400 + index * 150}
              data-aos-once="true">
              {badge.icon} {badge.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
