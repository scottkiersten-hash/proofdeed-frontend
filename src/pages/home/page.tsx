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
      <section className="pt-24 pb-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            A New Standard for Record Verification
          </h1>

          <p className="text-slate-600 mt-6 text-lg">
            Secure digital certification for government records, legal documents,
            real estate transactions and vehicle transfers.
          </p>

          <p className="text-slate-500 mt-4 text-base">
            Every certification creates a{" "}
            <b>
              cryptographic fingerprint anchored to an immutable blockchain
              timestamp
            </b>
            , allowing anyone to independently verify authenticity without
            storing the original document.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold mb-4">
              How It Works
            </h2>

            <p className="text-slate-600 text-lg">
              Independent certification infrastructure without document storage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <ProcessBox
              number="1"
              title="SHA-256 Fingerprint"
              desc="Cryptographic hash created from document contents"
            />

            <ProcessBox
              number="2"
              title="Timestamping"
              desc="Precise timestamp recorded at moment of certification"
            />

            <ProcessBox
              number="3"
              title="Blockchain Anchoring"
              desc="Hash anchored to public blockchain for immutability"
            />

            <ProcessBox
              number="4"
              title="Verification ID"
              desc="Independent verification without document storage"
            />

          </div>

          <p className="text-center text-slate-500 mt-10 max-w-3xl mx-auto">
            No document storage: ProofDeed generates cryptographic proof only.
            Original documents remain under your control.
          </p>

        </div>
      </section>

      {/* BLOCKCHAIN CERTIFICATION */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Blockchain-Anchored Certification
          </h2>

          <h3 className="text-xl font-semibold mb-6">
            If It Can Be Disputed, It Hasn't Been Certified.
          </h3>

          <p className="text-slate-600 mb-6">
            Forged titles. Altered contracts. Disputed records. These aren't
            edge cases — they're daily realities for government agencies, legal
            professionals, and automotive networks.
          </p>

          <p className="text-slate-600">
            ProofDeed generates a cryptographic fingerprint of any document,
            anchors it permanently to the Polygon blockchain, and issues a
            tamper-evident certificate that anyone can independently verify —
            without ever storing your original file.
          </p>

        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold text-center mb-14">
            Why Organizations Trust ProofDeed
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <TrustItem
              title="SHA-256 Cryptographic Certification"
              desc="Industry-standard cryptographic hashing ensures document integrity and tamper-evident verification."
            />

            <TrustItem
              title="Multi-Layer Identity Validation"
              desc="Comprehensive verification protocols protect against fraud and ensure authentic record creation."
            />

            <TrustItem
              title="Complete Audit Logging"
              desc="Every action is logged with timestamps and IP tracking for full compliance and accountability."
            />

          </div>

        </div>
      </section>

      {/* INDUSTRY CAROUSEL */}
      <section className="pb-28 pt-24">
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
            {[0, 1, 2].map((i) => (
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

      {/* ORGANIZATION TRUST */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold mb-6">
            Built for Organizations That Cannot Afford Record Uncertainty
          </h2>

          <p className="text-slate-600">
            From government agencies and real estate professionals to title
            companies, legal teams, notaries, and automotive networks —
            ProofDeed provides verifiable digital certification that protects
            institutions and the public.
          </p>

        </div>
      </section>

      {/* AFFILIATES */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-semibold mb-6">
            Affiliate Program
          </h2>

          <p className="text-slate-600 mb-10">
            Revenue partnerships and API integrations for organizations
            introducing ProofDeed certification infrastructure.
          </p>

          <Link
            to="/affiliates"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold"
          >
            Become a Partner
          </Link>

        </div>
      </section>

      <Footer />
    </div>
  );
}

type IndustryProps = {
  title: string;
  desc: string;
  image: string;
  link: string;
};

function IndustryCard({ title, desc, image, link }: IndustryProps) {
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

type ProcessProps = {
  number: string;
  title: string;
  desc: string;
};

function ProcessBox({ number, title, desc }: ProcessProps) {
  return (
    <div className="bg-gradient-to-br from-purple-700 to-purple-900 text-white rounded-xl p-8 shadow-lg">
      <div className="text-purple-200 text-sm font-semibold mb-2">
        {number}
      </div>

      <h3 className="text-lg font-semibold mb-3">
        {title}
      </h3>

      <p className="text-purple-100 text-sm">
        {desc}
      </p>
    </div>
  );
}

type TrustProps = {
  title: string;
  desc: string;
};

function TrustItem({ title, desc }: TrustProps) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{desc}</p>
    </div>
  );
}
