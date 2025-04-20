import { useState, useEffect } from "react";
import { PersonalInfo } from "@/types";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  personalInfo: PersonalInfo;
}

export default function Header({ personalInfo }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-[#EEEEEE] transition-all ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tight text-black">
          M.R.
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden focus:outline-none" 
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="text-[#333333] hover:text-black transition-colors py-2">Home</a>
          <a href="#projects" className="text-[#333333] hover:text-black transition-colors py-2">Projects</a>
          <a href="#skills" className="text-[#333333] hover:text-black transition-colors py-2">Skills</a>
          <a href="#about" className="text-[#333333] hover:text-black transition-colors py-2">About</a>
          <a href="#contact" className="text-[#333333] hover:text-black transition-colors py-2">Contact</a>
          <a 
            href={personalInfo.resumeLink} 
            className="border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      <nav className={`lg:hidden bg-white border-b border-[#EEEEEE] ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
          <a href="#home" className="block py-2 text-[#333333] hover:text-black transition-colors" onClick={closeMenu}>Home</a>
          <a href="#projects" className="block py-2 text-[#333333] hover:text-black transition-colors" onClick={closeMenu}>Projects</a>
          <a href="#skills" className="block py-2 text-[#333333] hover:text-black transition-colors" onClick={closeMenu}>Skills</a>
          <a href="#about" className="block py-2 text-[#333333] hover:text-black transition-colors" onClick={closeMenu}>About</a>
          <a href="#contact" className="block py-2 text-[#333333] hover:text-black transition-colors" onClick={closeMenu}>Contact</a>
          <a 
            href={personalInfo.resumeLink}
            className="block border border-black px-4 py-2 text-center hover:bg-black hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
