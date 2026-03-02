import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function InstitutionalCertification() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden mt-16 bg-slate-900">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Institutional Certification Infrastructure
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Enterprise-Grade Digital Certification
            </h1>

            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Cryptographic integrity certification for regulated transactions, 
              banking documentation, legal records, real estate transfers, 
              financial instruments, and institutional documentation —
              without storing document contents.
            </p>

            <div className="flex flex-wrap items-center gap-4">

              <Link
                to="/document/intake"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-lg transition-opacity hover:opacity-90"
                style={{ background: '#2563EB', color: '#FFFFFF' }}
              >
                Register Integrity Certificate
              </Link>

              <Link
                to="/verify"
                className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-white text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
              >
                Verify Certificate
              </Link>

              <Link
                to="/certificate/document"
                className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-white text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
              >
                View Sample Certificate
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Built for Regulated & High-Trust Environments
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Certification infrastructure for institutions that cannot afford document disputes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Banking & Finance
              </h3>
              <p className="text-slate-600">
                Loan documents, financial disclosures, and regulated transaction records.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Legal & Real Estate
              </h3>
              <p className="text-slate-600">
                Deeds, closing packets, title records, and legal filings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Enterprise Documentation
              </h3>
              <p className="text-slate-600">
                Compliance logs, audit records, corporate documentation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Certification Plans
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Starter */}
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Starter
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$19</span>
                <span className="text-slate-600 ml-2">/ month</span>
              </div>
              <p className="text-slate-600 mb-6">
                Up to 25 certifications per month.
              </p>
              <Link
                to="/signup?plan=starter&vertical=document"
                className="block w-full py-3 text-white text-center font-semibold rounded-lg"
                style={{ background: '#2563EB' }}
              >
                Choose Starter
              </Link>
            </div>

            {/* Professional */}
            <div className="bg-white border-2 border-blue-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Professional
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$39</span>
                <span className="text-slate-600 ml-2">/ month</span>
              </div>
              <p className="text-slate-600 mb-6">
                Up to 70 certifications per month.
              </p>
              <Link
                to="/signup?plan=pro&vertical=document"
                className="block w-full py-3 text-white text-center font-semibold rounded-lg"
                style={{ background: '#FF6B35' }}
              >
                Start Professional
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Enterprise
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <p className="text-slate-600 mb-6">
                High-volume pricing, API access, SLA, dedicated support.
              </p>
              <Link
                to="/signup?plan=enterprise&vertical=document"
                className="block w-full py-3 text-white text-center font-semibold rounded-lg"
                style={{ background: '#2563EB' }}
              >
                Configure Enterprise
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
