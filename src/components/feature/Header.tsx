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
      <section className="relative pt-10 md:pt-12 pb-4">

        <div className="max-w-5xl mx-auto px-6 pt-6 pb-6 text-center">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#EAF2FF]">
            PROOFDEED
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Verifiable Digital Certification for Government Records, Real Estate Transactions,
            Legal & Title Workflows, Notarization Services, and Vehicle Transfers.
          </p>

        </div>

        {/* PANELS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 min-h-[55vh]">

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

          <HeroPanel
            to="/affiliates"
            image={affiliatesImg}
            title="Affiliates"
            desc="Revenue partnerships and API integration programs."
            cta="Become a Partner"
          />

        </div>

      </section>

      <Footer />
    </div>
  );
}

function HeroPanel({ to, image, title, desc, cta }) {
  to,
  image,
  title,
  desc,
  cta,
}: {
  to: string;
  image: string;
  title: string;
  desc: string;
  cta: string;
})

  return (
    <Link to={to} className="relative group overflow-hidden">

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
