import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Institutional() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20business%20meeting%20with%20diverse%20legal%20professionals%20and%20executives%20reviewing%20important%20documents%20in%20bright%20modern%20glass%20office%2C%20institutional%20document%20certification%20environment%20with%20natural%20daylight%20and%20warm%20professional%20atmosphere%2C%20people%20collaborating%20around%20conference%20table%20with%20contracts%20and%20legal%20papers%2C%20clean%20minimalist%20corporate%20setting%20with%20human%20interaction%20and%20professional%20engagement%2C%20bright%20and%20welcoming%20aesthetic&width=1920&height=800&seq=doc-cert-people-hero-002&orientation=landscape"
            alt="Institutional certification infrastructure"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(14, 26, 47, 0.35), rgba(14, 26, 47, 0.25))' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Institutional Certification Infrastructure
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Independent Document Certification Infrastructure
            </h1>

            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Tamper-evident certification and independent verification for legal documents,
              real estate transactions, title records, and institutional documentation
              — without storing document contents.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center gap-4">

              <Link
                to="/signup?vertical=document"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-opacity hover:opacity-90"
                style={{ background: '#FF6B35', color: '#FFFFFF' }}
              >
                Start Document Certification
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
              Institutional & Professional Certification
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Secure certification infrastructure for legal professionals,
              financial institutions, and private agreements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Law Firms
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Certify contracts, affidavits, court filings, and legal correspondence with
                cryptographic proof of existence and integrity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Title & Escrow
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Protect title commitments, settlement statements, deeds, and recorded instruments
                with tamper-evident certification.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Mortgage & Lending
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Create permanent proof for loan documents, closing disclosures,
                and regulatory compliance records.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Certification Plans
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Subscription access to the ProofDeed certification platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Starter */}
            <div className="bg-white border border-slate-200 rounded-xl p-8">

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Starter
              </h3>

              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$19</span>
                <span className="text-slate-600 ml-2">per month</span>
              </div>

              <Link
                to="/signup?vertical=document&plan=starter"
                className="block w-full px-7 py-3.5 text-white text-base font-semibold rounded-lg text-center"
                style={{ background: '#2563EB' }}
              >
                Start Starter Plan
              </Link>

            </div>

            {/* Professional */}
            <div className="bg-white border-2 border-[#2563EB] rounded-xl p-8">

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Professional
              </h3>

              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$39</span>
                <span className="text-slate-600 ml-2">per month</span>
              </div>

              <Link
                to="/signup?vertical=document&plan=pro"
                className="block w-full px-7 py-3.5 text-white text-base font-semibold rounded-lg text-center"
                style={{ background: '#FF6B35' }}
              >
                Start Professional Plan
              </Link>

            </div>

            {/* Institutional */}
            <div className="bg-white border border-slate-200 rounded-xl p-8">

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Institutional
              </h3>

              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">Custom</span>
              </div>

              <Link
                to="/contact?vertical=document"
                className="block w-full px-7 py-3.5 text-white text-base font-semibold rounded-lg text-center"
                style={{ background: '#2563EB' }}
              >
                Request Institutional Pricing
              </Link>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}
