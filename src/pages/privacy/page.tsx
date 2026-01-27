import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Beta Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold">Beta Live</span>
          </div>
          <span className="text-white/60">•</span>
          <span className="text-sm font-medium">Early access only</span>
          <span className="text-white/60">•</span>
          <span className="text-sm">Core verification features launching soon</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'} mt-10`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-slate-900">ProofDeed</h1>
            </Link>
            <Link 
              to="/" 
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                ProofDeed respects your privacy and is designed to minimize data collection.
              </p>
            </div>

            {/* No Document Storage */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-xl text-green-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">No Document Storage</h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    ProofDeed does not store uploaded documents. Documents are processed locally or transiently for the sole purpose of generating a cryptographic hash.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Collect */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-database-2-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What We Collect</h2>
                  <ul className="space-y-3 text-base text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Email address (if provided for account access or communication)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Basic usage metadata required to operate the service</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Payment information is handled by third-party payment processors and is not stored by ProofDeed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What We Do Not Collect */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-close-circle-line text-xl text-red-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">What We Do Not Collect</h2>
                  <ul className="space-y-3 text-base text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>We do not store document contents</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>We do not analyze or sell user data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>We do not track documents or proofs beyond verification metadata</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-links-line text-xl text-slate-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Third-Party Services</h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    We may use trusted third-party services for payments, infrastructure, analytics, and email communication. These services operate under their own privacy policies.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-lock-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Data Security</h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    We implement reasonable technical and organizational measures to protect user information.
                  </p>
                </div>
              </div>
            </div>

            {/* Consent */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <p className="text-base font-semibold text-blue-900">
                By using ProofDeed, you consent to this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">About Us</Link></li>
                <li><Link to="/privacy" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/verify" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Verify a Document</Link></li>
                <li><Link to="/how-it-works" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">How ProofDeed Works</Link></li>
                <li><Link to="/faq" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">FAQ</Link></li>
                <li><span className="text-sm text-slate-400 cursor-default block leading-relaxed">API Documentation <span className="text-xs">(Coming Soon)</span></span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:info@proofdeed.com" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">info@proofdeed.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              Independent, Verifiable Proof — No Document Storage
            </p>
          </div>
          
          <div className="border-t border-slate-300 pt-6 mb-6">
            <p className="text-xs text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> ProofDeed provides cryptographic timestamp verification only. ProofDeed is not a law firm, title company, or escrow service. No records are stored.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center md:text-left leading-relaxed">© 2024 ProofDeed. All rights reserved.</p>
            <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-blue-600 transition-colors cursor-pointer leading-relaxed">
              Website Builder
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
