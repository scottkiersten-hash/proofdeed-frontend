
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
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-base text-slate-600">Effective Date: January 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                By accessing or using ProofDeed ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Service.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-service-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Service Description</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">
                    ProofDeed provides cryptographic certification and verification services. The platform generates a SHA-256 cryptographic hash (digital fingerprint) of submitted data and anchors that hash to a public blockchain network for timestamping and verification purposes.
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">
                    ProofDeed does not store, alter, validate, or interpret the substantive content of submitted documents unless explicitly stated within a separate enterprise agreement.
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed">
                    ProofDeed operates as a non-custodial certification layer and does not replace systems of record.
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">2. No Legal, Financial, or Professional Advice</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">
                    ProofDeed does not provide legal, financial, escrow, fiduciary, or professional services.
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">Use of the Service does not:</p>
                  <ul className="space-y-2 text-base text-slate-700 mb-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Create an attorney-client relationship</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Create an escrow or fiduciary relationship</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Guarantee admissibility in any court or regulatory proceeding</span>
                    </li>
                  </ul>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Users are solely responsible for obtaining independent legal or professional advice where required.
                  </p>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-line text-xl text-slate-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">3. User Responsibilities</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">You represent and warrant that:</p>
                  <ul className="space-y-2 text-base text-slate-700 mb-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>You have the legal authority to submit the document or data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>You possess all necessary rights and permissions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Your use of the Service does not violate applicable law</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>You are responsible for safeguarding verification IDs and account credentials</span>
                    </li>
                  </ul>
                  <p className="text-base text-slate-700 leading-relaxed">
                    ProofDeed does not validate the authenticity, legality, accuracy, or enforceability of document content.
                  </p>
                </div>
              </div>
            </div>

            {/* Government & Institutional Use */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-government-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Government &amp; Institutional Use</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">
                    ProofDeed may be used by government agencies, contractors, or institutional entities.
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">Unless otherwise agreed in a written contract:</p>
                  <ul className="space-y-2 text-base text-slate-700 mb-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Use of the Service remains subject to these Terms</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>No additional warranties or compliance certifications are implied</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Service-level commitments apply only if defined in a separate agreement</span>
                    </li>
                  </ul>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Procurement or institutional engagement may require supplemental contractual documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Handling & Privacy */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-xl text-green-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Data Handling &amp; Privacy</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">
                    ProofDeed anchors cryptographic hashes only. A hash is a one-way mathematical representation and does not reveal document content.
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">
                    Users are responsible for ensuring that submitted material complies with applicable data protection and privacy regulations.
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed">
                    ProofDeed does not assume responsibility for regulatory classification of user data.
                  </p>
                </div>
              </div>
            </div>

            {/* File Size & Usage Limits */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-file-list-line text-xl text-slate-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">6. File Size &amp; Usage Limits</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">
                    Subscription plans include defined certification limits and file size limits.
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">ProofDeed reserves the right to:</p>
                  <ul className="space-y-2 text-base text-slate-700 mb-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Enforce plan limits</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Restrict excessive or abusive usage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Require upgrade to appropriate plan tier</span>
                    </li>
                  </ul>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Enterprise or institutional arrangements may define alternative usage terms under written agreement.
                  </p>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">7. No Warranties</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">
                    The Service is provided "as is" and "as available."
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">ProofDeed makes no warranties, express or implied, including:</p>
                  <ul className="space-y-2 text-base text-slate-700 mb-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Merchantability</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Fitness for a particular purpose</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Non-infringement</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Guaranteed acceptance of certification by courts, agencies, or third parties</span>
                    </li>
                  </ul>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Blockchain network performance is outside ProofDeed's control.
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Limitation of Liability</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">
                    To the maximum extent permitted by law, ProofDeed shall not be liable for:
                  </p>
                  <ul className="space-y-2 text-base text-slate-700 mb-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Indirect or consequential damages</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Loss of profits or revenue</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Loss of data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Business interruption</span>
                    </li>
                  </ul>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Total liability shall not exceed fees paid for the Service during the preceding twelve (12) months.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Modifications */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-refresh-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Service Modifications</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">ProofDeed reserves the right to:</p>
                  <ul className="space-y-2 text-base text-slate-700 mb-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Modify features</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Update pricing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Adjust certification limits</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Suspend or discontinue services</span>
                    </li>
                  </ul>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Where required, notice will be provided.
                  </p>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-close-circle-line text-xl text-red-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Termination</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">ProofDeed may suspend or terminate access for:</p>
                  <ul className="space-y-2 text-base text-slate-700 mb-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Violation of these Terms</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Fraudulent activity</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Abuse of the Service</span>
                    </li>
                  </ul>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Users may discontinue use at any time.
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">11. Governing Law</h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    These Terms are governed by the laws of the applicable operating jurisdiction unless superseded by written enterprise agreement.
                  </p>
                </div>
              </div>
            </div>

            {/* Entire Agreement */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-file-text-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">12. Entire Agreement</h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    These Terms constitute the entire agreement between you and ProofDeed regarding use of the Service unless superseded by a separately executed written agreement.
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
                <li><Link to="/verify" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Verify a Certificate</Link></li>
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
              Independent, Verifiable Certification Infrastructure
            </p>
          </div>
          
          <div className="border-t border-slate-300 pt-6 mb-6">
            <p className="text-xs text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> ProofDeed provides cryptographic certification and verification services only. ProofDeed is not a law firm, title company, escrow service, or financial institution. No document content is stored.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center md:text-left leading-relaxed">© 2025 ProofDeed. All rights reserved.</p>
            <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-blue-600 transition-colors cursor-pointer leading-relaxed">
              Website Builder
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
