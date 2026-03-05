import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link to="/" className="font-bold text-lg tracking-wider text-white">
            PROOFDEED
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            <Link
              to="/document"
              className="text-sm text-slate-300 hover:text-white"
            >
              Institutional Certification
            </Link>

            <Link
              to="/auto"
              className="text-sm text-slate-300 hover:text-white"
            >
              Automotive Certification
            </Link>

            <Link
              to="/government"
              className="text-sm text-slate-300 hover:text-white"
            >
              Government Certification
            </Link>

            <Link
              to="/verify"
              className="text-sm text-slate-300 hover:text-white"
            >
              Verify Certificate
            </Link>

            <Link
              to="/affiliates"
              className="text-sm text-slate-300 hover:text-white"
            >
              Affiliate Program
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
          <div className="md:hidden py-4 border-t border-slate-800 flex flex-col gap-4">

            <Link to="/document">Institutional Certification</Link>
            <Link to="/auto">Automotive Certification</Link>
            <Link to="/government">Government Certification</Link>
            <Link to="/verify">Verify Certificate</Link>
            <Link to="/affiliates">Affiliate Program</Link>

          </div>
        )}

      </div>
    </header>
  );
}
