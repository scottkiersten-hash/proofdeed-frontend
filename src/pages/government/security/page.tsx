import { Link } from 'react-router-dom';

export default function GovernmentSecurity() {
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
            SECURITY INFRASTRUCTURE
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Enterprise-Grade Security for Public Sector
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ProofDeed infrastructure meets the security, compliance, and transparency standards required by government agencies and public institutions.
          </p>
        </div>
      </section>

      {/* Core Security Principles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Security Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on cryptographic foundations designed for high-stakes environments requiring document integrity and fraud prevention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Principle 1 */}
            <div className="bg-gray-50 p-10 rounded-lg">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-lock-2-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Cryptographic Document Hashing
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every document is converted into a unique cryptographic fingerprint (hash). Any alteration to the document—even a single character—produces a completely different hash, making tampering immediately detectable.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-s-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">SHA-256 cryptographic hashing</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-s-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Instant tampering detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-s-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">No document storage required</span>
                </li>
              </ul>
            </div>

            {/* Principle 2 */}
            <div className="bg-gray-50 p-10 rounded-lg">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Immutable Audit Trail
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                All certifications are recorded in an immutable ledger. Once created, records cannot be altered, deleted, or rewritten—creating a permanent audit trail for compliance and oversight.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-s-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Permanent record creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-s-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">No deletion or modification</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-s-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Complete audit history</span>
                </li>
              </ul>
            </div>

            {/* Principle 3 */}
            <div className="bg-gray-50 p-10 rounded-lg">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-global-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Independent Verification
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Anyone can verify document authenticity without contacting your agency or accessing your systems. Verification is public, instant, and requires no credentials or permissions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-s-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Public verification access</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-s-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">No system login required</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-s-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Instant authenticity confirmation</span>
                </li>
              </ul>
            </div>

            {/* Principle 4 */}
            <div className="bg-gray-50 p-10 rounded-lg">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-database-2-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No Single Point of Failure
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                ProofDeed does not store your documents or control your data. Proofs exist independently across distributed infrastructure—no single entity can alter or delete records.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-s-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Distributed infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-s-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">No data custody</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-arrow-right-s-line text-lg text-blue-600 mt-1"></i>
                  <span className="text-gray-700">Resilient to system failures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Architecture
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How ProofDeed infrastructure ensures document integrity and fraud prevention at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Document Hashing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your document is converted into a unique cryptographic hash. The original document never leaves your system—only the hash is transmitted.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Immutable Recording
              </h3>
              <p className="text-gray-600 leading-relaxed">
                The hash is recorded in an immutable ledger with timestamp and metadata. This record cannot be altered or deleted by anyone.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Public Verification
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Anyone can verify the document by comparing its hash against the recorded proof. Matching hashes confirm authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Compliance &amp; Standards
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ProofDeed infrastructure is designed to meet the security and compliance requirements expected by government agencies and public institutions.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-check-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Data Privacy</h4>
                    <p className="text-gray-600">
                      ProofDeed does not store your documents. Only cryptographic hashes are recorded—no sensitive data is transmitted or retained.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-file-shield-2-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Audit Readiness</h4>
                    <p className="text-gray-600">
                      Complete audit trail of all certifications with timestamps, metadata, and immutable proof of creation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-lock-2-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Cryptographic Standards</h4>
                    <p className="text-gray-600">
                      Industry-standard SHA-256 hashing and distributed ledger technology ensure maximum security and reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=secure%20government%20data%20center%20with%20encrypted%20network%20connections%20showing%20cryptographic%20security%20layers%20and%20distributed%20infrastructure%20in%20professional%20blue%20and%20gray%20tones%20with%20digital%20lock%20icons%20and%20verification%20checkmarks&width=600&height=700&seq=gov-compliance-001&orientation=portrait"
                alt="Security Compliance Infrastructure"
                className="w-full h-auto rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Discuss Security Requirements
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Contact our government solutions team to review security protocols, compliance standards, and integration options for your agency.
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
