
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-5 mb-3">
          <Link to="/about" className="text-xs text-slate-300 hover:text-white transition-colors cursor-pointer">
            About
          </Link>
          <Link to="/privacy" className="text-xs text-slate-300 hover:text-white transition-colors cursor-pointer">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-xs text-slate-300 hover:text-white transition-colors cursor-pointer">
            Terms of Service
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ProofDeed. All rights reserved.</p>
          <a href="mailto:info@proofdeed.com" className="hover:text-slate-400 transition-colors cursor-pointer">info@proofdeed.com</a>
          <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors cursor-pointer">Powered by Readdy</a>
        </div>
      </div>
    </footer>
  );
}
