const PLACE_ID = 'ChIJL1W4QyVneUgRBV8j4XrOzaM';
const FALLBACK = { rating: 5.0, reviewCount: 119 };
const CACHE_DURATION = 24 * 60 * 60 * 1000;

let cache = { data: null, timestamp: 0 };

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (cache.data && Date.now() - cache.timestamp < CACHE_DURATION) {
    return res.status(200).json(cache.data);
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return res.status(200).json(FALLBACK);
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.result) {
      const result = {
        rating: data.result.rating ?? FALLBACK.rating,
        reviewCount: data.result.user_ratings_total ?? FALLBACK.reviewCount,
      };
      cache = { data: result, timestamp: Date.now() };
      return res.status(200).json(result);
    }

    return res.status(200).json(FALLBACK);
  } catch {
    return res.status(200).json(FALLBACK);
  }
}
