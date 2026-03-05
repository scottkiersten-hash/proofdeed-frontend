import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Home() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: 'linear-gradient(180deg, #0B1220 0%, #0E1A2F 100%)' }}
    >
      <Header />

      {/* HERO (tight so you see panels without scrolling) */}
      <section className="relative pt-12 md:pt-14">
        <div className="max-w-5xl mx-auto px-6 pt-6 pb-5 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 text-[#EAF2FF] leading-none">
            PROOFDEED
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Verifiable Digital Certification for Government Records, Real Estate Transactions,
            Legal & Title Workflows, Notarization Services, and Vehicle Transfers.
          </p>
        </div>

        {/* PANELS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-[55vh] min-h-[420px]">
          <HeroPanel
            to="/government"
            image="https://readdy.ai/api/search-image?query=government%20building%20capitol%20digital%20security%20records%20verification%20blue%20technology%20background%20clean%20professional&width=1200&height=900&seq=home-gov-001&orientation=landscape"
            title="Government Certification"
            desc="Fraud prevention and public record integrity systems."
            cta="Access Government Solutions"
          />

          <HeroPanel
            to="/document"
            image="https://readdy.ai/api/search-image?query=professional%20office%20legal%20documents%20banking%20finance%20real%20estate%20certification%20infrastructure%20modern%20clean%20technology%20blue&width=1200&height=900&seq=home-doc-001&orientation=landscape"
            title="Institutional Certification"
            desc="Secure certification for banking, finance, legal and real estate."
            cta="View Certification Plans"
          />

          <HeroPanel
            to="/auto"
            image="https://readdy.ai/api/search-image?query=automotive%20dealership%20VIN%20validation%20vehicle%20title%20verification%20technology%20blue%20clean%20modern%20premium&width=1200&height=900&seq=home-auto-001&orientation=landscape"
            title="Automotive Certification"
            desc="VIN validation, title authentication, dealer integrity."
            cta="Explore Automotive Solutions"
          />

          <HeroPanel
            to="/affiliates"
            image="https://readdy.ai/api/search-image?query=business%20partnership%20handshake%20API%20integration%20network%20technology%20blue%20clean%20modern%20professional&width=1200&height=900&seq=home-aff-001&orientation=landscape"
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

function HeroPanel({
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
}) {
  return (
    <Link to={to} className="relative group overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

      <div className="relative h-full flex flex-col justify-end p-6 md:p-7 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-200 mb-4 text-sm md:text-base leading-snug">{desc}</p>

        <div className="border border-white/60 py-3 rounded-lg text-white font-semibold bg-white/0 group-hover:bg-white group-hover:text-black transition-all">
          {cta}
        </div>
      </div>
    </Link>
  );
}
