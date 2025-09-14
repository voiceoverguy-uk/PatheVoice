export default function ContactSection() {
  const subject = encodeURIComponent("Pathé Voice Inquiry");
  const body = encodeURIComponent("Hi Guy,");
  const mailtoLink = `mailto:pathe@voiceoverguy.co.uk?subject=${subject}&body=${body}`;

  return (
    <section id="contact" className="py-16 bg-primary text-primary-foreground scroll-reveal">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-newsreel text-4xl md:text-5xl mb-6 tracking-wider" data-testid="heading-contact">
            BOOK THE PATHÉ STYLE <span className="text-accent">VOICE TODAY!</span>
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto" data-testid="text-contact-description">
            Click the button below to send an email with your script and project details inc. usage. Recieve a quote and turnaround time within 24 hours.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <a 
            href={mailtoLink}
            className="block w-full bg-accent text-accent-foreground py-6 px-8 font-newsreel text-xl md:text-2xl tracking-wide hover:bg-accent/90 transition-colors duration-300 transform hover:scale-[1.02] text-center border-4 border-accent-foreground/20"
            data-testid="button-contact-email"
          >
            CONTACT GUY HARRIS - PATHÉ NEWS VOICE
          </a>
        </div>
      </div>
    </section>
  );
}
