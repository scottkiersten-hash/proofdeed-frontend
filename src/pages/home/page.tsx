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

      <section className="pt-24 pb-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
            If It Can Be Disputed, It Hasn't Been Certified.
          </h1>

        </div>

      </section>


      {/* INFORMATION GRID */}

      <section className="pb-24">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">


          {/* BOX 1 */}

          <div className="bg-sky-100 rounded-xl p-8 shadow-sm">

            <h3 className="text-lg font-semibold mb-6 text-slate-900">
              How Certification Works
            </h3>

            <ProcessStep
              number="1"
              title="SHA-256 Fingerprint"
              desc="Cryptographic hash created from vehicle record"
            />

            <Arrow/>

            <ProcessStep
              number="2"
              title="Timestamping"
              desc="Precise timestamp recorded at moment of certification"
            />

            <Arrow/>

            <ProcessStep
              number="3"
              title="Blockchain Anchoring"
              desc="Hash anchored to public blockchain for immutability"
            />

            <Arrow/>

            <ProcessStep
              number="4"
              title="Verification ID"
              desc="Independent verification without document storage"
            />

          </div>



          {/* BOX 2 */}

          <div className="bg-sky-200 rounded-xl p-8 shadow-sm">

            <h3 className="text-lg font-semibold mb-6 text-slate-900">
              Tamper-Evident Certification
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed">

              Secure digital certification for government records, legal
              documents, real estate transactions and vehicle transfers.

            </p>

            <p className="text-sm text-slate-700 leading-relaxed mt-4">

              Every certification creates a cryptographic fingerprint anchored
              to an immutable blockchain timestamp — allowing anyone to verify
              authenticity without storing the original document.

            </p>

          </div>



          {/* BOX 3 */}

          <div className="bg-sky-300 rounded-xl p-8 shadow-sm">

            <h3 className="text-lg font-semibold mb-6 text-slate-900">
              Why Organizations Trust ProofDeed
            </h3>

            <ul className="text-sm space-y-4 text-slate-700">

              <li>
                <b>SHA-256 Cryptographic Certification</b><br/>
                Industry-standard cryptographic hashing ensures document
                integrity and tamper-evident verification.
              </li>

              <li>
                <b>Multi-Layer Identity Validation</b><br/>
                Comprehensive verification protocols protect against fraud and
                ensure authentic record creation.
              </li>

              <li>
                <b>Complete Audit Logging</b><br/>
                Every action is logged with timestamps and IP tracking for full
                compliance and accountability.
              </li>

            </ul>

          </div>



          {/* BOX 4 */}

          <div className="bg-sky-400 rounded-xl p-8 shadow-sm text-slate-900">

            <h3 className="text-lg font-semibold mb-6">
              Built for Organizations That Cannot Afford Record Uncertainty
            </h3>

            <p className="text-sm leading-relaxed">

              Forged titles. Altered contracts. Disputed records. These aren't
              edge cases — they're daily realities for government agencies,
              legal professionals, and automotive networks.

            </p>

            <p className="text-sm leading-relaxed mt-4">

              ProofDeed generates a cryptographic fingerprint of any document,
              anchors it permanently to the Polygon blockchain, and issues a
              tamper-evident certificate that anyone can independently verify —
              without ever storing your original file.

            </p>

            <p className="text-sm leading-relaxed mt-4">

              No document storage: ProofDeed generates cryptographic proof only.
              Original documents remain under your control.

            </p>

          </div>


        </div>

      </section>



      {/* INDUSTRY CARDS */}

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


      <Footer />

    </div>
  );
}



function ProcessStep({number,title,desc}){

  return(

    <div className="bg-white rounded-lg p-4 shadow-sm">

      <div className="text-xs font-bold text-slate-500">
        {number}
      </div>

      <div className="text-sm font-semibold text-slate-900">
        {title}
      </div>

      <div className="text-xs text-slate-500 mt-1">
        {desc}
      </div>

    </div>

  )

}


function Arrow(){
  return (
    <div className="flex justify-center py-3 text-slate-400">
      ↓
    </div>
  )
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
