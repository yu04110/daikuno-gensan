import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-[#8B4513] cursor-pointer"
            >
              大工のげんさん
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#8B4513] transition-colors"
            >
              げんさんについて
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className="text-gray-700 hover:text-[#8B4513] transition-colors"
            >
              仕事への思い
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-[#8B4513] transition-colors"
            >
              施工事例
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-[#8B4513] transition-colors"
            >
              ご依頼の流れ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#8B4513] transition-colors"
            >
              お問い合わせ
            </button>
          </nav>

          {/* Phone Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-[#2F5233] hover:bg-[#244126] text-white"
            >
              <a href="tel:0120000000" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                電話で相談する
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-[#8B4513] text-left py-2"
              >
                げんさんについて
              </button>
              <button
                onClick={() => scrollToSection('philosophy')}
                className="text-gray-700 hover:text-[#8B4513] text-left py-2"
              >
                仕事への思い
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-[#8B4513] text-left py-2"
              >
                施工事例
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-gray-700 hover:text-[#8B4513] text-left py-2"
              >
                ご依頼の流れ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-[#8B4513] text-left py-2"
              >
                お問い合わせ
              </button>
              <Button 
                asChild
                className="bg-[#2F5233] hover:bg-[#244126] text-white"
              >
                <a href="tel:0120000000" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  電話で相談する
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
