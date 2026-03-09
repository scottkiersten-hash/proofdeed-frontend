import { Link } from "react-router-dom";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";

import governmentImg from "../../assets/hero/government.jpg";
import documentImg from "../../assets/hero/document.jpg";
import autoImg from "../../assets/hero/auto.jpg";

export default function Home() {

  const scrollAmount = 908;

  const scrollLeft = () => {
    const el = document.getElementById("industry-scroll");
    if (!el) return;
    el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    const el = document.getElementById("industry-scroll");
    if (!el) return;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">

      <Header />

      {/* HERO */}

      <section className="pt-28 pb-16 relative">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 opacity-60"/>

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <h1 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            A New Standard for Record Verification
          </h1>

          <p className="mt-4 text-xs uppercase tracking-wider text-slate-500">
            Blockchain-Anchored Document Certification
          </p>

          {/* TRUST CHIPS */}

          <div className="flex justify-center gap-3 mt-8 flex-wrap">

            <Chip label="SHA-256 Cryptography"/>
            <Chip label="Polygon Blockchain"/>
            <Chip label="Immutable Timestamp"/>
            <Chip label="Independent Verification"/>

          </div>

        </div>

      </section>


      {/* INFO GRID */}

      <section className="pb-24">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          <InfoBox
            title="How It Works"
            icon="🔐"
            gradient="from-purple-600 via-purple-500 to-indigo-500"
          >

            <div className="flex items-center gap-3 text-xs">

              <MiniStep number="1" title="SHA-256" desc="Fingerprint"/>
              <Arrow/>
              <MiniStep number="2" title="Timestamp" desc="Certification"/>
              <Arrow/>
              <MiniStep number="3" title="Blockchain" desc="Polygon"/>
              <Arrow/>
              <MiniStep number="4" title="Verify ID" desc="Validation"/>

            </div>

          </InfoBox>


          <InfoBox
            title="Secure Digital Certification"
            icon="🧾"
            gradient="from-indigo-600 via-purple-500 to-purple-600"
          >

            <p className="text-xs leading-relaxed">

              Secure digital certification for government records, legal
              documents, real estate transactions and vehicle transfers.

            </p>

            <p className="text-xs leading-relaxed mt-3">

              Every certification creates a cryptographic fingerprint anchored
              to an immutable blockchain timestamp, allowing anyone to
              independently verify authenticity without storing the original
              document.

            </p>

          </InfoBox>


          <InfoBox
            title="Why Organizations Trust ProofDeed"
            icon="🛡"
            gradient="from-purple-600 via-indigo-500 to-blue-600"
          >

            <ul className="text-xs space-y-3">

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

          </InfoBox>


          <InfoBox
            title="Built for Organizations That Cannot Afford Record Uncertainty"
            icon="🏛"
            gradient="from-blue-600 via-purple-500 to-indigo-600"
          >

            <p className="text-xs leading-relaxed mb-3">

              From government agencies and real estate professionals to title
              companies, legal teams, notaries and automotive networks —
              ProofDeed provides verifiable digital certification that protects
              institutions and the public.

            </p>

            <p className="text-xs text-purple-100">

              No document storage: ProofDeed generates cryptographic proof only.
              Original documents remain under your control.

            </p>

          </InfoBox>

        </div>

      </section>


      {/* INDUSTRY SECTION */}

      <section className="pb-28">

        <div className="max-w-6xl mx-auto px-6 mb-10 text-center">

          <h2 className="text-lg font-semibold text-slate-700">
            Certification Infrastructure for Critical Records
          </h2>

        </div>

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
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth"
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

        </div>

      </section>


      {/* AFFILIATE CTA */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white p-12 text-center shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
              Affiliate Program
            </h2>

            <p className="text-sm opacity-90 mb-8">

              Revenue partnerships and API integrations for organizations
              introducing ProofDeed certification infrastructure.

            </p>

            <Link
              to="/affiliates"
              className="bg-white text-purple-700 px-6 py-3 rounded-md text-sm font-semibold"
            >
              Become a Partner
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}


/* COMPONENTS */


function Chip({label}){

  return(
    <div className="px-3 py-1 text-xs bg-white border border-slate-200 rounded-full shadow-sm">
      {label}
    </div>
  )

}


function InfoBox({title, icon, gradient, children}){

  return(

    <div className={`rounded-xl p-6 border border-white/30 bg-gradient-to-br ${gradient} text-white shadow-lg backdrop-blur-md hover:scale-[1.02] hover:shadow-2xl transition-all duration-300`}>

      <div className="flex items-center gap-2 mb-4 text-sm font-semibold">

        <span>{icon}</span>
        {title}

      </div>

      {children}

    </div>

  )

}


function MiniStep({number,title,desc}){

  return(

    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-md p-2 text-center min-w-[80px]">

      <div className="text-[10px] font-bold">{number}</div>
      <div className="text-[10px] font-semibold">{title}</div>
      <div className="text-[9px] opacity-80">{desc}</div>

    </div>

  )

}


function Arrow(){

  return <div className="text-xs opacity-80">→</div>

}


function IndustryCard({title,desc,image,link}){

  return(

    <div className="relative min-w-[900px] h-[620px] snap-center rounded-2xl overflow-hidden shadow-lg group">

      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent"/>

      <div className="relative h-full flex flex-col justify-between p-10 text-white">

        <div>

          <h3 className="text-2xl font-semibold">
            {title}
          </h3>

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

  )

}
