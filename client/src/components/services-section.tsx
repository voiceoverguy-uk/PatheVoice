import { BroadcastTowerDeco, SkyscraperDeco, RadioWavesDeco, AntennaDeco, FilmReelDeco, StageCurtainDeco } from './icons';

export default function ServicesSection() {
  const services = [
    {
      icon: BroadcastTowerDeco,
      title: "COMMERCIALS & BRANDING",
      description: "TV & radio commercials, brand films, museum & heritage installs"
    },
    {
      icon: SkyscraperDeco,
      title: "CORPORATE CONTENT",
      description: "Corporate events & awards VOs, explainer videos, trailers"
    },
    {
      icon: RadioWavesDeco,
      title: "GAMES & APPS",
      description: "Games & apps needing a vintage British narrator"
    },
    {
      icon: AntennaDeco,
      title: "SOCIAL MEDIA",
      description: "Social media campaigns, parody sketches, viral stings"
    },
    {
      icon: FilmReelDeco,
      title: "DOCUMENTARIES",
      description: "Historical documentaries and period-accurate narration"
    },
    {
      icon: StageCurtainDeco,
      title: "SPECIAL EVENTS",
      description: "Award ceremonies, product launches, exhibition openings"
    }
  ];

  return (
    <section id="services" className="py-16 bg-secondary scroll-reveal">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-newsreel text-4xl md:text-5xl text-center mb-12 tracking-wider" data-testid="heading-services">
          POPULAR <span className="text-accent">USES</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-card p-6 vintage-border" data-testid={`service-${index}`}>
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className="w-8 h-8 text-accent flex-shrink-0" />
                  <h3 className="font-serif text-xl tracking-wide" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                </div>
                <p className="font-body text-muted-foreground" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
