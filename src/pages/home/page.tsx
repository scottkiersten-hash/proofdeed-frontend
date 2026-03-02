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
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: 'linear-gradient(180deg, #0B1220 0%, #0E1A2F 100%)' }}
    >
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-20 md:pt-24">

        {/* Hero Text */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide text-[#EAF2FF]">
            PROOFDEED
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
            Verifiable Digital Certification for Government Records, Real Estate Transactions,
            Legal & Title Workflows, Notarization Services, and Vehicle Transfers.
          </p>
        </div>

        {/* VERTICAL PANELS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 min-h-[65vh]">

          {/* Government */}
          <Link to="/government" className="relative group overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Government%20building%20with%20digital%20security%20overlay%20blue%20technology%20lighting&width=800&height=1200&orientation=portrait"
              alt="Government Certification"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Government Certification
              </h3>
              <p className="text-slate-200 mb-6">
                Fraud prevention and public record integrity systems.
              </p>
              <div className="border border-white/60 py-3 rounded-lg text-white font-semibold">
                Access Government Solutions
              </div>
            </div>
          </Link>

          {/* Document */}
          <Link to="/document" className="relative group overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Legal%20office%20digital%20document%20certification%20technology%20blue%20teal%20lighting&width=800&height=1200&orientation=portrait"
              alt="Document Certification"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Document Certification
              </h3>
              <p className="text-slate-200 mb-6">
                Secure certification for banking, finance, legal and real estate.
              </p>
              <div className="border border-white/60 py-3 rounded-lg text-white font-semibold">
                View Certification Plans
              </div>
            </div>
          </Link>

          {/* Automotive */}
          <Link to="/auto" className="relative group overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Automotive%20VIN%20validation%20digital%20dashboard%20technology%20blue%20lighting&width=800&height=1200&orientation=portrait"
              alt="Automotive Certification"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Automotive Certification
              </h3>
              <p className="text-slate-200 mb-6">
                VIN validation, title authentication, dealer integrity.
              </p>
              <div className="border border-white/60 py-3 rounded-lg text-white font-semibold">
                Explore Automotive Solutions
              </div>
            </div>
          </Link>

          {/* Affiliates */}
          <Link to="/affiliates" className="relative group overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Business%20partnership%20handshake%20digital%20network%20technology%20blue%20lighting&width=800&height=1200&orientation=portrait"
              alt="Affiliates"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
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

      {/* TRUST SECTION */}
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
                Timestamped and traceable actions for compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
