import AudioPlayer from "@/components/audio-player";

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

          {/* Media row: audio demo (left) + Aston Villa Short (right) */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 max-w-5xl mx-auto">

            {/* Audio player — stacks second on mobile, left on desktop */}
            <div className="order-last md:order-first shrink-0 w-full max-w-[270px] mx-auto md:mx-0">
              <div className="vintage-border overflow-hidden bg-card">
                <AudioPlayer
                  src="/pathe-voice-demo.mp3"
                  logoSrc="/pathe-logo.png"
                  title="Pathé Newsreel Voice Demo"
                  subtitle="Voice Demo — Guy Harris"
                  portrait
                />
              </div>
              <div className="mt-3 text-center">
                <p className="font-newsreel text-base tracking-widest text-accent">PATHÉ VOICE DEMO</p>
                <p className="font-serif text-xs text-muted-foreground uppercase tracking-widest mt-0.5">Voice Demo — Guy Harris</p>
              </div>
            </div>

            {/* Aston Villa Short — stacks first on mobile, right on desktop */}
            <div className="order-first md:order-last shrink-0 w-full max-w-[270px] mx-auto md:mx-0">
              <div className="vintage-border overflow-hidden bg-card">
                <div className="aspect-[9/16]">
                  <iframe
                    src="https://www.youtube.com/embed/Lp4lZUcdQ_w"
                    title="Aston Villa — Official Pathé Voiceover by Guy Harris"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="font-newsreel text-base tracking-widest text-accent">ASTON VILLA</p>
                <p className="font-serif text-xs text-muted-foreground uppercase tracking-widest mt-0.5">Official Voiceover</p>
              </div>
            </div>

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
