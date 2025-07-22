import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'blogs', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-4 flex items-center justify-between bg-[#181c2e] border-b border-[#393053] shadow-sm z-50">
      <div className="flex items-center gap-2 text-white text-2xl font-bold font-sans">
        <span className="text-pink-400 text-3xl">🌸</span>
        <span>Aakansha</span>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl focus:outline-none">
          <FiMenu />
        </button>
      </div>
      <ul className="hidden md:flex gap-8 text-lg font-medium text-white">
        <li className="relative">
          <button 
            onClick={() => scrollToSection('about')}
            className={`pb-1 transition-all duration-300 ${activeSection === 'about' ? 'border-b-2 border-pink-400' : 'hover:text-pink-400'}`}
          >
            About
          </button>
        </li>
        <li className="relative">
          <button 
            onClick={() => scrollToSection('projects')}
            className={`pb-1 transition-all duration-300 ${activeSection === 'projects' ? 'border-b-2 border-pink-400' : 'hover:text-pink-400'}`}
          >
            Projects
          </button>
        </li>
        <li className="relative">
          <button 
            onClick={() => scrollToSection('blogs')}
            className={`pb-1 transition-all duration-300 ${activeSection === 'blogs' ? 'border-b-2 border-pink-400' : 'hover:text-pink-400'}`}
          >
            Blogs
          </button>
        </li>
        <li className="relative">
          <button 
            onClick={() => scrollToSection('skills')}
            className={`pb-1 transition-all duration-300 ${activeSection === 'skills' ? 'border-b-2 border-pink-400' : 'hover:text-pink-400'}`}
          >
            Skills
          </button>
        </li>
        <li className="relative">
          <button 
            onClick={() => scrollToSection('contact')}
            className={`pb-1 transition-all duration-300 ${activeSection === 'contact' ? 'border-b-2 border-pink-400' : 'hover:text-pink-400'}`}
          >
            Contact
          </button>
        </li>
      </ul>
      {menuOpen && (
        <ul className="absolute top-full right-4 mt-2 bg-[#181c2e] flex flex-col gap-4 py-4 px-8 md:hidden text-lg font-medium text-white border border-[#393053] shadow z-50 rounded-xl w-64 max-w-[90vw]">
          <li>
            <button onClick={() => scrollToSection('about')} className={`w-full text-left pb-1 transition-all duration-300 ${activeSection === 'about' ? 'border-b-2 border-pink-400' : 'hover:text-pink-400'}`}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')} className={`w-full text-left pb-1 transition-all duration-300 ${activeSection === 'projects' ? 'border-b-2 border-pink-400' : 'hover:text-pink-400'}`}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('blogs')} className={`w-full text-left pb-1 transition-all duration-300 ${activeSection === 'blogs' ? 'border-b-2 border-pink-400' : 'hover:text-pink-400'}`}>Blogs</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')} className={`w-full text-left pb-1 transition-all duration-300 ${activeSection === 'skills' ? 'border-b-2 border-pink-400' : 'hover:text-pink-400'}`}>Skills</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className={`w-full text-left pb-1 transition-all duration-300 ${activeSection === 'contact' ? 'border-b-2 border-pink-400' : 'hover:text-pink-400'}`}>Contact</button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;