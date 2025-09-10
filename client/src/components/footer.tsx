export default function Footer() {
  return (
    <footer className="py-12 bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-newsreel text-2xl mb-4 tracking-wider" data-testid="footer-title">
              PATHÉ VOICE
            </h3>
            <p className="font-serif text-muted-foreground" data-testid="footer-description">
              Professional British male voiceover - Authentic newsreel voice for modern projects
            </p>
          </div>
          <div>
            <h4 className="font-newsreel text-lg mb-4 tracking-wide" data-testid="footer-links-title">
              QUICK LINKS
            </h4>
            <div className="space-y-2">
              <a 
                href="https://voiceoverguy.co.uk" 
                className="block text-muted-foreground hover:text-accent transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="footer-link-main-site"
              >
                Main VoiceoverGuy Site
              </a>
              <a 
                href="https://voiceoverguy.co.uk/pathe-news-voice" 
                className="block text-muted-foreground hover:text-accent transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="footer-link-portfolio"
              >
                Full Pathé Portfolio
              </a>
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="block text-muted-foreground hover:text-accent transition-colors text-left"
                data-testid="footer-link-quote"
              >
                Get Quote
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-newsreel text-lg mb-4 tracking-wide" data-testid="footer-connect-title">
              CONNECT
            </h4>
            <p className="font-serif text-muted-foreground mb-2" data-testid="footer-services">
              British male voiceover services
            </p>
            <p className="font-serif text-muted-foreground" data-testid="footer-turnaround">
              Same-day turnaround available
            </p>
          </div>
        </div>
        <div className="film-strip my-8"></div>
        <div className="text-center text-muted-foreground font-serif">
          <p data-testid="footer-copyright">
            &copy; 2024 Guy Harris - VoiceoverGuy. All rights reserved. | British Male Voiceover & Pathé News Voice specialist
          </p>
        </div>
      </div>
    </footer>
  );
}
