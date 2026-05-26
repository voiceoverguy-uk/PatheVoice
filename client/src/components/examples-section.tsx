export default function ExamplesSection() {
  return (
    <section id="examples" className="py-16 scroll-reveal">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-newsreel text-4xl md:text-5xl mb-6 tracking-wider" data-testid="heading-examples">
            HEAR THE PATHÉ VOICE <span className="text-accent">IN ACTION</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-examples-description">
            That authentic newsreel delivery bringing authority and nostalgia to modern projects.
          </p>
        </div>

        {/* YouTube Videos */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="vintage-border p-4 bg-card" data-testid="video-container-1">
            <div className="mb-4">
              <iframe 
                src="https://www.youtube.com/embed/WwezBdZv2F4" 
                title="Pathé News Voiceover - Guy Harris Demo 1"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-48 md:h-52"
                data-testid="youtube-video-1"
              />
            </div>
            <h3 className="font-newsreel text-xl tracking-wide mb-2" data-testid="video-title-1">
              PATHÉ NEWS DEMO REEL
            </h3>
            <p className="font-serif text-muted-foreground" data-testid="video-description-1">
              Classic newsreel style demonstration
            </p>
          </div>
          
          <div className="vintage-border p-4 bg-card" data-testid="video-container-2">
            <div className="mb-4">
              <iframe 
                src="https://www.youtube.com/embed/Lp4lZUcdQ_w" 
                title="Aston Villa — Official Pathé Voiceover by Guy Harris"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-48 md:h-52"
                data-testid="youtube-video-2"
              />
            </div>
            <h3 className="font-newsreel text-xl tracking-wide mb-2" data-testid="video-title-2">
              ASTON VILLA SHORT
            </h3>
            <p className="font-serif text-muted-foreground" data-testid="video-description-2">
              Premier League football in the Pathé style
            </p>
          </div>

          <div className="vintage-border p-4 bg-card" data-testid="video-container-3">
            <div className="mb-4">
              <iframe 
                src="https://www.youtube.com/embed/ArEJtd9c6Uw" 
                title="Pathé News Voiceover - Guy Harris Demo 2"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-48 md:h-52"
                data-testid="youtube-video-3"
              />
            </div>
            <h3 className="font-newsreel text-xl tracking-wide mb-2" data-testid="video-title-3">
              EVERTON PATHÉ VOICEOVER
            </h3>
            <p className="font-serif text-muted-foreground" data-testid="video-description-3">
              Sports newsreel style application
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="font-serif text-lg text-muted-foreground mb-4" data-testid="text-more-examples">
            See more examples on my Pathé News Voice page at
          </p>
          <a 
            href="https://voiceoverguy.co.uk/pathe-news-voice" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 font-semibold text-lg transition-colors duration-300"
            data-testid="link-pathe-portfolio"
          >
            VoiceoverGuy.co.uk/pathe-news-voice
          </a>
        </div>
      </div>
      <div className="film-strip mt-16"></div>
    </section>
  );
}
