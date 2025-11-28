import { Review } from "@/lib/types";
import { ModeBadge } from "./ModeBadge";
import { Star } from "lucide-react";

interface UserReviewProps {
  review: Review;
}

export function UserReview({ review }: UserReviewProps) {
  return (
    <div className="border rounded-lg p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-semibold text-sm">{review.authorName}</p>
          <ModeBadge mode={review.authorMode} size="sm" />
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{review.text}</p>
      <div className="text-xs text-muted-foreground flex justify-between">
        <span>Project: {review.projectName}</span>
        <span>{review.date}</span>
      </div>
    </div>
  );
}
