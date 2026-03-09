import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";

import governmentImg from "../../assets/hero/government.jpg";
import documentImg from "../../assets/hero/document.jpg";
import autoImg from "../../assets/hero/auto.jpg";

export default function Home() {
  const [index, setIndex] = useState(0);

  const scrollLeft = () => {
    const el = document.getElementById("industry-scroll");
    if (!el) return;

    el.scrollBy({ left: -940, behavior: "smooth" });
    setIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const scrollRight = () => {
    const el = document.getElementById("industry-scroll");
    if (!el) return;

    el.scrollBy({ left: 940, behavior: "smooth" });
    setIndex((prev) => (prev + 1) % 3);
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="pt-24 pb-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            A New Standard for Record Verification
          </h1>
        </div>
      </section>

      {/* INFORMATION GRID */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          {/* BOX 1 */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">

            <h3 className="text-sm font-semibold mb-4 text-purple-800">
              How It Works
            </h3>

            <div className="flex items-center gap-3 text-xs">

              <MiniStep title="SHA-256" desc="Cryptographic fingerprint" />
              <Arrow />
              <MiniStep title="Timestamp" desc="Certification moment" />
              <Arrow />
              <MiniStep title="Blockchain" desc="Polygon anchor" />
              <Arrow />
              <MiniStep title="Verify ID" desc="Independent validation" />

            </div>

          </div>

          {/* BOX 2 */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">

            <h3 className="text-sm font-semibold mb-3 text-purple-800">
              Secure Digital Certification
            </h3>

            <p className="text-xs leading-relaxed text-slate-700">
              Secure digital certification for government records, legal
              documents, real estate transactions and vehicle transfers.
            </p>

            <p className="text-xs leading-relaxed text-slate-700 mt-3">
              Every certification creates a cryptographic fingerprint anchored
              to an immutable blockchain timestamp, allowing anyone to
              independently verify authenticity without storing the original
              document.
            </p>

          </div>

          {/* BOX 3 */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">

            <h3 className="text-sm font-semibold mb-3 text-purple-800">
              Why Organizations Trust ProofDeed
            </h3>

            <ul className="text-xs space-y-3 text-slate-700">

              <li>
                <b>SHA-256 Cryptographic Certification</b><br/>
                Industry-standard hashing ensures tamper-evident verification.
              </li>

              <li>
                <b>Multi-Layer Identity Validation</b><br/>
                Verification protocols protect against fraud.
              </li>

              <li>
                <b>Complete Audit Logging</b><br/>
                Timestamp and IP logging for compliance.
              </li>

            </ul>

          </div>

          {/* BOX 4 */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">

            <h3 className="text-sm font-semibold mb-3 text-purple-800">
              Built for Organizations That Cannot Afford Record Uncertainty
            </h3>

            <p className="text-xs text-slate-700 mb-3 leading-relaxed">
              From government agencies and real estate professionals to title
              companies, legal teams, notaries and automotive networks —
              ProofDeed provides verifiable digital certification that protects
              institutions and the public.
            </p>

            <p className="text-xs text-purple-700">
              No document storage: ProofDeed generates cryptographic proof only.
              Original documents remain under your control.
            </p>

          </div>

        </div>
      </section>

      {/* INDUSTRY CAROUSEL */}
      <section className="pb-28">
        <div className="relative max-w-[1600px] mx-auto px-6">

          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow rounded-lg w-10 h-10 flex items-center justify-center"
          >
            ‹
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow rounded-lg w-10 h-10 flex items-center justify-center"
          >
            ›
          </button>

          <div
            id="industry-scroll"
            className="flex gap-12 overflow-x-hidden scroll-smooth"
          >

            <IndustryCard
              title="Government"
              desc="Public record integrity and fraud prevention infrastructure."
              image={governmentImg}
              link="/government"
            />

            <IndustryCard
              title="Institutional"
              desc="Banking, legal documentation and real estate certification."
              image={documentImg}
              link="/document"
            />

            <IndustryCard
              title="Automotive"
              desc="VIN verification and dealer title authentication."
              image={autoImg}
              link="/auto"
            />

          </div>

          <div className="flex justify-center gap-2 mt-6">
            {[0,1,2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  index === i ? "bg-blue-600" : "bg-slate-300"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* AFFILIATES */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-xl font-semibold mb-6">
            Affiliate Program
          </h2>

          <p className="text-slate-600 mb-8 text-sm">
            Revenue partnerships and API integrations for organizations
            introducing ProofDeed certification infrastructure.
          </p>

          <Link
            to="/affiliates"
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-semibold"
          >
            Become a Partner
          </Link>

        </div>
      </section>

      <Footer />
    </div>
  );
}

function MiniStep({ title, desc }) {
  return (
    <div className="bg-white border border-purple-200 rounded p-2 text-center min-w-[75px]">
      <div className="text-[10px] font-semibold text-purple-700">{title}</div>
      <div className="text-[9px] text-slate-600">{desc}</div>
    </div>
  );
}

function Arrow() {
  return <div className="text-xs text-purple-400">→</div>;
}

function IndustryCard({ title, desc, image, link }) {
  return (
    <div className="relative min-w-[900px] h-[560px] rounded-2xl overflow-hidden shadow-lg">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover brightness-105"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent" />

      <div className="relative h-full flex flex-col justify-between p-10 text-white">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>

          <p className="text-lg text-white/90 mt-3 max-w-md">
            {desc}
          </p>
        </div>

        <Link
          to={link}
          className="bg-blue-600 text-white px-5 py-2 rounded text-sm font-semibold w-fit"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
