import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import WhyBookSection from "@/components/why-book-section";
import ExamplesSection from "@/components/examples-section";
import ServicesSection from "@/components/services-section";
import OtherVoicesSection from "@/components/other-voices-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import StudioPromotion from "@/components/studio-promotion";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-background text-foreground font-body leading-relaxed">
      <Navigation />
      <HeroSection />
      <ExamplesSection />
      <AboutSection />
      <WhyBookSection />
      <ServicesSection />
      <StudioPromotion />
      <OtherVoicesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
