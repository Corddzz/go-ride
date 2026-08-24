const Avatar = ({ src, alt = "Avatar" }) => {
  return (
    <div className="size-20 overflow-hidden rounded-full">
      <img className="size-full object-cover" src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
