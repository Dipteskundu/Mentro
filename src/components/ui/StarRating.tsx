interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
}

export default function StarRating({
  rating,
  reviewCount,
  size = "sm",
}: StarRatingProps) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(
        <svg
          key={i}
          className={`${size === "sm" ? "w-4 h-4" : "w-5 h-5"} text-yellow-400 fill-current`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(
        <svg
          key={i}
          className={`${size === "sm" ? "w-4 h-4" : "w-5 h-5"} text-yellow-400`}
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id={`half-${rating}`}>
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#half-${rating})`}
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          className={`${size === "sm" ? "w-4 h-4" : "w-5 h-5"} text-gray-300 fill-current`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex">{stars}</div>
      <span className={`${size === "sm" ? "text-sm" : "text-base"} font-medium text-gray-700`}>
        {rating.toFixed(1)}
      </span>
      {reviewCount !== undefined && (
        <span className={`${size === "sm" ? "text-sm" : "text-base"} text-gray-500`}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
}
