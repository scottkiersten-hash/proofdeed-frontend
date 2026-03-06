import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

import governmentImg from '../../assets/hero/government.jpg';
import documentImg from '../../assets/hero/document.jpg';
import autoImg from '../../assets/hero/auto.jpg';
import affiliatesImg from '../../assets/hero/affiliates.jpg';

export default function Home() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: 'linear-gradient(180deg, #0B1220 0%, #0E1A2F 100%)' }}
    >

      <Header />

      {/* HERO */}

      <section className="relative pt-16 md:pt-20 pb-12">

        <div className="max-w-5xl mx-auto px-6 pt-10 pb-10 text-center">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#EAF2FF]">
            PROOFDEED
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Verifiable Digital Certification for Government Records, Real Estate Transactions,
            Legal & Title Workflows, Notarization Services, and Vehicle Transfers.
          </p>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>

          <p className="text-slate-300 mb-12">
            Independent certification infrastructure without document storage
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-300">

            <div className="border border-white/10 rounded-lg p-6 w-56">
              <div className="text-white font-semibold mb-1">Document</div>
              <div className="text-sm text-slate-400">Original record submitted</div>
            </div>

            <div className="text-2xl text-slate-500">→</div>

            <div className="border border-white/10 rounded-lg p-6 w-56">
              <div className="text-white font-semibold mb-1">SHA-256 Hash</div>
              <div className="text-sm text-slate-400">Cryptographic fingerprint</div>
            </div>

            <div className="text-2xl text-slate-500">→</div>

            <div className="border border-white/10 rounded-lg p-6 w-56">
              <div className="text-white font-semibold mb-1">Blockchain Anchor</div>
              <div className="text-sm text-slate-400">Immutable timestamp</div>
            </div>

            <div className="text-2xl text-slate-500">→</div>

            <div className="border border-white/10 rounded-lg p-6 w-56">
              <div className="text-white font-semibold mb-1">ProofDeed Certificate</div>
              <div className="text-sm text-slate-400">Public verification</div>
            </div>

          </div>

        </div>

      </section>


      {/* INDUSTRY PANELS */}

      <section className="pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-h-[55vh]">

          <HeroPanel
            to="/government"
            image={governmentImg}
            title="Government Certification"
            desc="Fraud prevention and public record integrity systems."
            cta="Access Government Solutions"
          />

          <HeroPanel
            to="/document"
            image={documentImg}
            title="Institutional Certification"
            desc="Secure certification for banking, finance, legal and real estate."
            cta="View Certification Plans"
          />

          <HeroPanel
            to="/auto"
            image={autoImg}
            title="Automotive Certification"
            desc="VIN validation, title authentication, dealer integrity."
            cta="Explore Automotive Solutions"
          />

        </div>

      </section>


      {/* AFFILIATE SECTION */}

      <section className="py-20 bg-[#0E1A2F]">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Affiliate Program
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto mb-10">
            Revenue partnerships and API integration programs for organizations
            introducing ProofDeed certification infrastructure.
          </p>

          <Link
            to="/affiliates"
            className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-lg hover:bg-slate-200 transition"
          >
            Become a Partner
          </Link>

        </div>

      </section>


      <Footer />

    </div>
  );
}


function HeroPanel({ to, image, title, desc, cta }) {

  return (

    <Link
      to={to}
      className="relative group overflow-hidden"
    >

      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      <div className="relative h-full flex flex-col justify-end p-8 text-center">

        <h3 className="text-2xl font-bold text-white mb-3">
          {title}
        </h3>

        <p className="text-slate-200 mb-6">
          {desc}
        </p>

        <div className="border border-white/60 py-3 rounded-lg text-white font-semibold group-hover:bg-white group-hover:text-black transition-all">
          {cta}
        </div>

      </div>

    </Link>

  );
}
