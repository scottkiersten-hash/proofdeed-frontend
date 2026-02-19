
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
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-base text-slate-600">Effective Date: January 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                ProofDeed respects your privacy and is designed to minimize data collection. This Privacy Policy describes how ProofDeed handles information in connection with the Service.
              </p>
            </div>

            {/* No Document Storage */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-xl text-green-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">1. No Document Storage</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">
                    ProofDeed does not store uploaded documents.
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Documents are processed locally or transiently for the sole purpose of generating a cryptographic hash (SHA-256 fingerprint). Once the hash is generated, the document is discarded. Only the hash and associated verification metadata are retained.
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">2. What We Collect</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">ProofDeed may collect the following information:</p>
                  <ul className="space-y-3 text-base text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Email address:</strong> If provided for account access, communication, or subscription management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Account information:</strong> Username, organization name (if applicable), and subscription tier</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Usage metadata:</strong> Certification timestamps, verification IDs, blockchain transaction references, and basic usage statistics required to operate the Service</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Payment information:</strong> Handled by third-party payment processors (e.g., Stripe). ProofDeed does not store full payment card details</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span><strong>Technical information:</strong> IP address, browser type, device information, and access logs for security and operational purposes</span>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">3. What We Do Not Collect</h2>
                  <ul className="space-y-3 text-base text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>We do not store document contents</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>We do not analyze, mine, or sell user data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>We do not track documents or proofs beyond verification metadata necessary for service operation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>We do not use invasive tracking or behavioral profiling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-settings-line text-xl text-slate-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">4. How We Use Information</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">Information collected is used to:</p>
                  <ul className="space-y-2 text-base text-slate-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Operate and maintain the Service</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Process certifications and generate verification records</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Manage subscriptions and billing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Provide customer support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Monitor service performance and security</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Comply with legal obligations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Send service-related communications (e.g., account updates, security alerts)</span>
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Third-Party Services</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">
                    ProofDeed may use trusted third-party services for:
                  </p>
                  <ul className="space-y-2 text-base text-slate-700 mb-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Payment processing (e.g., Stripe)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Cloud infrastructure and hosting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Email communication</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Analytics and monitoring</span>
                    </li>
                  </ul>
                  <p className="text-base text-slate-700 leading-relaxed">
                    These services operate under their own privacy policies. ProofDeed does not control third-party data practices.
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
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Data Security</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">
                    ProofDeed implements reasonable technical and organizational measures to protect user information, including:
                  </p>
                  <ul className="space-y-2 text-base text-slate-700 mb-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>TLS 1.2+ encryption for data in transit</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Role-based access controls</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Immutable audit logging</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Infrastructure monitoring and alerting</span>
                    </li>
                  </ul>
                  <p className="text-base text-slate-700 leading-relaxed">
                    No system is completely secure. ProofDeed cannot guarantee absolute security.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-xl text-slate-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Data Retention</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">
                    ProofDeed retains information only as long as necessary to:
                  </p>
                  <ul className="space-y-2 text-base text-slate-700 mb-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Provide the Service</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Comply with legal obligations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Resolve disputes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Enforce agreements</span>
                    </li>
                  </ul>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Blockchain-anchored hashes are permanent and cannot be deleted from the public blockchain network.
                  </p>
                </div>
              </div>
            </div>

            {/* User Rights */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-settings-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">8. User Rights</h2>
                  <p className="text-base text-slate-700 leading-relaxed mb-3">
                    Depending on your jurisdiction, you may have rights to:
                  </p>
                  <ul className="space-y-2 text-base text-slate-700 mb-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Access your personal information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Correct inaccurate information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Request deletion of your information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Object to processing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Request data portability</span>
                    </li>
                  </ul>
                  <p className="text-base text-slate-700 leading-relaxed">
                    To exercise these rights, contact: <a href="mailto:info@proofdeed.com" className="text-blue-600 hover:underline">info@proofdeed.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-user-forbid-line text-xl text-red-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Children's Privacy</h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    ProofDeed is not intended for use by individuals under the age of 18. ProofDeed does not knowingly collect information from children.
                  </p>
                </div>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-refresh-line text-xl text-slate-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Changes to Privacy Policy</h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    ProofDeed may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of the Service constitutes acceptance of the updated policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-10">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">11. Contact</h2>
                  <p className="text-base text-slate-700 leading-relaxed">
                    For questions or concerns about this Privacy Policy, contact:
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed mt-2">
                    <a href="mailto:info@proofdeed.com" className="text-blue-600 hover:underline font-medium">info@proofdeed.com</a>
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
