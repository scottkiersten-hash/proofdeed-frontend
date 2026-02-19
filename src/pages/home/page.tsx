import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: 'linear-gradient(180deg, #0B1220 0%, #0E1A2F 100%)' }}>
      <Header />

      {/* Hero Section with Vertical Panels */}
      <section className="relative min-h-screen pt-20 md:pt-24">
        {/* Hero Text */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-10 md:pb-16 text-center">
          <h1 className="inline-block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-8 leading-tight tracking-[0.04em] sm:tracking-[0.08em] pb-2" style={{ color: '#EAF2FF', textShadow: '0 0 20px rgba(47,107,255,0.25)' }}>
            PROOFDEED
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto mt-4 sm:mt-8 px-2">
            Verifiable Digital Certification for Government Records, Real Estate Transactions, Legal & Title Workflows, Notarization Services, and Vehicle Transfers.
          </p>
        </div>

        {/* Four Vertical Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 min-h-[50vh] md:min-h-[70vh]">
          {/* Government */}
          <Link 
            to="/government" 
            className="relative group overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0">
              <img 
                src="https://readdy.ai/api/search-image?query=Government%20building%20with%20digital%20security%20overlay%2C%20futuristic%20public%20records%20system%20with%20glowing%20data%20streams%20and%20secure%20network%20connections%2C%20professional%20institutional%20technology%20aesthetic%20with%20blue%20and%20cyan%20lighting%2C%20high-tech%20government%20infrastructure%20visualization%20showing%20data%20protection%20and%20fraud%20prevention%20systems&width=800&height=1200&seq=gov-vertical-001&orientation=portrait"
                alt="Government Record Systems"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            </div>
            <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 min-h-[50vh] md:min-h-[70vh]">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 whitespace-normal">Government Record Systems</h3>
                <p className="text-sm sm:text-base text-slate-200 mb-4 md:mb-6 leading-relaxed whitespace-normal">
                  Fraud prevention and public record integrity.
                </p>
                <button className="w-full px-4 sm:px-7 py-3 md:py-4 min-h-[48px] md:min-h-[56px] bg-transparent border border-white/60 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white/8 hover:border-white transition-colors whitespace-normal cursor-pointer">
                  Access Government Solutions
                </button>
              </div>
            </div>
          </Link>

          {/* Legal & Title */}
          <Link 
            to="/legal" 
            className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            <div className="absolute inset-0">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20law%20office%20with%20digital%20document%20certification%20system%2C%20legal%20professionals%20using%20secure%20title%20verification%20technology%2C%20real%20estate%20closing%20with%20blockchain%20authentication%2C%20professional%20legal%20tech%20environment%20with%20teal%20and%20blue%20accent%20lighting%2C%20high-tech%20notarization%20and%20property%20record%20systems&width=800&height=1200&seq=legal-vertical-001&orientation=portrait"
                alt="Document Certification"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            </div>
            <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 min-h-[50vh] md:min-h-[70vh]">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 whitespace-normal">Document Certification</h3>
                <p className="text-sm sm:text-base text-slate-200 mb-4 md:mb-6 leading-relaxed whitespace-normal">
                  Secure certification for real estate, title companies, attorneys, and closing professionals.
                </p>
                <button className="w-full px-4 sm:px-7 py-3 md:py-4 min-h-[48px] md:min-h-[56px] bg-transparent border border-white/60 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white/8 hover:border-white transition-colors whitespace-normal cursor-pointer">
                  View Document Certification Plans
                </button>
              </div>
            </div>
          </Link>

          {/* Automotive */}
          <Link 
            to="/auto" 
            className="relative group overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20automotive%20dealership%20with%20digital%20VIN%20validation%20system%2C%20car%20title%20verification%20technology%20with%20holographic%20displays%2C%20vehicle%20authentication%20and%20dealer%20certification%20infrastructure%2C%20professional%20automotive%20tech%20environment%20with%20blue%20and%20cyan%20lighting%2C%20high-tech%20vehicle%20transfer%20and%20title%20integrity%20systems&width=800&height=1200&seq=auto-vertical-001&orientation=portrait"
                alt="Automotive Integrity Systems"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            </div>
            <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 min-h-[50vh] md:min-h-[70vh]">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 whitespace-normal">Automotive Integrity Systems</h3>
                <p className="text-sm sm:text-base text-slate-200 mb-4 md:mb-6 leading-relaxed whitespace-normal">
                  VIN validation, title authentication, dealer certification.
                </p>
                <button className="w-full px-4 sm:px-7 py-3 md:py-4 min-h-[48px] md:min-h-[56px] bg-transparent border border-white/60 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white/8 hover:border-white transition-colors whitespace-normal cursor-pointer">
                  Explore Automotive Solutions
                </button>
              </div>
            </div>
          </Link>

          {/* Affiliates */}
          <Link 
            to="/affiliates" 
            className="relative group overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20partnership%20handshake%20with%20digital%20network%20connections%2C%20institutional%20collaboration%20with%20glowing%20data%20streams%20and%20API%20integration%20visualization%2C%20corporate%20partnership%20technology%20with%20teal%20and%20blue%20lighting%2C%20high-tech%20revenue%20sharing%20and%20affiliate%20network%20systems%20showing%20connected%20organizations&width=800&height=1200&seq=affiliate-vertical-001&orientation=portrait"
                alt="Institutional Affiliates"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            </div>
            <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 min-h-[50vh] md:min-h-[70vh]">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 whitespace-normal">Institutional Affiliates</h3>
                <p className="text-sm sm:text-base text-slate-200 mb-4 md:mb-6 leading-relaxed whitespace-normal">
                  Revenue-sharing and API integration partnerships.
                </p>
                <button className="w-full px-4 sm:px-7 py-3 md:py-4 min-h-[48px] md:min-h-[56px] bg-transparent border border-white/60 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white/8 hover:border-white transition-colors whitespace-normal cursor-pointer">
                  Become an Institutional Partner
                </button>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-10 md:mb-16">
            Why Organizations Trust ProofDeed
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            <div className="bg-slate-800/50 rounded-xl p-6 md:p-8 border border-slate-700/50">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-700/50 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <i className="ri-fingerprint-line text-2xl md:text-3xl text-slate-300"></i>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">SHA-256 Cryptographic Certification</h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Industry-standard cryptographic hashing ensures document integrity and tamper-evident verification.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 md:p-8 border border-slate-700/50">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-700/50 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <i className="ri-shield-check-line text-2xl md:text-3xl text-slate-300"></i>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Multi-Layer Identity Validation</h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Comprehensive verification protocols protect against fraud and ensure authentic record creation.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 md:p-8 border border-slate-700/50 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-700/50 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                <i className="ri-file-list-3-line text-2xl md:text-3xl text-slate-300"></i>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Complete Audit Logging</h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Every action is logged with timestamps and IP tracking for full compliance and accountability.
              </p>
            </div>
          </div>

          {/* Organizations Section */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Built for Organizations That Cannot Afford Record Uncertainty
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8 md:mb-10 px-2">
              From government agencies and real estate professionals to title companies, legal teams, notaries, and automotive networks — ProofDeed provides verifiable digital certification that protects institutions and the public.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
