export default function AboutSection() {
  return (
    <section id="about" className="py-16 scroll-reveal">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-newsreel text-4xl md:text-5xl mb-6 tracking-wider" data-testid="heading-what-is-pathe">
              WHAT IS THE <span className="text-accent">PATHÉ NEWS</span> VOICE?
            </h2>
            <p className="font-serif text-lg mb-6 text-muted-foreground leading-relaxed" data-testid="text-vintage-description">
              Think vintage cinema news: precise diction, lively pacing, and a cheerfully authoritative tone that carried headlines to UK audiences from the 1910s through the 1960s.
            </p>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed" data-testid="text-modern-usage">
              Modern projects use this <strong>newsreel-style narration</strong> to grab attention and make messages memorable with that unmistakable cadence often associated with the golden age of British broadcasting.
            </p>
          </div>
          <div className="vintage-border p-1 bg-secondary">
            <img 
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Vintage 1940s broadcasting studio setup" 
              className="w-full h-auto grayscale"
              data-testid="img-vintage-studio"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
