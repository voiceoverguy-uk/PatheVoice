import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-newsreel text-4xl md:text-5xl mb-6 tracking-wider" data-testid="heading-privacy-policy">
              PRIVACY <span className="text-accent">POLICY</span>
            </h1>
            <div className="news-headline p-6 mx-auto max-w-3xl mb-8">
              <p className="font-serif text-lg text-muted-foreground mb-2" data-testid="text-effective-date">
                EFFECTIVE DATE:
              </p>
              <p className="font-serif text-lg text-primary font-semibold" data-testid="text-date">
                {new Date().toLocaleDateString('en-GB')}
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="font-newsreel text-2xl md:text-3xl text-primary mb-4 tracking-wide">
                INFORMATION WE COLLECT
              </h2>
              <p className="font-body leading-relaxed mb-4">
                When you contact VoiceoverGuy for voiceover services, we collect information you provide including:
              </p>
              <ul className="font-body list-disc pl-6 space-y-2">
                <li>Name and contact details (email address, phone number)</li>
                <li>Project information and script details</li>
                <li>Usage requirements and commercial details</li>
                <li>Any other information you choose to share</li>
              </ul>
            </section>

            <section>
              <h2 className="font-newsreel text-2xl md:text-3xl text-primary mb-4 tracking-wide">
                HOW WE USE YOUR INFORMATION
              </h2>
              <p className="font-body leading-relaxed mb-4">
                Your information is used solely to:
              </p>
              <ul className="font-body list-disc pl-6 space-y-2">
                <li>Provide voiceover services and respond to your inquiries</li>
                <li>Create accurate quotes and project timelines</li>
                <li>Communicate about your project requirements</li>
                <li>Deliver completed voiceover recordings</li>
              </ul>
            </section>

            <section>
              <h2 className="font-newsreel text-2xl md:text-3xl text-primary mb-4 tracking-wide">
                DATA PROTECTION
              </h2>
              <p className="font-body leading-relaxed">
                We take your privacy seriously. Your personal information is stored securely and is never shared with third parties without your consent. We retain your information only as long as necessary to provide our services and comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="font-newsreel text-2xl md:text-3xl text-primary mb-4 tracking-wide">
                YOUR RIGHTS
              </h2>
              <p className="font-body leading-relaxed mb-4">
                Under UK data protection laws, you have the right to:
              </p>
              <ul className="font-body list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="font-newsreel text-2xl md:text-3xl text-primary mb-4 tracking-wide">
                CONTACT US
              </h2>
              <p className="font-body leading-relaxed">
                For any questions about this privacy policy or to exercise your rights, please visit:
              </p>
              <div className="vintage-border bg-secondary p-4 mt-4">
                <p className="font-serif text-primary">
                  <strong>VoiceoverGuy</strong><br />
                  Website: <a href="https://www.voiceoverguy.co.uk" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">www.voiceoverguy.co.uk</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}