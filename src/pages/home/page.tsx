import { Link } from "react-router-dom";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";

import governmentImg from "../../assets/hero/government.jpg";
import documentImg from "../../assets/hero/document.jpg";
import autoImg from "../../assets/hero/auto.jpg";

export default function Home() {

  const scrollAmount = 940;

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

<section className="pt-28 pb-20">

  <div className="max-w-6xl mx-auto px-6">

    <div className="flex flex-wrap justify-center gap-3 mb-10">

      <div className="flex items-center gap-2 border border-blue-200 rounded-full px-4 py-1.5">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-xs font-semibold tracking-widest text-slate-700 uppercase">
          Blockchain-Anchored Certification
        </span>
      </div>

      <div className="flex items-center gap-2 border border-slate-200 rounded-full px-4 py-1.5">
        <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
          Built for Government · Legal · Title · Automotive
        </span>
      </div>

    </div>


    <div className="text-center mb-6">

      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
        Your Document Is Now<br />
        Legally Undeniable.
      </h1>

      <p className="text-sm text-green-600 font-semibold tracking-wide uppercase mt-4">
        Certified in under 60 seconds. Verifiable forever.
      </p>

    </div>


    <div className="text-center max-w-3xl mx-auto mb-12">

      <p className="text-lg text-slate-700 mb-4 leading-relaxed">
        Document fraud costs U.S. businesses
        <strong> $47 billion annually.</strong>
        A single disputed title runs
        <strong> $15,000–$50,000 </strong>
        in legal fees alone. ProofDeed closes that gap — permanently.
      </p>

      <p className="text-base text-slate-500 leading-relaxed">
        We generate a cryptographic fingerprint of your document,
        anchor it to the
        <strong> Polygon public blockchain</strong>,
        and issue a tamper-evident certificate anyone can verify —
        no account, no software, no trust required.

        <span className="text-green-600 font-semibold">
          {" "}We never see, store, or touch your original file.
        </span>
      </p>

    </div>


    <div className="text-center mb-10">

      <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
        Trusted by government agencies, title professionals, and dealer networks across the U.S.
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm font-medium">
        <span>Government Agencies</span>
        <span>•</span>
        <span>Title Companies</span>
        <span>•</span>
        <span>Law Firms</span>
        <span>•</span>
        <span>Dealer Networks</span>
        <span>•</span>
        <span>Real Estate Professionals</span>
      </div>

    </div>


    <div className="grid grid-cols-2 sm:grid-cols-4 max-w-3xl mx-auto border border-slate-200 rounded-xl overflow-hidden">

      <div className="text-center py-5 px-4 border-r border-slate-200">
        <p className="text-2xl font-bold text-slate-900">SHA-256</p>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">
          Cryptographic Hash
        </p>
      </div>

      <div className="text-center py-5 px-4 border-r border-slate-200">
        <p className="text-2xl font-bold text-slate-900">Polygon</p>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">
          Public Blockchain
        </p>
      </div>

      <div className="text-center py-5 px-4 border-r border-slate-200">
        <p className="text-2xl font-bold text-slate-900">&lt; 60s</p>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">
          Certification Speed
        </p>
      </div>

      <div className="text-center py-5 px-4">
        <p className="text-2xl font-bold text-slate-900">0 Files</p>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">
          Stored on Our Servers
        </p>
      </div>

    </div>

  </div>

</section>



{/* DIVIDER */}

<div className="h-20 bg-gradient-to-b from-white to-slate-50"></div>

<div className="text-center mb-10">
  <p className="text-xs tracking-widest text-slate-400 uppercase">
    Certification Infrastructure Across Industries
  </p>
</div>



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

  </div>

</section>



{/* 4 INFORMATION BLOCKS */}

<section className="pb-24">

  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">


{/* BOX 1 */}

<div className="rounded-xl p-6 shadow-lg text-white"
style={{background:"linear-gradient(135deg,#6a11cb,#8e44ad)"}}>

<h3 className="text-lg font-semibold mb-6">
How It Works
</h3>

<p className="text-sm"><b>1 SHA-256 Fingerprint</b><br/>
Cryptographic hash created from document contents</p>

<p className="text-sm mt-4"><b>2 Timestamping</b><br/>
Precise timestamp recorded at moment of certification</p>

<p className="text-sm mt-4"><b>3 Blockchain Anchoring</b><br/>
Hash anchored to public blockchain for immutability</p>

<p className="text-sm mt-4"><b>4 Verification ID</b><br/>
Independent verification without document storage</p>

<p className="text-sm mt-6">
No document storage: ProofDeed generates cryptographic proof only.
Original documents remain under your control.
</p>

</div>



{/* BOX 2 */}

<div className="rounded-xl p-6 shadow-lg text-white"
style={{background:"linear-gradient(135deg,#7b2cbf,#9d4edd)"}}>

<h3 className="text-lg font-semibold mb-6">
Blockchain-Anchored Certification
</h3>

<h4 className="text-lg font-semibold mb-4">
If It Can Be Disputed,<br/>It Hasn't Been Certified.
</h4>

<p className="text-sm">
Forged titles. Altered contracts. Disputed records.
These aren't edge cases — they're daily realities for
government agencies, legal professionals, and automotive networks.
</p>

<p className="text-sm mt-4">
ProofDeed generates a cryptographic fingerprint of any document,
anchors it permanently to the Polygon blockchain, and issues a
tamper-evident certificate that anyone can independently verify —
without ever storing your original file.
</p>

</div>



{/* BOX 3 */}

<div className="rounded-xl p-6 shadow-lg text-white"
style={{background:"linear-gradient(135deg,#7209b7,#a663cc)"}}>

<h3 className="text-lg font-semibold mb-6">
Why Organizations Trust ProofDeed
</h3>

<p className="text-sm">
<b>SHA-256 Cryptographic Certification</b><br/>
Industry-standard cryptographic hashing ensures document integrity
and tamper-evident verification.
</p>

<p className="text-sm mt-4">
<b>Multi-Layer Identity Validation</b><br/>
Verification protocols protect against fraud and ensure
authentic record creation.
</p>

<p className="text-sm mt-4">
<b>Complete Audit Logging</b><br/>
Every action is logged with timestamps and IP tracking for
compliance and accountability.
</p>

</div>



{/* BOX 4 */}

<div className="rounded-xl p-6 shadow-lg text-white"
style={{background:"linear-gradient(135deg,#7b2cbf,#c77dff)"}}>

<h3 className="text-lg font-semibold mb-6">
Built for Organizations That Cannot Afford Record Uncertainty
</h3>

<p className="text-sm">
From government agencies and real estate professionals to title
companies, legal teams, notaries, and automotive networks —
ProofDeed provides verifiable digital certification that protects
institutions and the public.
</p>

</div>


  </div>

</section>



<Footer />

</div>
  );
}



function IndustryCard({title,desc,image,link}){

return(

<div className="relative min-w-[900px] h-[620px] rounded-2xl overflow-hidden shadow-lg">

<img
src={image}
alt={title}
className="absolute inset-0 w-full h-full object-cover"
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
