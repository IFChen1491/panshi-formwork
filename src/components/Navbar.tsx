import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: '首頁', nameEn: 'Home', path: '/' },
  { name: '關於磐石', nameEn: 'About', path: '/about' },
  { name: '解決方案', nameEn: 'Solutions', path: '/solutions' },
  { name: '模主制度', nameEn: 'Platform', path: '/platform' },
  { name: '技術系統', nameEn: 'Technology', path: '/technology' },
  { name: 'ESG永續', nameEn: 'ESG', path: '/esg' },
  { name: '案例展示', nameEn: 'Projects', path: '/projects' },
  { name: '投資願景', nameEn: 'Investors', path: '/investors' },
  { name: '聯絡我們', nameEn: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-structural ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-panshi-black rounded-lg flex items-center justify-center group-hover:bg-panshi-lime transition-colors duration-300">
                <span className="text-white group-hover:text-panshi-black font-display font-bold text-lg transition-colors duration-300">
                  磐
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-panshi-black text-lg leading-tight">
                  磐石系統模板
                </span>
                <span className="block text-xs text-panshi-medium font-medium">
                  PanShi Smart Formwork
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.slice(0, 7).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link px-3 py-2 ${
                    location.pathname === link.path
                      ? 'text-panshi-black after:w-full'
                      : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden xl:flex items-center gap-3">
              <Link
                to="/contact"
                className="text-sm font-medium text-panshi-medium hover:text-panshi-black transition-colors duration-300"
              >
                合作洽詢
              </Link>
              <Link
                to="/platform"
                className="btn-panshi-primary text-sm"
              >
                加入模主
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-panshi-surface transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-panshi-black" />
              ) : (
                <Menu className="w-6 h-6 text-panshi-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-panshi-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-structural transition-transform duration-500 ease-structural ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 pb-6 px-6">
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'bg-panshi-lime/10 text-panshi-black'
                        : 'text-panshi-medium hover:bg-panshi-surface hover:text-panshi-black'
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                    }}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-panshi-light">{link.nameEn}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-panshi-cement space-y-3">
              <Link
                to="/contact"
                className="btn-panshi-secondary w-full justify-center"
              >
                建商合作洽詢
              </Link>
              <Link
                to="/platform"
                className="btn-panshi-primary w-full justify-center"
              >
                加入模主平台
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
