import { ExternalLink, Mic2 } from "lucide-react";

export default function StudioPromotion() {
  return (
    <section className="py-8 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border-y-2 border-accent/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 text-center">
          <div className="hidden md:block">
            <Mic2 className="w-8 h-8 text-accent animate-pulse" />
          </div>
          
          <div className="vintage-border bg-card/50 p-4 rounded">
            <p className="font-serif text-sm md:text-base text-muted-foreground mb-2 tracking-wide">
              📻 STUDIO BULLETIN
            </p>
            <h3 className="font-newsreel text-lg md:text-xl tracking-wider mb-2" data-testid="heading-studio-promo">
              PROFESSIONAL RECORDING STUDIO AVAILABLE
            </h3>
            <p className="font-body text-sm md:text-base text-muted-foreground mb-3">
              Need a space for voiceover or podcast recording? Our studio is available for hire!
            </p>
            <a 
              href="https://www.voiceoverguy.co.uk/voiceover-studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors duration-300 font-serif text-sm tracking-wide"
              data-testid="link-studio-hire"
            >
              <span>LEARN MORE ABOUT STUDIO HIRE</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <div className="hidden md:block">
            <Mic2 className="w-8 h-8 text-accent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}