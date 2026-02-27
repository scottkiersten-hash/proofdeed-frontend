import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Auto() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20automotive%20certification%20infrastructure%20with%20secure%20VIN%20validation%20systems%2C%20professional%20vehicle%20record%20verification%20technology%20showing%20digital%20title%20integrity%20platforms%2C%20clean%20minimalist%20automotive%20dealership%20environment%20with%20subtle%20blue%20accent%20lighting%2C%20institutional%20vehicle%20transfer%20certification%20aesthetic%2C%20bright%20and%20premium%20quality%20with%20reduced%20dark%20overlay&width=1920&height=800&seq=auto-cert-bright-hero-002&orientation=landscape"
            alt="Automotive certification infrastructure"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(14, 26, 47, 0.35), rgba(14, 26, 47, 0.25))' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Automotive Certification Infrastructure
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Independent Vehicle Record Certification
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              Tamper-evident certification and independent verification for vehicle titles, bill of sale records, and dealer transactions — without storing document contents.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center gap-4">
              <Link
                to="/auto/intake"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-opacity hover:opacity-90"
                style={{ background: '#FF6B35', color: '#FFFFFF' }}
              >
                Certify Vehicle Record
              </Link>
              <Link
                to="/verify"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] hover:border-[#2563EB] transition-colors whitespace-nowrap cursor-pointer"
              >
                Verify Certificate
              </Link>
              <Link
                to="/inquiry"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] hover:border-[#2563EB] transition-colors whitespace-nowrap cursor-pointer"
              >
                Inquiry
              </Link>
              <Link
                to="/certificate/automotive"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] hover:border-[#2563EB] transition-colors whitespace-nowrap cursor-pointer"
              >
                View Sample Certificate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Sections */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Vehicle Certification for Dealers, Buyers, and Sellers
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Secure VIN validation and title integrity for automotive professionals and individual transactions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <i className="ri-car-line text-xl md:text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                VIN Transfer Certification
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Create immutable proof of vehicle ownership transfers at the moment of sale with cryptographic verification.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <i className="ri-file-shield-line text-xl md:text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Title Integrity Validation
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Verify title authenticity and detect alterations with tamper-evident certification infrastructure.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <i className="ri-shield-check-line text-xl md:text-2xl text-slate-700"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Dealer Compliance Records
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Maintain permanent audit trails for bill of sale documents, odometer disclosures, and transaction records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 md:pb-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-base md:text-xl text-slate-600">
              Independent certification infrastructure without document storage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-white mx-auto mb-5 md:mb-6">
                1
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                SHA-256 Fingerprint Generation
              </h3>
              <p className="text-slate-600 text-sm md:text-base">
                Cryptographic hash created from vehicle record
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-white mx-auto mb-5 md:mb-6">
                2
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Timestamping
              </h3>
              <p className="text-slate-600 text-sm md:text-base">
                Precise timestamp recorded at moment of certification
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-white mx-auto mb-5 md:mb-6">
                3
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Polygon Anchoring
              </h3>
              <p className="text-slate-600 text-sm md:text-base">
                Hash anchored to public blockchain for immutability
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-white mx-auto mb-5 md:mb-6">
                4
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Unique Verification ID
              </h3>
              <p className="text-slate-600 text-sm md:text-base">
                Independent verification without document storage
              </p>
            </div>
          </div>

          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed text-center">
              <strong>No document storage:</strong> ProofDeed generates cryptographic proof only. Original documents remain under your control.
            </p>
          </div>

          <div className="mt-8 text-center">
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

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Automotive Certification Pricing
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Transparent pricing for vehicle record certification
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
            {/* Starter */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:border-slate-300 transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Starter
              </h3>
              <div className="mb-5 md:mb-6">
                <span className="text-3xl md:text-4xl font-bold text-slate-900">$19</span>
                <span className="text-slate-600 ml-2 text-sm md:text-base">per month</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-lg md:text-xl mt-0.5"></i>
                  <span className="text-slate-600 text-sm md:text-base">25 certifications/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-lg md:text-xl mt-0.5"></i>
                  <span className="text-slate-600 text-sm md:text-base">25MB per file</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-lg md:text-xl mt-0.5"></i>
                  <span className="text-slate-600 text-sm md:text-base">Single user</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-lg md:text-xl mt-0.5"></i>
                  <span className="text-slate-600 text-sm md:text-base">Dashboard access</span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="block w-full px-5 md:px-7 py-3 md:py-3.5 min-h-[48px] md:min-h-[56px] text-white text-sm md:text-base font-semibold rounded-lg hover:opacity-90 transition-opacity text-center whitespace-normal cursor-pointer"
                style={{ background: '#2563EB' }}
              >
                Starter Plan
              </Link>
            </div>

            {/* Professional – Highlighted */}
            <div className="relative bg-white rounded-xl p-6 md:p-8 transition-colors" style={{ border: '2px solid #2563EB' }}>
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-block px-4 py-1 text-xs font-bold text-white rounded-full whitespace-nowrap" style={{ background: '#2563EB' }}>
                  Preferred
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Professional
              </h3>
              <div className="mb-5 md:mb-6">
                <span className="text-3xl md:text-4xl font-bold text-slate-900">$39</span>
                <span className="text-slate-600 ml-2 text-sm md:text-base">per month</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-lg md:text-xl mt-0.5"></i>
                  <span className="text-slate-600 text-sm md:text-base">100 certifications/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-lg md:text-xl mt-0.5"></i>
                  <span className="text-slate-600 text-sm md:text-base">50MB per file</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-lg md:text-xl mt-0.5"></i>
                  <span className="text-slate-600 text-sm md:text-base">Multi-user access</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-lg md:text-xl mt-0.5"></i>
                  <span className="text-slate-600 text-sm md:text-base">Priority support</span>
                </li>
              </ul>
              <Link
                to="/signup"
                className="block w-full px-5 md:px-7 py-3 md:py-3.5 min-h-[48px] md:min-h-[56px] text-white text-sm md:text-base font-semibold rounded-lg hover:opacity-90 transition-opacity text-center whitespace-normal cursor-pointer"
                style={{ background: '#FF6B35' }}
              >
                Start Professional Plan
              </Link>
            </div>

            {/* Institutional */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:border-slate-300 transition-colors sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Institutional
              </h3>
              <div className="mb-5 md:mb-6">
                <span className="text-3xl md:text-4xl font-bold text-slate-900">Custom</span>
                <span className="text-slate-600 ml-2 text-sm md:text-base">pricing</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-lg md:text-xl mt-0.5"></i>
                  <span className="text-slate-600 text-sm md:text-base">Volume pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-lg md:text-xl mt-0.5"></i>
                  <span className="text-slate-600 text-sm md:text-base">API access</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-lg md:text-xl mt-0.5"></i>
                  <span className="text-slate-600 text-sm md:text-base">Batch processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-lg md:text-xl mt-0.5"></i>
                  <span className="text-slate-600 text-sm md:text-base">SLA</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-slate-700 text-lg md:text-xl mt-0.5"></i>
                  <span className="text-slate-600 text-sm md:text-base">Dedicated support</span>
                </li>
              </ul>
              <Link
                to="/contact?vertical=automotive"
                className="block w-full px-5 md:px-7 py-3 md:py-3.5 min-h-[48px] md:min-h-[56px] text-white text-sm md:text-base font-semibold rounded-lg hover:opacity-90 transition-opacity text-center whitespace-normal cursor-pointer"
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
