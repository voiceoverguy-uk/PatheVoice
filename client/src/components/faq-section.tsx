import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Can you record the Pathé voice today?",
      answer: "Often, yes. Same-day or next-day delivery is common. Professional studio setup ensures broadcast-quality results on tight deadlines."
    },
    {
      question: "Do you do straight or spoof?",
      answer: "Both. We can go authentic newsreel or dial in a playful parody—your call. The versatility makes it perfect for serious historical content or comedic applications."
    },
    {
      question: "What formats do you supply?",
      answer: "WAV/AIFF/MP3 at your spec. Clean, mastered, ready to drop in. Professional audio engineering ensures compatibility with any production workflow."
    },
    {
      question: "Do you do other voices?",
      answer: "Oh yes! For other character voices beyond the Pathé Voice, visit my main site homepage at VoiceoverGuy.co.uk"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 scroll-reveal">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-newsreel text-4xl md:text-5xl text-center mb-12 tracking-wider" data-testid="heading-faq">
          FREQUENTLY ASKED <span className="text-accent">QUESTIONS</span>
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-lg" data-testid={`faq-item-${index}`}>
              <button 
                className="w-full p-6 text-left font-serif text-xl tracking-wide flex justify-between items-center hover:bg-secondary transition-colors"
                onClick={() => toggleFAQ(index)}
                data-testid={`faq-button-${index}`}
              >
                {faq.question}
                <span 
                  className={`text-2xl transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : 'rotate-0'
                  }`}
                  data-testid={`faq-icon-${index}`}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0" data-testid={`faq-content-${index}`}>
                  <p className="font-body text-muted-foreground">
                    {faq.answer.includes('VoiceoverGuy.co.uk') ? (
                      <>
                        Oh yes! For other character voices beyond the Pathé Voice, visit my main site homepage at{' '}
                        <a 
                          href="https://voiceoverguy.co.uk" 
                          className="text-accent hover:text-accent/80 transition-colors" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          data-testid="link-main-site-faq"
                        >
                          VoiceoverGuy.co.uk
                        </a>
                      </>
                    ) : (
                      faq.answer
                    )}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
