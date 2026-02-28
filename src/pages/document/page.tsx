import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Legal() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20business%20meeting%20with%20diverse%20legal%20professionals%20and%20executives%20reviewing%20important%20documents%20in%20bright%20modern%20glass%20office%2C%20institutional%20document%20certification%20environment%20with%20natural%20daylight%20and%20warm%20professional%20atmosphere%2C%20people%20collaborating%20around%20conference%20table%20with%20contracts%20and%20legal%20papers%2C%20clean%20minimalist%20corporate%20setting%20with%20human%20interaction%20and%20professional%20engagement%2C%20bright%20and%20welcoming%20aesthetic&width=1920&height=800&seq=doc-cert-people-hero-002&orientation=landscape"
            alt="Document certification infrastructure"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(14, 26, 47, 0.35), rgba(14, 26, 47, 0.25))' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Document Certification Infrastructure
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Independent Document Certification Infrastructure
            </h1>
            
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Tamper-evident certification and independent verification for legal documents, real estate transactions, title records, and institutional documentation — without storing document contents.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center gap-4">
              <Link
                to="/legal/intake"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-opacity hover:opacity-90"
                style={{ background: '#FF6B35', color: '#FFFFFF' }}
              >
                Certify a Document
              </Link>
              <Link
                to="/verify"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] hover:border-[#2563EB] transition-colors whitespace-nowrap cursor-pointer"
              >
                Verify a Certificate
              </Link>
              <Link
                to="/inquiry"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] hover:border-[#2563EB] transition-colors whitespace-nowrap cursor-pointer"
              >
                Inquiry
              </Link>
              <Link
                to="/certificate/document"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] hover:border-[#2563EB] transition-colors whitespace-nowrap cursor-pointer"
              >
                View Sample Certificate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Sections */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Document Certification for Institutional and Individual Use
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Secure certification infrastructure for legal professionals, real estate transactions, and private agreements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-scales-3-line text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Law Firms
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Certify contracts, affidavits, court filings, and legal correspondence with cryptographic proof of existence and integrity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-home-4-line text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Title &amp; Escrow
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Protect title commitments, settlement statements, deeds, and recorded instruments with tamper-evident certification.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-bank-line text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Mortgage &amp; Lending
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Create permanent proof for loan documents, closing disclosures, and regulatory compliance records.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-file-text-line text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Private Agreements
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Certify business contracts, partnership agreements, and private transactions with independent verification.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-user-line text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Individual Homeowners
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Protect personal property records, deeds, and important documents with cryptographic certification.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-building-line text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Institutional Documentation
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Enterprise-grade certification for corporate records, compliance documentation, and audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 pb-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Independent certification infrastructure without document storage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                SHA-256 Fingerprint Generation
              </h3>
              <p className="text-slate-600">
                Cryptographic hash created from document contents
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Timestamping
              </h3>
              <p className="text-slate-600">
                Precise timestamp recorded at moment of certification
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Polygon Anchoring
              </h3>
              <p className="text-slate-600">
                Hash anchored to public blockchain for immutability
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Unique Verification ID
              </h3>
              <p className="text-slate-600">
                Independent verification without document storage
              </p>
            </div>
          </div>

          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-8">
            <p className="text-base text-slate-700 leading-relaxed text-center">
              <strong>No document storage:</strong> ProofDeed generates cryptographic proof only. Original documents remain under your control.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/technical-process"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-base font-semibold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              View Full Technical Process
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Certification Pricing
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transparent pricing for permanent cryptographic certification
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Starter */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:border-slate-300 transition-colors">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Starter
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$19</span>
                <span className="text-slate-600 ml-2">per month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-xl mt-0.5"></i>
                  <span className="text-slate-600">25 certifications/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-xl mt-0.5"></i>
                  <span className="text-slate-600">25MB per file</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-xl mt-0.5"></i>
                  <span className="text-slate-600">Single user</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-xl mt-0.5"></i>
                  <span className="text-slate-600">Dashboard access</span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="block w-full px-7 py-3.5 min-h-[56px] text-white text-base font-semibold rounded-lg hover:opacity-90 transition-opacity text-center whitespace-normal cursor-pointer"
                style={{ background: '#2563EB' }}
              >
                Starter Plan
              </Link>
            </div>

            {/* Professional – Highlighted */}
            <div className="relative bg-white rounded-xl p-8 transition-colors" style={{ border: '2px solid #2563EB' }}>
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-block px-4 py-1 text-xs font-bold text-white rounded-full whitespace-nowrap" style={{ background: '#2563EB' }}>
                  Preferred
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Professional
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$39</span>
                <span className="text-slate-600 ml-2">per month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-xl mt-0.5"></i>
                  <span className="text-slate-600">100 certifications/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-xl mt-0.5"></i>
                  <span className="text-slate-600">50MB per file</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-xl mt-0.5"></i>
                  <span className="text-slate-600">Multi-user access</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-xl mt-0.5"></i>
                  <span className="text-slate-600">Priority support</span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="block w-full px-7 py-3.5 min-h-[56px] text-white text-base font-semibold rounded-lg hover:opacity-90 transition-opacity text-center whitespace-normal cursor-pointer"
                style={{ background: '#FF6B35' }}
              >
                Start Professional Plan
              </Link>
            </div>

            {/* Institutional */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 hover:border-slate-300 transition-colors">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Institutional
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">Custom</span>
                <span className="text-slate-600 ml-2">pricing</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-xl mt-0.5"></i>
                  <span className="text-slate-600">Volume pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-xl mt-0.5"></i>
                  <span className="text-slate-600">API access</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-xl mt-0.5"></i>
                  <span className="text-slate-600">Batch processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-xl mt-0.5"></i>
                  <span className="text-slate-600">SLA</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-xl mt-0.5"></i>
                  <span className="text-slate-600">Dedicated support</span>
                </li>
              </ul>
              <Link
                to="/contact?vertical=document"
                className="block w-full px-7 py-3.5 min-h-[56px] text-white text-base font-semibold rounded-lg hover:opacity-90 transition-opacity text-center whitespace-normal cursor-pointer"
                style={{ background: '#2563EB' }}
              >
                Request Institutional
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
