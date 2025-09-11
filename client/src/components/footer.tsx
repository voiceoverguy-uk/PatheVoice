import { Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/voiceoverguy" },
    { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@voiceoverguyharris" },
  ];
  
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
            <div className="flex flex-col items-center md:items-start space-y-2">
              <a 
                href="https://voiceoverguy.co.uk" 
                className="text-muted-foreground hover:text-accent transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="footer-link-main-site"
              >
                Main VoiceoverGuy Site
              </a>
              <a 
                href="https://voiceoverguy.co.uk/pathe-news-voice" 
                className="text-muted-foreground hover:text-accent transition-colors" 
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
                className="text-muted-foreground hover:text-accent transition-colors bg-transparent border-none p-0 cursor-pointer"
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
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-accent transition-colors"
                  data-testid={`footer-social-${social.name.toLowerCase()}`}
                  aria-label={`Follow on ${social.name}`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
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
            &copy; {currentYear} Guy Harris - VoiceoverGuy. All rights reserved. | British Male Voiceover & Pathé News Voice specialist
          </p>
        </div>
      </div>
    </footer>
  );
}
