const Badge = ({ children }) => {
  return (
    <span className="rounded-full bg-indigo-500/10 text-white px-4 py-2 hover:-translate-y-[4px] hover:shadow-indigo-500/10 transition-all duration-300 border border-indigo-500 hover:cursor-pointer hover:shadow-lg hover:bg-indigo-500/20">
      {children}
    </span>
  );
};

export default Badge;
