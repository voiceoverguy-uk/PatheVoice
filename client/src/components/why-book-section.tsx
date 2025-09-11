import { TargetDeco, RibbonMicDeco, DramaMasksDeco, ShieldBadgeDeco } from './icons';

export default function WhyBookSection() {
  const features = [
    {
      icon: "TargetDeco",
      title: "AUTHENTIC DELIVERY",
      description: "Nailed pacing, inflection, and period flair."
    },
    {
      icon: "RibbonMicDeco",
      title: "BROADCAST-READY",
      description: "Recorded in a pro studio, fast turnaround."
    },
    {
      icon: "DramaMasksDeco",
      title: "VERSATILE",
      description: "Straight recreation or tongue-in-cheek parody."
    },
    {
      icon: "ShieldBadgeDeco",
      title: "TRUSTED",
      description: "UK and global brands, agencies, broadcasters."
    }
  ];

  return (
    <section className="py-16 bg-secondary scroll-reveal">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-newsreel text-4xl md:text-5xl text-center mb-12 tracking-wider" data-testid="heading-why-book">
          WHY BOOK GUY FOR THE <span className="text-accent">PATHÉ STYLE?</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const getIcon = () => {
              switch (feature.icon) {
                case "TargetDeco":
                  return <TargetDeco className="w-8 h-8 text-primary" />;
                case "RibbonMicDeco":
                  return <RibbonMicDeco className="w-8 h-8 text-primary" />;
                case "DramaMasksDeco":
                  return <DramaMasksDeco className="w-8 h-8 text-primary" />;
                case "ShieldBadgeDeco":
                  return <ShieldBadgeDeco className="w-8 h-8 text-primary" />;
                default:
                  return null;
              }
            };

            return (
              <div key={index} className="text-center" data-testid={`feature-${index}`}>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <span data-testid={`icon-${index}`}>{getIcon()}</span>
                </div>
                <h3 className="font-serif text-xl mb-3 tracking-wide" data-testid={`title-${index}`}>
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground" data-testid={`description-${index}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
