export default function ServicesSection() {
  const services = [
    {
      title: "📺 COMMERCIALS & BRANDING",
      description: "TV & radio commercials, brand films, museum & heritage installs"
    },
    {
      title: "🏢 CORPORATE CONTENT",
      description: "Corporate events & awards VOs, explainer videos, trailers"
    },
    {
      title: "🎮 GAMES & APPS",
      description: "Games & apps needing a vintage British narrator"
    },
    {
      title: "📱 SOCIAL MEDIA",
      description: "Social media campaigns, parody sketches, viral stings"
    },
    {
      title: "🎬 DOCUMENTARIES",
      description: "Historical documentaries and period-accurate narration"
    },
    {
      title: "🎪 SPECIAL EVENTS",
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
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 vintage-border" data-testid={`service-${index}`}>
              <h3 className="font-serif text-xl mb-4 tracking-wide" data-testid={`service-title-${index}`}>
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
