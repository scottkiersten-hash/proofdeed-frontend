import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER ROW */}
        <div className="flex items-center justify-between h-12">

          {/* Logo */}
          <Link
            to="/"
            className="font-semibold text-base tracking-wider text-[#EAF2FF]"
          >
            PROOFDEED
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">

            <Link
              to="/document"
              className="text-sm text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Institutional Certification
            </Link>

            <Link
              to="/auto"
              className="text-sm text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Automotive Certification
            </Link>

            <Link
              to="/government"
              className="text-sm text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Government Certification
            </Link>

            <Link
              to="/verify"
              className="text-sm text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Verify Certificate
            </Link>

            <Link
              to="/affiliates"
              className="text-sm text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Affiliate Program
            </Link>

          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-white"
          >
            <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-3 border-t border-slate-800">
            <div className="flex flex-col gap-3">

              <Link
                to="/document"
                className="text-sm text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Institutional Certification
              </Link>

              <Link
                to="/auto"
                className="text-sm text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Automotive Certification
              </Link>

              <Link
                to="/government"
                className="text-sm text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Government Certification
              </Link>

              <Link
                to="/verify"
                className="text-sm text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Verify Certificate
              </Link>

              <Link
                to="/affiliates"
                className="text-sm text-slate-300 hover:text-white transition-colors"
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
