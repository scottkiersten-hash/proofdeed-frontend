import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-lg tracking-wider" style={{ color: '#EAF2FF' }}>
            PROOFDEED
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/legal" className="text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap">
              Document Certification
            </Link>
            <Link to="/auto" className="text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap">
              Automotive Certification
            </Link>
            <Link to="/government" className="text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap">
              Government Certification
            </Link>
            <Link to="/verify" className="text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap">
              Verify Certificate
            </Link>
            <Link to="/procurement" className="text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap">
              Procurement
            </Link>
            <Link to="/affiliates" className="text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap">
              Affiliate Program
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white cursor-pointer"
          >
            <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              <Link 
                to="/legal" 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Document Certification
              </Link>
              <Link 
                to="/auto" 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Automotive Certification
              </Link>
              <Link 
                to="/government" 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Government Certification
              </Link>
              <Link 
                to="/verify" 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Verify Certificate
              </Link>
              <Link 
                to="/procurement" 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Procurement
              </Link>
              <Link 
                to="/affiliates" 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Affiliate Program
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
