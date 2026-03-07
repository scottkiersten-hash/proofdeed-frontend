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

    el.scrollBy({ left: -620, behavior: "smooth" });
    setIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const scrollRight = () => {
    const el = document.getElementById("industry-scroll");
    if (!el) return;

    el.scrollBy({ left: 620, behavior: "smooth" });
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

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-10 text-slate-700">
            How It Works
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <Step title="Document" desc="Original record submitted" />
            <Arrow />
            <Step title="SHA-256 Hash" desc="Cryptographic fingerprint" />
            <Arrow />
            <Step title="Blockchain Anchor" desc="Immutable timestamp" />
            <Arrow />
            <Step
              title="ProofDeed Certificate"
              desc="Public verification"
            />
          </div>
        </div>
      </section>

      {/* INDUSTRY CAROUSEL */}

      <section className="pb-28">
        <div className="relative max-w-7xl mx-auto px-6">
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
            className="flex gap-8 overflow-x-hidden scroll-smooth"
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

type StepProps = {
  title: string;
  desc: string;
};

function Step({ title, desc }: StepProps) {
  return (
    <div className="border border-slate-200 rounded-lg p-6 w-56 bg-white shadow-sm">
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-sm text-slate-500">{desc}</div>
    </div>
  );
}

function Arrow() {
  return <div className="text-2xl text-slate-400 hidden md:block">→</div>;
}

type IndustryProps = {
  title: string;
  desc: string;
  image: string;
  link: string;
};

function IndustryCard({ title, desc, image, link }: IndustryProps) {
  return (
    <div className="relative min-w-[620px] h-[420px] rounded-xl overflow-hidden shadow-lg">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover brightness-105"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent" />

      <div className="relative h-full flex flex-col justify-between p-6 text-white">
        <div>
          <h3 className="text-base font-semibold">{title}</h3>

          <p className="text-sm text-white/90 mt-1 max-w-xs">
            {desc}
          </p>
        </div>

        <Link
          to={link}
          className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold w-fit"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
