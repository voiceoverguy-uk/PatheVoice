import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";

const FALLBACK = { rating: 5.0, reviewCount: 120 };
// Exact googleMapsLinks.reviewsUri from Places API (New), verified against VoiceoverGuy's name and website.
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place//data=!4m4!3m3!1s0x4879672543b8552f:0xa3cdce7ae1235f05!9m1!1b1?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA";

export default function ReviewsSection() {
  const { data } = useQuery<{ rating: number; reviewCount: number }>({
    queryKey: ["/api/reviews"],
  });

  const rating = data?.rating ?? FALLBACK.rating;
  const reviewCount = data?.reviewCount ?? FALLBACK.reviewCount;
  const fullStars = Math.round(rating);

  return (
    <section className="py-10 bg-background">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center gap-4">
        <div className="flex items-center gap-3">
          {Array.from({ length: fullStars }).map((_, i) => (
            <Star key={i} size={36} className="fill-accent text-accent" />
          ))}
        </div>
        <p className="font-serif text-xl font-bold text-foreground">
          Rated{" "}
          <span className="text-destructive">{rating.toFixed(1)}</span>{" "}
          on Google by{" "}
          <span className="text-destructive">{reviewCount}</span>{" "}
          Happy Clients
        </p>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors font-serif"
        >
          Read Reviews on Google →
        </a>
      </div>
    </section>
  );
}
