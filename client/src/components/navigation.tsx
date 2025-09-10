import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="font-newsreel text-2xl tracking-wider">
            <span className="text-primary">PATHÉ</span>{" "}
            <span className="text-accent">VOICE</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavClick('#about')}
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('#examples')}
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              data-testid="nav-examples"
            >
              Examples
            </button>
            <button
              onClick={() => handleNavClick('#services')}
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              data-testid="nav-services"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              data-testid="nav-contact"
            >
              Contact
            </button>
            <a
              href="https://voiceoverguy.co.uk"
              className="text-accent hover:text-accent/80 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="nav-main-site"
            >
              Main Site
            </a>
          </div>
          <button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            <div className="w-6 h-0.5 bg-primary mb-1"></div>
            <div className="w-6 h-0.5 bg-primary mb-1"></div>
            <div className="w-6 h-0.5 bg-primary"></div>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleNavClick('#about')}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('#examples')}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                data-testid="mobile-nav-examples"
              >
                Examples
              </button>
              <button
                onClick={() => handleNavClick('#services')}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <a
                href="https://voiceoverguy.co.uk"
                className="text-accent hover:text-accent/80 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="mobile-nav-main-site"
              >
                Main Site
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
