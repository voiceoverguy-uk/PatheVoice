export default function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-newsreel text-5xl md:text-7xl lg:text-8xl mb-6 tracking-wider">
            <span className="block text-primary" data-testid="text-main-title">GUY HARRIS</span>
            <span className="block text-accent" data-testid="text-subtitle">AUTHENTIC PATHÉ</span>
            <span className="block text-primary" data-testid="text-voice-title">NEWS VOICE</span>
          </h1>
          
          <div className="news-headline p-6 mx-auto max-w-5xl mb-8">
            <p className="font-serif text-lg md:text-xl text-muted-foreground mb-2" data-testid="text-breaking-news">
              BREAKING NEWS:
            </p>
            <p className="typewriter-text font-serif text-lg md:text-xl lg:text-2xl text-primary font-semibold" data-testid="text-headline">
              "That clipped, upbeat, very British delivery is now available for modern projects!"
            </p>
          </div>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-description">
            Professional British male voiceover artist specialising in the instantly recognisable Pathé newsreel style. Perfect for adverts, documentaries, corporate events, games and apps and social content. Authentic period flair meets broadcast-ready quality.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleScrollToSection('#contact')}
              className="bg-primary text-primary-foreground px-8 py-3 font-newsreel text-lg tracking-wide hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105"
              data-testid="button-book-voice"
            >
              BOOK THE PATHÉ VOICE
            </button>
            <button
              onClick={() => handleScrollToSection('#examples')}
              className="border-2 border-primary text-primary px-8 py-3 font-newsreel text-lg tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-testid="button-hear-examples"
            >
              HEAR EXAMPLES
            </button>
          </div>
        </div>
      </div>
      <div className="film-strip"></div>
    </section>
  );
}
