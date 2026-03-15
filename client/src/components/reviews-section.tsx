import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { SiGoogle } from "react-icons/si";

const FALLBACK = { rating: 5.0, reviewCount: 119 };

export default function ReviewsSection() {
  const { data } = useQuery<{ rating: number; reviewCount: number }>({
    queryKey: ["/api/reviews"],
  });

  const rating = data?.rating ?? FALLBACK.rating;
  const reviewCount = data?.reviewCount ?? FALLBACK.reviewCount;
  const fullStars = Math.round(rating);

  return (
    <section className="py-4 bg-background border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <div className="flex items-center gap-1.5">
            <SiGoogle className="text-[#4285F4]" size={16} />
            <span className="font-serif text-sm text-muted-foreground">Google Reviews</span>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: fullStars }).map((_, i) => (
              <Star key={i} size={15} className="fill-accent text-accent" />
            ))}
          </div>
          <span className="font-serif text-sm text-foreground">
            Rated <span className="text-accent font-bold">{rating.toFixed(1)}</span> by{" "}
            <span className="text-accent font-bold">{reviewCount}</span> happy clients
          </span>
        </div>
      </div>
    </section>
  );
}
