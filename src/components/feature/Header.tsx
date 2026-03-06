import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link to="/" className="font-bold text-lg tracking-wider text-white">
            PROOFDEED
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >

              <button className="text-slate-300 hover:text-white">
                Industries
              </button>

              {industriesOpen && (
                <div className="absolute top-6 left-0 bg-slate-800 border border-slate-700 rounded-md shadow-lg w-60">

                  <Link
                    to="/document"
                    className="block px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white"
                  >
                    Institutional Certification
                  </Link>

                  <Link
                    to="/auto"
                    className="block px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white"
                  >
                    Automotive Certification
                  </Link>

                  <Link
                    to="/government"
                    className="block px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white"
                  >
                    Government Certification
                  </Link>

                </div>
              )}

            </div>

            <Link
              to="/verify"
              className="text-slate-300 hover:text-white"
            >
              Verify Certificate
            </Link>

            <Link
              to="/affiliates"
              className="text-slate-300 hover:text-white"
            >
              Affiliate Program
            </Link>

            <Link
              to="/login"
              className="text-slate-300 hover:text-white"
            >
              Login
            </Link>

          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 flex flex-col gap-4 text-sm text-white">

            <Link to="/document">Institutional Certification</Link>
            <Link to="/auto">Automotive Certification</Link>
            <Link to="/government">Government Certification</Link>

            <Link to="/verify">Verify Certificate</Link>
            <Link to="/affiliates">Affiliate Program</Link>
            <Link to="/login">Login</Link>

          </div>
        )}

      </div>
    </header>
  );
}
