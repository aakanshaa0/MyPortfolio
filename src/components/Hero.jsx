import profileImg from '../assets/pfp.jpg';
import { FiDownload } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';

const titles = [
  'Backend Developer',
  'Frontend Developer',
  'Full Stack Developer'
];

const TYPING_SPEED = 80;
const ERASING_SPEED = 40;
const DELAY_AFTER_TYPING = 1200;
const DELAY_AFTER_ERASING = 400;

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const textRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    let timeout;
    const fullText = titles[currentTitle];
    if (typing) {
      if (displayed.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayed(fullText.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setTyping(false), DELAY_AFTER_TYPING);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(fullText.slice(0, displayed.length - 1));
        }, ERASING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setCurrentTitle((prev) => (prev + 1) % titles.length);
          setTyping(true);
        }, DELAY_AFTER_ERASING);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, currentTitle]);

  useEffect(() => {
    if (textRef.current) {
      setUnderlineWidth(textRef.current.offsetWidth);
    }
  }, [displayed]);

  return (
    <section id="about" className="w-full flex flex-col items-center justify-center pt-32 pb-8 px-4 relative">
      {/*Flower Background*/}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/*Left Side*/}
        <div className="flex-1 flex flex-col items-start justify-center gap-2 md:gap-3">
          <h1 className="text-5xl md:text-5xl font-bold text-pink-400 leading-tight">
            Hi, I&apos;m Aakansha🌸
          </h1>
          <h2 className="text-2xl md:text-2xl font-bold text-white min-h-[2.5rem]">
            I am a{' '}
            <span className="relative inline-block align-bottom" style={{minWidth: '1ch'}}>
              <span ref={textRef} className="text-white transition-all duration-200" style={{letterSpacing: '0.02em'}}>{displayed}</span>
              <span
                className="absolute left-0 block bg-pink-400 transition-all"
                style={{
                  width: underlineWidth,
                  minWidth: 2,
                  height: '0.25rem',
                  bottom: '-0.15em',
                  transitionDuration: '80ms'
                }}
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mt-2">
            A passionate developer always eager to learn, creating real web apps and solving challenges along the way. I love building beautiful, functional applications that make a difference.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="/src/assets/resume.pdf" download="Aakansha_Resume.pdf" className="flex items-center gap-2 px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-600 transition">
              <FiDownload className="text-lg" /> Resume
            </a>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition"
            >
              Get in Touch
            </button>
          </div>
        </div>
        {/*Right Side*/}
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
          <div className="relative flex items-center justify-center">
            <div className="rounded-full" style={{
              padding: '8px',
              background: 'rgba(255,255,255,0.18)',
              boxShadow: '0 0 0 9px rgba(255,255,255,0.18), 0 6px 32px 0 rgba(0,0,0,0.10)'
            }}>
              <img src={profileImg} alt="Aakansha" className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover bg-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;