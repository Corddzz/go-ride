const Card = ({ children, className }) => {
  return (
    <div
      className={`p-4 bg-indigo-500/10 border border-indigo-500 rounded-lg shadow-md shadow-indigo-500/10 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Card;
