import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GovernmentCertificate from "../certificate/government/page";

export default function Government() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=United%20States%20Capitol%20building%20with%20digital%20security%20overlay%20showing%20government%20record%20systems%20and%20public%20integrity%20infrastructure%2C%20professional%20institutional%20technology%20with%20blue%20and%20cyan%20lighting%20effects%2C%20high-tech%20government%20data%20protection%20visualization%20with%20secure%20network%20connections%20and%20fraud%20prevention%20systems%2C%20authoritative%20and%20trustworthy%20aesthetic%2C%20bright%20and%20premium%20quality%20with%20reduced%20dark%20overlay&width=1920&height=800&seq=gov-hero-bright-004&orientation=landscape"
            alt="Government Record Systems"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(14, 26, 47, 0.35), rgba(14, 26, 47, 0.25))'
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-white uppercase tracking-wider">
              Government & Institutional Infrastructure
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Verifiable Public Record Integrity
            </h1>

            <p className="text-lg text-slate-200 mb-8 leading-relaxed">
              ProofDeed provides tamper-evident cryptographic certification for public records,
              regulatory documentation, and agency workflows — without replacing existing
              systems of record or storing document contents.
            </p>

            <Link
              to="/procurement"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg"
              style={{ background: '#FF6B35', color: '#FFFFFF' }}
            >
              Inquiry / Procurement & Compliance Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Core Capabilities
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Independent, defensible infrastructure designed for audit,
            oversight, and long-term record integrity.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Cryptographic Hashing
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              SHA-256 fingerprint generation ensures tamper-evident proof of
              record existence without storing the document itself.
            </p>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Secure Timestamping
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Server-recorded timestamps provide defensible certification
              records suitable for audit and compliance workflows.
            </p>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Independent Verification
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Third parties can verify record integrity without agency system
              access or internal data exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Institutional Use Cases */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900">
            Institutional Use Cases
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Public Records & Regulatory Filings
            </h3>
            <p className="text-slate-600 text-sm">
              Certification of administrative records, filings, permits, and
              compliance documentation.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              Inter-Agency & Judicial Verification
            </h3>
            <p className="text-slate-600 text-sm">
              Cross-agency record validation and defensible proof for oversight,
              litigation support, and compliance audits.
            </p>
          </div>
        </div>
      </section>

      {/* Certificate Preview */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Government Record Certification
          </h2>
          <p className="text-slate-600 mb-8">
            Sample certificate demonstrating cryptographic proof structure
            and verification format.
          </p>

          <button
            onClick={() => setShowCertificate(true)}
            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800"
          >
            View Sample Certificate
          </button>
        </div>
      </section>

      {/* Certificate Modal */}
      {showCertificate && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setShowCertificate(false)}
        >
          <div className="relative w-full max-w-2xl">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ×
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
