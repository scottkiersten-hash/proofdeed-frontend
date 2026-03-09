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

      <section className="pt-28 pb-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            If It Can Be Disputed, It Hasn't Been Certified.
          </h1>

          <p className="text-sm text-slate-600 mt-6 max-w-3xl mx-auto leading-relaxed">

            Forged titles. Altered contracts. Disputed records. These aren't edge
            cases — they're daily realities for government agencies, legal
            professionals, and automotive networks.

          </p>

          <p className="text-sm text-slate-600 mt-4 max-w-3xl mx-auto leading-relaxed">

            ProofDeed generates a cryptographic fingerprint of any document,
            anchors it permanently to the Polygon blockchain, and issues a
            tamper-evident certificate that anyone can independently verify —
            without ever storing your original file.

          </p>

        </div>

      </section>


      {/* INFORMATION GRID */}

      <section className="pb-24">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">


          {/* HOW IT WORKS */}

          <InfoBox
            title="How Certification Works"
            icon="🔐"
            gradient="from-purple-600 via-purple-500 to-indigo-500"
          >

            <div className="flex items-center gap-4 text-xs flex-wrap">

              <MiniStep
                number="1"
                title="SHA-256 Fingerprint"
                desc="Cryptographic hash created from vehicle record"
              />

              <Arrow/>

              <MiniStep
                number="2"
                title="Timestamping"
                desc="Precise timestamp recorded at moment of certification"
              />

              <Arrow/>

              <MiniStep
                number="3"
                title="Blockchain Anchoring"
                desc="Hash anchored to public blockchain for immutability"
              />

              <Arrow/>

              <MiniStep
                number="4"
                title="Verification ID"
                desc="Independent verification without document storage"
              />

            </div>

          </InfoBox>



          {/* WHAT PROOFDEED DOES */}

          <InfoBox
            title="Tamper-Evident Certification"
            icon="🧾"
            gradient="from-indigo-600 via-purple-500 to-purple-600"
          >

            <p className="text-sm leading-relaxed">

              Secure digital certification for government records, legal
              documents, real estate transactions and vehicle transfers.

            </p>

            <p className="text-sm leading-relaxed mt-4">

              Every certification creates a cryptographic fingerprint anchored
              to an immutable blockchain timestamp — allowing anyone to verify
              authenticity without storing the original document.

            </p>

          </InfoBox>



          {/* WHY ORGANIZATIONS TRUST */}

          <InfoBox
            title="Why Organizations Trust ProofDeed"
            icon="🛡"
            gradient="from-purple-600 via-indigo-500 to-blue-600"
          >

            <ul className="text-sm space-y-4">

              <li>
                <b>SHA-256 Cryptographic Certification</b><br/>
                Industry-standard hashing ensures document integrity and
                tamper-evident verification.
              </li>

              <li>
                <b>Multi-Layer Identity Validation</b><br/>
                Verification protocols protect against fraud and ensure
                authentic record creation.
              </li>

              <li>
                <b>Complete Audit Logging</b><br/>
                Timestamp and IP tracking provide full accountability.
              </li>

            </ul>

          </InfoBox>



          {/* NO DOCUMENT STORAGE */}

          <InfoBox
            title="No Document Storage"
            icon="🏛"
            gradient="from-blue-600 via-purple-500 to-indigo-600"
          >

            <p className="text-sm leading-relaxed">

              ProofDeed generates cryptographic proof only. Original documents
              remain under your control.

            </p>

            <p className="text-sm leading-relaxed mt-4">

              Anyone with the verification ID can independently confirm the
              integrity of the record without accessing or storing the
              underlying document.

            </p>

          </InfoBox>


        </div>

      </section>



      {/* INDUSTRY VERTICALS */}

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



      {/* AFFILIATE */}

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



function InfoBox({title, icon, gradient, children}){

  return(

    <div className={`rounded-xl p-8 border border-white/30 bg-gradient-to-br ${gradient} text-white shadow-lg backdrop-blur-md hover:scale-[1.02] hover:shadow-2xl transition-all duration-300`}>

      <div className="flex items-center gap-2 mb-6 text-lg font-semibold">

        <span>{icon}</span>
        {title}

      </div>

      {children}

    </div>

  )

}



function MiniStep({number,title,desc}){

  return(

    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-md p-4 text-center min-w-[140px]">

      <div className="text-xs font-bold mb-1">{number}</div>
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-xs opacity-80 mt-1">{desc}</div>

    </div>

  )

}



function Arrow(){
  return <div className="text-lg opacity-80">→</div>
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
