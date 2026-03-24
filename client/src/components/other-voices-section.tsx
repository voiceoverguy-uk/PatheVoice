export default function OtherVoicesSection() {
  return (
    <section className="py-16 bg-background scroll-reveal">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-newsreel text-4xl md:text-5xl mb-6 tracking-wider text-foreground" data-testid="heading-other-voices">
            OTHER <span className="text-accent">CHARACTER VOICES</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-other-voices-description">
            Beyond the Pathé Voice, I specialize in other distinctive character voices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-primary/5 p-8 border-2 border-accent/20 text-center hover:border-accent/40 transition-colors">
            <h3 className="font-serif text-2xl mb-4 text-foreground" data-testid="heading-santa-voice">
              UK's Voice of Santa
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Bringing magic to Christmas with an authentic, warm Santa voice that delights children and adults alike.
            </p>
            <a 
              href="https://www.voiceoverguy.co.uk/santa-voice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-6 py-3 font-newsreel tracking-wide hover:bg-accent/90 transition-colors"
              data-testid="link-santa-voice"
            >
              HEAR SANTA VOICE
            </a>
          </div>

          <div className="bg-primary/5 p-8 border-2 border-accent/20 text-center hover:border-accent/40 transition-colors">
            <h3 className="font-serif text-2xl mb-4 text-foreground" data-testid="heading-attenborough-voice">
              David Attenborough Impression
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              The UK's finest David Attenborough impression, perfect for documentaries and nature content.
            </p>
            <a 
              href="https://www.voiceoverguy.co.uk/david-attenborough-voice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-6 py-3 font-newsreel tracking-wide hover:bg-accent/90 transition-colors"
              data-testid="link-attenborough-voice"
            >
              HEAR ATTENBOROUGH VOICE
            </a>
          </div>

          <div className="bg-primary/5 p-8 border-2 border-accent/20 text-center hover:border-accent/40 transition-colors">
            <h3 className="font-serif text-2xl mb-4 text-foreground" data-testid="heading-football-voice">
              Football Commentator Voice
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Highly sought after voice of football commentary. As used in films, tv ads and radio commercials.
            </p>
            <a
              href="https://www.voiceoverguy.co.uk/football-commentator-voice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-6 py-3 font-newsreel tracking-wide hover:bg-accent/90 transition-colors"
              data-testid="link-football-voice"
            >
              HEAR FOOTBALL VOICE
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="font-body text-lg text-muted-foreground mb-6" data-testid="text-more-voices">
            For other character voices beyond the Pathé Voice, visit my main site homepage at
          </p>
          <a 
            href="https://www.voiceoverguy.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 font-newsreel text-xl tracking-wide hover:bg-primary/90 transition-colors border-2 border-primary-foreground/20"
            data-testid="link-main-site"
          >
            VISIT VOICEOVERGUY.CO.UK
          </a>
        </div>
      </div>
    </section>
  );
}