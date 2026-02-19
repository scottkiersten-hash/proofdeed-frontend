import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import GovernmentCertificate from '../../components/feature/GovernmentCertificate';

export default function Government() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Image */}
      <section className="relative py-20 overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=United%20States%20Capitol%20building%20with%20digital%20security%20overlay%20showing%20government%20record%20systems%20and%20public%20integrity%20infrastructure%2C%20professional%20institutional%20technology%20with%20blue%20and%20cyan%20lighting%20effects%2C%20high-tech%20government%20data%20protection%20visualization%20with%20secure%20network%20connections%20and%20fraud%20prevention%20systems%2C%20authoritative%20and%20trustworthy%20aesthetic%2C%20bright%20and%20premium%20quality%20with%20reduced%20dark%20overlay&width=1920&height=800&seq=gov-hero-bright-004&orientation=landscape"
            alt="Government Record Systems"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(14, 26, 47, 0.35), rgba(14, 26, 47, 0.25))' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Government Certification Infrastructure
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Verifiable Public Record Integrity Infrastructure
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              ProofDeed provides tamper-evident certification and independent verification for government records, regulatory documentation, and public filings — without replacing existing systems of record.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <a
                href="/technical-package"
                className="inline-flex items-center px-5 sm:px-7 py-3 md:py-4 min-h-[48px] md:min-h-[52px] bg-transparent border-2 border-white/80 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-colors whitespace-nowrap cursor-pointer"
              >
                Download Complete Technical Package
              </a>
              <Link
                to="/procurement"
                className="inline-flex items-center px-5 sm:px-7 py-3 md:py-4 min-h-[48px] md:min-h-[52px] text-sm sm:text-base font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-opacity hover:opacity-90"
                style={{ background: '#FF6B35', color: '#FFFFFF' }}
              >
                Inquiry / View Procurement &amp; Compliance Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Overview */}
      <section id="capabilities" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Strategic Overview
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Executive-level capabilities designed for government agencies and regulated institutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Capability 1 */}
            <div className="p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <i className="ri-shield-check-line text-xl md:text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Tamper-Evident Certification
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                Cryptographic hashing, immutable timestamps, and blockchain anchoring provide permanent proof of record existence and integrity.
              </p>
              <a
                href="/procurement#architecture"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Learn More
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            {/* Capability 2 */}
            <div className="p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <i className="ri-file-list-3-line text-xl md:text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Audit &amp; Oversight Ready
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                Immutable certification records create defensible audit trails for compliance, oversight, litigation support, and regulatory review.
              </p>
              <a
                href="/procurement#service-levels"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Learn More
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            {/* Capability 3 */}
            <div className="p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <i className="ri-global-line text-xl md:text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Independent Public Verification
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                Citizens, courts, and third parties can independently verify certified records without agency involvement or internal system access.
              </p>
              <a
                href="/procurement#architecture"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Learn More
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/technical-process"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm md:text-base font-semibold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              View Full Technical Process
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Institutional Use Cases */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Institutional Use Cases
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Case 1 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <i className="ri-government-line text-xl text-slate-700"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900">State Agency Records</h3>
              </div>
              <p className="text-sm md:text-base text-slate-600">
                Tamper-evident certification for critical administrative records supporting audit compliance and inter-agency verification.
              </p>
            </div>

            {/* Case 2 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <i className="ri-building-line text-xl text-slate-700"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900">Municipal Permits</h3>
              </div>
              <p className="text-sm md:text-base text-slate-600">
                Building permits, business licenses, and inspection reports with third-party verification without exposing internal systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Deployment Options
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-cloud-line text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Secure SaaS</h3>
              <p className="text-sm md:text-base text-slate-600">Managed infrastructure with enterprise security</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-server-line text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Private Instance</h3>
              <p className="text-sm md:text-base text-slate-600">Dedicated infrastructure for controlled environments</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-plug-line text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">API-Only</h3>
              <p className="text-sm md:text-base text-slate-600">Headless certification service integration</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/procurement#deployment"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Explore Deployment Models
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Government Certificate Preview */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Government Record Certification
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              ProofDeed Government Record Certificates provide cryptographic proof of existence, integrity, and timestamp for public records and regulatory documentation.
            </p>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setShowCertificate(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm md:text-base font-semibold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              View Sample Government Certificate
              <i className="ri-external-link-line"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {showCertificate && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          onClick={() => setShowCertificate(false)}
        >
          <div className="relative w-full max-w-2xl my-8">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute -top-10 right-0 text-white text-3xl md:text-4xl hover:text-slate-300 cursor-pointer z-10"
            >
              <i className="ri-close-line"></i>
            </button>
            <div onClick={(e) => e.stopPropagation()}>
              <GovernmentCertificate />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
