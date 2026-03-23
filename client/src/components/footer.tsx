import { Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/voiceoverguy" },
    { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@voiceoverguyharris" },
  ];

  const links = [
    { label: "VoiceoverGuy", url: "https://voiceoverguy.co.uk", external: true },
    { label: "Pathé News Voiceover", url: "https://www.voiceoverguy.co.uk/pathe-news-voice", external: true },
    { label: "Voice of God", url: "https://www.voiceofgod.co.uk", external: true },
    { label: "Santa Guy", url: "https://www.santaguy.co.uk", external: true },
    { label: "Halloween Voice", url: "https://www.halloweenvoice.co.uk", external: true },
    { label: "Privacy Policy", url: "/privacy-policy", external: false },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-newsreel text-xl tracking-wider shrink-0">
            <span className="text-primary">PATHÉ</span>{" "}
            <span className="text-accent">VOICE</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors font-serif"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.url}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors font-serif"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label={`Follow on ${social.name}`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground font-serif">
          &copy; {currentYear} Guy Harris - VoiceoverGuy. All rights reserved. | British Male Voiceover & Pathé News Voice specialist
        </div>
      </div>
    </footer>
  );
}
