import Avatar from "./Avatar";
import Card from "./Card";

export const Testimonial = ({ src, alt, name, role, text, rating }) => {
  return (
    <Card className="max-w-md">
      {/* Header with Avatar and Rating */}
      <div className="flex items-start justify-between mb-4">
        <Avatar src={src} alt={alt} />
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-indigo-400 text-lg">
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Quote Icon */}
      <div className="text-indigo-400 text-3xl mb-3">❝</div>

      {/* Testimonial Text */}
      <p className="text-gray-100 text-sm leading-relaxed mb-4">{text}</p>

      {/* Name and Role */}
      <div className="border-t border-indigo-500/30 pt-3">
        <h4 className="text-indigo-100 font-semibold text-sm">{name}</h4>
        <p className="text-indigo-300/70 text-xs">{role}</p>
      </div>
    </Card>
  );
};
