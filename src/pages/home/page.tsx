import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";

export default function Home() {

  const [index, setIndex] = useState(0);

  const scrollRight = () => {
    const el = document.getElementById("industry-scroll");
    if (!el) return;

    el.scrollBy({ left: 640, behavior: "smooth" });

    setIndex((prev) => (prev + 1) % 3);
  };

  return (

    <div className="min-h-screen bg-white text-black overflow-x-hidden">

      <Header />


      {/* HERO */}

      <section className="pt-20 pb-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            PROOFDEED
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Verifiable Digital Certification for Government Records,
            Real Estate Transactions, Legal & Title Workflows,
            Notarization Services, and Vehicle Transfers.
          </p>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="pb-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            How It Works
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">

            <Step title="Document" desc="Original record submitted" />
            <Arrow />
            <Step title="SHA-256 Hash" desc="Cryptographic fingerprint" />
            <Arrow />
            <Step title="Blockchain Anchor" desc="Immutable timestamp" />
            <Arrow />
            <Step title="ProofDeed Certificate" desc="Public verification" />

          </div>

        </div>

      </section>


      {/* TESLA STYLE INDUSTRY SLIDER */}

      <section className="pb-28">

        <div className="relative max-w-7xl mx-auto px-6">

          {/* RIGHT ARROW */}

          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur shadow-lg rounded-lg w-12 h-12 flex items-center justify-center"
          >
            ›
          </button>


          <div
            id="industry-scroll"
            className="flex gap-8 overflow-x-auto scroll-smooth pb-6"
          >

            <IndustryCard
              title="Government"
              desc="Public record integrity and fraud prevention infrastructure."
              image="https://images.unsplash.com/photo-1575320181282-9afab399332c"
              link="/government"
            />

            <IndustryCard
              title="Institutional"
              desc="Banking, legal documentation and real estate certification."
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              link="/document"
            />

            <IndustryCard
              title="Automotive"
              desc="VIN verification and dealer title authentication."
              image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
              link="/auto"
            />

          </div>


          {/* DOT NAVIGATION */}

          <div className="flex justify-center gap-2 mt-6">

            {[0,1,2].map((i)=>(
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  index === i ? "bg-black" : "bg-slate-300"
                }`}
              />
            ))}

          </div>

        </div>

      </section>


      {/* AFFILIATES */}

      <section className="bg-slate-100 py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Affiliate Program
          </h2>

          <p className="text-slate-600 mb-10">
            Revenue partnerships and API integrations for organizations
            introducing ProofDeed certification infrastructure.
          </p>

          <Link
            to="/affiliates"
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold"
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

      <div className="font-semibold mb-1">
        {title}
      </div>

      <div className="text-sm text-slate-500">
        {desc}
      </div>

    </div>

  );

}


function Arrow() {

  return (
    <div className="text-2xl text-slate-400 hidden md:block">
      →
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

    <div className="relative min-w-[620px] h-[420px] rounded-xl overflow-hidden shadow-xl">

      {/* IMAGE */}

      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* CONTENT */}

      <div className="relative h-full flex flex-col justify-between p-6 text-white">

        <div>

          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <p className="text-sm text-white/80 max-w-xs mt-1">
            {desc}
          </p>

        </div>

        <Link
          to={link}
          className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold w-fit"
        >
          Learn More
        </Link>

      </div>

    </div>

  );

}
