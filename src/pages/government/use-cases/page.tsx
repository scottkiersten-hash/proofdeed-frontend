import { Link } from 'react-router-dom';

export default function GovernmentUseCases() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            ProofDeed
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/real-estate" className="text-sm text-gray-700 hover:text-gray-900 whitespace-nowrap cursor-pointer">
              Real Estate
            </Link>
            <Link to="/auto" className="text-sm text-gray-700 hover:text-gray-900 whitespace-nowrap cursor-pointer">
              Automotive
            </Link>
            <Link to="/government" className="text-sm text-gray-900 font-medium whitespace-nowrap cursor-pointer">
              Government
            </Link>
            <Link to="/about" className="text-sm text-gray-700 hover:text-gray-900 whitespace-nowrap cursor-pointer">
              Partners
            </Link>
          </nav>
          <Link
            to="/government/contact"
            className="px-6 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 whitespace-nowrap cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium tracking-wide mb-6">
            GOVERNMENT USE CASES
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Public Sector Applications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ProofDeed infrastructure serves government agencies, public records offices, and regulatory bodies requiring tamper-evident documentation and fraud prevention.
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Use Case 1 */}
            <div className="bg-white p-10 rounded-lg border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-government-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                County Recorder Offices
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Certify property deeds, liens, mortgages, and land records with cryptographic proof. Citizens and title companies can independently verify document authenticity without contacting the recorder's office.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Property deed certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Lien and mortgage records</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Public access verification</span>
                </li>
              </ul>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white p-10 rounded-lg border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-car-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                DMV &amp; Motor Vehicle Departments
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Secure vehicle title transfers, registration records, and VIN certifications. Prevent title fraud, identity theft, and unauthorized alterations to ownership records.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Title transfer certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">VIN validation records</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Fraud prevention infrastructure</span>
                </li>
              </ul>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white p-10 rounded-lg border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-file-shield-2-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Regulatory &amp; Licensing Agencies
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Issue tamper-evident permits, professional licenses, and compliance certificates. Recipients can prove authenticity to employers, clients, or third parties without agency involvement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Professional license certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Building permits and inspections</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Compliance documentation</span>
                </li>
              </ul>
            </div>

            {/* Use Case 4 */}
            <div className="bg-white p-10 rounded-lg border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-alert-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Fraud Investigation Units
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Law enforcement and investigative bodies can verify document authenticity in real-time. Detect alterations, forgeries, and unauthorized modifications during investigations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Real-time document verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Tampering detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Evidence chain integrity</span>
                </li>
              </ul>
            </div>

            {/* Use Case 5 */}
            <div className="bg-white p-10 rounded-lg border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-file-text-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Court &amp; Legal Records
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Certify court orders, judgments, and legal filings with immutable proof. Attorneys and parties can verify document authenticity for legal proceedings and appeals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Court order certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Legal filing verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Judgment authentication</span>
                </li>
              </ul>
            </div>

            {/* Use Case 6 */}
            <div className="bg-white p-10 rounded-lg border border-gray-200 hover:border-blue-600 transition-colors">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-hospital-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Public Health Departments
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Issue verifiable health certificates, inspection reports, and compliance records. Businesses and individuals can prove authenticity to regulators and customers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Health inspection certificates</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Compliance documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Public verification access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Discuss Your Agency's Requirements
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Contact our government solutions team to explore implementation options, security protocols, and integration pathways.
          </p>
          <Link
            to="/government/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 whitespace-nowrap cursor-pointer"
          >
            Request Institutional Access
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">ProofDeed</h3>
              <p className="text-sm text-gray-600">
                Digital record infrastructure for regulated industries.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Industries</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/real-estate" className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link to="/auto" className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    Automotive
                  </Link>
                </li>
                <li>
                  <Link to="/government" className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    Government
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/how-it-works" className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/verify" className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    Verify Proof
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              © 2024 ProofDeed. All rights reserved. |{' '}
              <a
                href="https://readdy.ai/?ref=logo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                Website Builder
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
