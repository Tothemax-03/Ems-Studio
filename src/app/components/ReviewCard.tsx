import { Star } from "lucide-react";
import { Review } from "../data/units";

interface ReviewCardProps {
  review: Review;
  accentColor: string;
}

export function ReviewCard({ review, accentColor }: ReviewCardProps) {
  const avatarColors = [
    { bg: "#e8f5f8", text: "#2196A6" },
    { bg: "#edf9f1", text: "#3aaa5c" },
    { bg: "#f5efe9", text: "#8b6e4e" },
    { bg: "#f0eaf9", text: "#7c5cbf" },
  ];
  const colorSet = avatarColors[review.id % avatarColors.length];

  return (
    <div className="bg-white rounded-2xl p-5 border border-stone-100 hover:shadow-md transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: colorSet.bg, color: colorSet.text, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.8rem" }}
          >
            {review.avatar}
          </div>
          <div>
            <p
              className="text-[#1a1a2e]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
            >
              {review.name}
            </p>
            <p className="text-stone-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              {review.location}
            </p>
          </div>
        </div>
        <span className="text-stone-400 text-xs flex-shrink-0 mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
          {review.date}
        </span>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={13}
            className={star <= review.rating ? "fill-amber-400 text-amber-400" : "text-stone-200 fill-stone-200"}
          />
        ))}
      </div>

      {/* Comment */}
      <p
        className="text-stone-600 text-sm leading-relaxed"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {review.comment}
      </p>
    </div>
  );
}
