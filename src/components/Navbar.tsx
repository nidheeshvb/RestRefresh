import { useState, useEffect } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we should use solid white or transparent background
  const navBackground = isScrolled || !isHomePage
    ? 'bg-white shadow-md py-3' 
    : 'bg-transparent py-5';

  const textColor = isScrolled || !isHomePage ? 'text-zinc-900' : 'text-white';
  const subTextColor = isScrolled || !isHomePage ? 'text-zinc-600' : 'text-white/80';
  const logoInvert = isScrolled || !isHomePage ? '' : 'brightness-0 invert';

  const navLinks = [
    { name: 'HOME', to: '/' },
    { name: 'ABOUT US', to: '/about' },
    { name: 'CONTACT', to: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBackground}`}
      >
        <div className="flex items-center px-6 md:px-12 max-w-screen-2xl mx-auto relative">
          <div className="flex-shrink-0 z-10">
            <Link to="/" className="flex items-center gap-3">
              <img 
                alt="Rest Refresh Logo" 
                className={`h-10 w-10 object-contain transition-all duration-300 ${logoInvert}`} 
                src="https://lh3.googleusercontent.com/aida/ADBb0ugx8Ivcdxmf_xfHKhHXfSRyOE-TbXAGTGCEjlZbfGqFxWTRFkfm0rZouV2goQoh_Hbb78A_90XJ-Ud2OArzsIwVCGu0maFe5ihMpEszURrL2Afwqyf0ekW-uoKITug0j9lCfTfq6XZQsLHkhMRxmWS5wnMpYCW5d898NRryeMBRVZkik6C9D7GtrbP2nwenFp-odnqZC4e7jJ6Tk_oLoclWuqNewUStDiWlREugwqDfh56WvAWY1X8ItZi82SKiVEDLQ5NZotWdSA" 
              />
              <span className={`text-xl font-extrabold tracking-tight font-headline transition-colors duration-300 ${textColor}`}>
                Rest Refresh
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-8 font-headline tracking-tight font-bold text-sm">
            <NavLink 
              to="/" 
              className={({ isActive }) => `pb-1 transition-all duration-300 border-b-2 ${
                isActive 
                  ? 'text-primary border-primary' 
                  : `${textColor} border-transparent hover:border-primary/50`
              }`}
            >
              HOME
            </NavLink>
            
            <div className="group relative inline-block">
              <button className={`flex items-center gap-1 pb-1 border-b-2 border-transparent transition-all duration-300 cursor-pointer ${subTextColor} hover:text-primary uppercase`}>
                WHAT WE OFFER
                <ChevronDown size={14} className="mt-0.5" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 min-w-[200px] hidden group-hover:block transition-all duration-300">
                <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white shadow-xl rounded-xl border border-zinc-100 overflow-hidden"
                >
                  <Link className="block px-5 py-3 text-xs font-bold text-zinc-700 hover:bg-primary hover:text-white transition-colors uppercase" to="/offer">PRIVATE PODS</Link>
                  <Link className="block px-5 py-3 text-xs font-bold text-zinc-700 hover:bg-primary hover:text-white transition-colors uppercase" to="/offer#refresh">SHOWER & REFRESH</Link>
                  <Link className="block px-5 py-3 text-xs font-bold text-zinc-700 hover:bg-primary hover:text-white transition-colors uppercase" to="/offer#cloakroom">SECURE STORAGE</Link>
                </motion.div>
              </div>
            </div>
            
            {navLinks.slice(1).map((link) => (
              <NavLink 
                key={link.to}
                to={link.to} 
                className={({ isActive }) => `pb-1 transition-all duration-300 border-b-2 ${
                  isActive 
                    ? 'text-primary border-primary' 
                    : `${subTextColor} border-transparent hover:border-primary/50`
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <div className="flex items-center ml-auto z-10">
            <button className="hidden md:block bg-primary text-on-primary px-8 py-3 rounded-xl font-headline font-bold text-xs uppercase hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-primary/20">
              Book Now
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 cursor-pointer transition-colors rounded-lg flex items-center md:hidden ml-2 ${
                isScrolled || !isHomePage || isMenuOpen ? 'text-zinc-900 hover:bg-zinc-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to}
                  className="text-2xl font-headline font-extrabold text-zinc-900 border-b border-zinc-100 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-4">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-4">What We Offer</span>
                <Link className="block text-xl font-bold text-zinc-600" to="/offer">Private Pods</Link>
                <Link className="block text-xl font-bold text-zinc-600" to="/offer#refresh">Shower & Refresh</Link>
                <Link className="block text-xl font-bold text-zinc-600" to="/offer#cloakroom">Secure Storage</Link>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg mt-8">
                Book Your Pod Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
