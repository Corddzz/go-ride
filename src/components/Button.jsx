const Button = ({ children, className }) => {
  return (
    <button
      className={`rounded-lg bg-indigo-600 px-4 py-2 text-white hover:shadow-lg hover:shadow-indigo-500/50 text-center transition-all duration-300 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
