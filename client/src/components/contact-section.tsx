import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  project: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          project: formData.project,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Received!",
          description: "Guy will get back to you within 24 hours via email.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          project: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again or email directly to pathe@voiceoverguy.co.uk",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-16 bg-primary text-primary-foreground scroll-reveal">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-newsreel text-4xl md:text-5xl mb-6 tracking-wider" data-testid="heading-contact">
            BOOK THE PATHÉ STYLE <span className="text-accent">VOICE TODAY!</span>
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto" data-testid="text-contact-description">
            Send your script and notes and I'll come back with a quote and turnaround time. Usually within 24 hours.
          </p>
        </div>
        
        <form className="max-w-2xl mx-auto" onSubmit={handleSubmit} data-testid="contact-form">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block font-serif text-lg mb-2 tracking-wide" htmlFor="name" data-testid="label-name">
                YOUR NAME
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-background text-foreground border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter your name"
                data-testid="input-name"
              />
            </div>
            <div>
              <label className="block font-serif text-lg mb-2 tracking-wide" htmlFor="email" data-testid="label-email">
                EMAIL ADDRESS
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-background text-foreground border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="your@email.com"
                data-testid="input-email"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block font-serif text-lg mb-2 tracking-wide" htmlFor="project" data-testid="label-project">
              PROJECT TYPE
            </label>
            <select 
              id="project" 
              name="project" 
              value={formData.project}
              onChange={handleChange}
              className="w-full p-3 bg-background text-foreground border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              data-testid="select-project"
            >
              <option value="">Select project type</option>
              <option value="commercial">TV/Radio Commercial</option>
              <option value="corporate">Corporate Video</option>
              <option value="documentary">Documentary</option>
              <option value="game">Game/App</option>
              <option value="social">Social Media</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="mb-8">
            <label className="block font-serif text-lg mb-2 tracking-wide" htmlFor="message" data-testid="label-message">
              SCRIPT & PROJECT DETAILS
            </label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-background text-foreground border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Please include your script, project details, deadline, and any special requirements..."
              data-testid="textarea-message"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-accent text-accent-foreground py-4 font-newsreel text-xl tracking-wide hover:bg-accent/90 transition-colors duration-300 transform hover:scale-[1.02]"
            data-testid="button-submit"
          >
            CONTACT GUY HARRIS - PATHÉ NEWS VOICE
          </button>
        </form>
      </div>
    </section>
  );
}
