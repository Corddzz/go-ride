const Button = ({ children, className = "", variant = "primary" }) => {
  const variants = {
    primary: "hover:shadow-indigo-500/50 bg-indigo-600",
    secondary: "border border-white/10 bg-white/5 hover:bg-white/10",
  };

  return (
    <button
      className={`rounded-lg px-4 py-2 text-white hover:shadow-md text-center transition-all duration-300 ${className}
      ${variants[variant]}
      `}>
      {children}
    </button>
  );
};

export default Button;
