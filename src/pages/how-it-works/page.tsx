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

          {/* Creating Proof Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Creating Proof</h2>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Upload Your Document</h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                      Select the document you want to timestamp. This can be a deed, contract, title document, or any file you need to prove existed at a specific time.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <p className="text-sm text-blue-900">
                        <strong>Privacy First:</strong> Your document is processed entirely in your browser. The file never leaves your device.
                      </p>
                    </div>
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
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Generate Cryptographic Hash</h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                      ProofDeed creates a unique SHA-256 hash (digital fingerprint) of your document. This hash is a one-way cryptographic function that cannot be reversed to recreate your document.
                    </p>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <p className="text-xs font-mono text-slate-700 break-all">
                        Example: a3b2c1d4e5f67890123456789abcdef...
                      </p>
                    </div>
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
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Blockchain Timestamping</h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                      The hash is sent to our backend and permanently recorded on a public blockchain with an immutable timestamp. This creates proof that the document existed at that specific moment.
                    </p>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <p className="text-sm text-green-900">
                        <strong>Immutable Record:</strong> Once created, this proof cannot be altered, deleted, or backdated by anyone.
                      </p>
                    </div>
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
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Download Proof Report</h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                      Receive a detailed proof report containing the hash, timestamp, proof ID, and verification instructions. Keep this report with your original document.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verifying Proof Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Verifying Proof</h2>
            
            <div className="space-y-8">
              {/* Verification Step 1 */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Upload Document Again</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      To verify a document, simply upload it again to ProofDeed. The same hash generation process occurs locally in your browser.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verification Step 2 */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Compare Hashes</h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-4">
                      ProofDeed generates a new hash and compares it to the original blockchain record.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <p className="text-sm font-semibold text-green-900 mb-2">✓ Hashes Match</p>
                        <p className="text-sm text-green-800">Document is unchanged and verified</p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <p className="text-sm font-semibold text-red-900 mb-2">✗ Hashes Don't Match</p>
                        <p className="text-sm text-red-800">Document has been altered</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verification Step 3 */}
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Independent Verification</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Anyone can verify the proof independently using the blockchain record. No account or ProofDeed access required.
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
                Get Proof
              </a>
              <Link
                to="/verify"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                Verify a Document
              </Link>
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
