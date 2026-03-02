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

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 md:pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide text-[#EAF2FF]">
            PROOFDEED
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
            Enterprise-Grade Digital Integrity Infrastructure for Institutions,
            Regulated Transactions, Public Records, and High-Value Asset Transfers.
          </p>
        </div>

        {/* Four Vertical Panels */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 min-h-[50vh] md:min-h-[70vh]">

  {/* Government */}
  <Link to="/government" className="relative group overflow-hidden cursor-pointer">
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
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Government Record Systems</h3>
        <p className="text-sm sm:text-base text-slate-200 mb-4 md:mb-6 leading-relaxed">
          Fraud prevention and public record integrity.
        </p>
        <button className="w-full px-4 sm:px-7 py-3 md:py-4 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/8 transition-colors">
          Access Government Solutions
        </button>
      </div>
    </div>
  </Link>

  {/* Legal & Title */}
  <Link to="/legal" className="relative group overflow-hidden cursor-pointer">
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
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Document Certification</h3>
        <p className="text-sm sm:text-base text-slate-200 mb-4 md:mb-6 leading-relaxed">
          Secure certification for real estate, title companies, attorneys, and closing professionals.
        </p>
        <button className="w-full px-4 sm:px-7 py-3 md:py-4 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/8 transition-colors">
          View Document Certification Plans
        </button>
      </div>
    </div>
  </Link>

  {/* Automotive */}
  <Link to="/auto" className="relative group overflow-hidden cursor-pointer">
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
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Automotive Integrity Systems</h3>
        <p className="text-sm sm:text-base text-slate-200 mb-4 md:mb-6 leading-relaxed">
          VIN validation, title authentication, dealer certification.
        </p>
        <button className="w-full px-4 sm:px-7 py-3 md:py-4 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/8 transition-colors">
          Explore Automotive Solutions
        </button>
      </div>
    </div>
  </Link>

  {/* Affiliates */}
  <Link to="/affiliates" className="relative group overflow-hidden cursor-pointer">
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
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Institutional Affiliates</h3>
        <p className="text-sm sm:text-base text-slate-200 mb-4 md:mb-6 leading-relaxed">
          Revenue-sharing and API integration partnerships.
        </p>
        <button className="w-full px-4 sm:px-7 py-3 md:py-4 bg-transparent border border-white/60 text-white font-semibold rounded-lg hover:bg-white/8 transition-colors">
          Become an Institutional Partner
        </button>
      </div>
    </div>
  </Link>

</div>
            </div>
          </Link>

          {/* Institutional */}
          <Link to="/document" className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
            <div className="relative h-full flex flex-col justify-end p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Institutional Certification
              </h3>
              <p className="text-slate-200 mb-6">
                Secure certification for banking, finance, legal, real estate,
                title, insurance, and regulated transactions.
              </p>
              <div className="border border-white/60 py-3 rounded-lg text-white font-semibold">
                View Certification Plans
              </div>
            </div>
          </Link>

          {/* Automotive */}
          <Link to="/auto" className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
            <div className="relative h-full flex flex-col justify-end p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Automotive Certification
              </h3>
              <p className="text-slate-200 mb-6">
                VIN validation, title authentication, dealer and transfer integrity.
              </p>
              <div className="border border-white/60 py-3 rounded-lg text-white font-semibold">
                Explore Automotive Solutions
              </div>
            </div>
          </Link>

          {/* Affiliates */}
          <Link to="/affiliates" className="relative group overflow-hidden">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
            <div className="relative h-full flex flex-col justify-end p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Affiliates
              </h3>
              <p className="text-slate-200 mb-6">
                Revenue partnerships and API integration programs.
              </p>
              <div className="border border-white/60 py-3 rounded-lg text-white font-semibold">
                Become a Partner
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-16">
            Why Institutions Trust ProofDeed
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                SHA-256 Cryptographic Certification
              </h3>
              <p className="text-slate-300">
                Industry-standard hashing ensures tamper-evident record validation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Multi-Layer Identity Validation
              </h3>
              <p className="text-slate-300">
                Institutional-grade verification protocols prevent fraud.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Complete Audit Logging
              </h3>
              <p className="text-slate-300">
                Timestamped and traceable actions for compliance and accountability.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
