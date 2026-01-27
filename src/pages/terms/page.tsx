import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                By accessing or using ProofDeed, you agree to the following terms.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-service-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Service Description</h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    ProofDeed provides cryptographic timestamping and verification services. We generate proof that a document existed at a specific time by anchoring a cryptographic hash to a blockchain.
                  </p>
                </div>
              </div>
            </div>

            {/* No Legal or Professional Advice */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-alert-line text-xl text-amber-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">No Legal or Professional Advice</h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    ProofDeed does not provide legal, financial, or professional advice. Use of ProofDeed does not create an attorney-client, escrow, or fiduciary relationship.
                  </p>
                </div>
              </div>
            </div>

            {/* User Responsibility */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-line text-xl text-slate-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">User Responsibility</h2>
                  <ul className="space-y-3 text-base text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>You are responsible for the documents you submit</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>You confirm that you have the legal right to submit and verify those documents</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>ProofDeed does not validate the authenticity or legality of document content</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* No Warranties */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-error-warning-line text-xl text-red-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">No Warranties</h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    ProofDeed is provided "as is" without warranties of any kind. We do not guarantee acceptance of proofs by courts, agencies, or third parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-line text-xl text-slate-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Limitation of Liability</h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    ProofDeed shall not be liable for any indirect, incidental, or consequential damages arising from use of the service.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Changes */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-refresh-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Service Changes</h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    We reserve the right to modify or discontinue the service at any time.
                  </p>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-scales-line text-xl text-slate-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Governing Law</h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    These terms are governed by applicable laws of the operating jurisdiction.
                  </p>
                </div>
              </div>
            </div>

            {/* Agreement Notice */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <p className="text-base font-semibold text-blue-900">
                By using ProofDeed, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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
              
            </p>
          </div>
          
          <div className="border-t border-slate-300 pt-6 mb-6">
            <p className="text-xs text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
              <br />
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
