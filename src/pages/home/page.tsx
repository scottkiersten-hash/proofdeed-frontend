import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";

export default function Home() {

  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollLeft = () => {
    const el = document.getElementById("industry-scroll");
    if (el) el.scrollBy({ left: -720, behavior: "smooth" });
  };

  const scrollRight = () => {
    const el = document.getElementById("industry-scroll");
    if (el) el.scrollBy({ left: 720, behavior: "smooth" });
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


      {/* STORY */}

      <section className="pb-12">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-slate-600 leading-relaxed">
            ProofDeed creates tamper-evident certification for critical
            records. Each certification generates a cryptographic fingerprint
            anchored to an immutable timestamp allowing anyone to independently
            verify authenticity without storing the original document.
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


      {/* INDUSTRIES */}

      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Industries
          </h2>

          <div className="relative">

            {/* LEFT ARROW */}

            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center"
            >
              ←
            </button>

            {/* RIGHT ARROW */}

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center"
            >
              →
            </button>

            <div
              id="industry-scroll"
              className="flex gap-8 overflow-x-auto scroll-smooth pb-6 px-12"
            >

              <IndustryCard
                title="Government Certification"
                desc="Fraud prevention and public record integrity systems for agencies and compliance infrastructure."
                image="https://images.unsplash.com/photo-1585241936939-be4099591252"
                link="/government"
              />

              <IndustryCard
                title="Institutional Certification"
                desc="Secure certification for banking, legal documentation and real estate transactions."
                image="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                link="/document"
              />

              <IndustryCard
                title="Automotive Certification"
                desc="VIN validation, title authentication and dealer verification systems."
                image="https://images.unsplash.com/photo-1542362567-b07e54358753"
                link="/auto"
              />

            </div>

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

    <div className="relative min-w-[720px] h-[460px] rounded-2xl overflow-hidden shadow-xl">

      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="relative h-full flex flex-col justify-between p-10 text-white">

        <div>

          <h3 className="text-4xl font-bold mb-3">
            {title}
          </h3>

          <p className="text-white/90 text-lg max-w-md">
            {desc}
          </p>

        </div>

        <Link
          to={link}
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold w-fit"
        >
          Learn More
        </Link>

      </div>

    </div>

  );

}
