import Button from "./Button";

const Navbar = ({ logo }) => {
  return (
    <nav
      className="px-4 sm:px-8 lg:px-16 py-4 text-white flex justify-between items-center shadow-md shadow-indigo-500/20 sticky top-0 left-0 right-0 z-50 backdrop-blur-md"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out">
      <div>
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="RideNow Icon" className="h-6 sm:h-8" />

          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wider">
            Go<span className="text-indigo-400">Ride</span>
          </h1>
        </a>
      </div>

      <div className="flex gap-4">
        <a href="#get-started">
          <Button className="text-sm sm:text-base px-3 sm:px-4">
            Get Started
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
