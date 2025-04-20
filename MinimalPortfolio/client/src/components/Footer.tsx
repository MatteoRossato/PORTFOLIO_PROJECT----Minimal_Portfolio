import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 border-t border-[#EEEEEE]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-[#777777]">© {currentYear} Matteo Rossato. All rights reserved.</p>
          </div>
          
          <nav className="flex space-x-6">
            <a href="#home" className="text-[#777777] hover:text-black transition-colors">Home</a>
            <a href="#projects" className="text-[#777777] hover:text-black transition-colors">Projects</a>
            <a href="#skills" className="text-[#777777] hover:text-black transition-colors">Skills</a>
            <a href="#about" className="text-[#777777] hover:text-black transition-colors">About</a>
            <a href="#contact" className="text-[#777777] hover:text-black transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
