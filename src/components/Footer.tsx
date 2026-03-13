import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-wrap justify-center gap-5 mb-3">
          <Link to="/about" className="text-xs text-slate-300 hover:text-white transition-colors">
            About
          </Link>

          <Link to="/privacy" className="text-xs text-slate-300 hover:text-white transition-colors">
            Privacy Policy
          </Link>

          <Link to="/terms" className="text-xs text-slate-300 hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <p>© {year} ProofDeed. All rights reserved.</p>

          <a
            href="mailto:info@proofdeed.com"
            className="hover:text-slate-400 transition-colors"
          >
            info@proofdeed.com
          </a>

          <a
            href="https://readdy.ai/?ref=logo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-400 transition-colors"
          >
            Powered by Readdy
          </a>
        </div>

      </div>
    </footer>
  );
}
