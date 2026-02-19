import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HowItWorksPage() {
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
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-slate-900">
              ProofDeed
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
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              How ProofDeed Works
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A step-by-step guide to creating and verifying cryptographic proof of document integrity
            </p>
          </div>

          {/* How It Works Section */}
          <div className="mb-20">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Generate a Cryptographic Fingerprint</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      ProofDeed creates a secure SHA-256 hash (digital fingerprint) of your document. The document itself is never stored.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Anchor to Public Blockchain</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      The hash is time-stamped and anchored to the Polygon network, creating tamper-evident proof of existence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Issue Verification Certificate</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      A verifiable certificate and unique ID are generated for independent validation at any time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Verify Anytime</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Anyone can independently verify document integrity using the certificate ID and original file.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Principles */}
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Key Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-shield-check-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">No Document Storage</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your documents never leave your control. Only cryptographic hashes are processed.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-time-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Immutable Timestamps</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Blockchain-anchored proofs cannot be altered, deleted, or backdated by anyone.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-fingerprint-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Independent Verification</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Proofs are verifiable by anyone, anywhere, without relying on ProofDeed.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Proof?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Start generating cryptographic proof for your documents in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://whale-app-9azz6.ondigitalocean.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#F59E0B] rounded-lg hover:bg-[#D97706] transition-all shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Generate Proof
              </a>
              <Link
                to="/verify"
                className="w-full sm:w-auto text-base font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                Verify Existing Certificate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">About</Link></li>
                <li><Link to="/privacy" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/verify" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Verify Certificate</Link></li>
                <li><Link to="/how-it-works" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">How It Works</Link></li>
                <li><Link to="/procurement" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Procurement</Link></li>
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
              Independent, Verifiable Certification Infrastructure — No Document Storage
            </p>
          </div>
          
          <div className="border-t border-slate-300 pt-6 mb-6">
            <p className="text-xs text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
              ProofDeed provides cryptographic certification services only. ProofDeed is not a law firm, escrow service, or government authority.
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
