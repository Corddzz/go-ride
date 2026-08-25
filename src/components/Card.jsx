const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-6 shadow-lg shadow-indigo-500/5 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:shadow-indigo-500/20 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
