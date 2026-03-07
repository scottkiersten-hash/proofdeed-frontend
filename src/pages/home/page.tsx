import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/feature/Header'
import Footer from '../../components/feature/Footer'

import governmentImg from '../../assets/hero/government.jpg'
import documentImg from '../../assets/hero/document.jpg'
import autoImg from '../../assets/hero/auto.jpg'

export default function Home() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black">

      <Header />

      {/* HERO */}

      <section className="pt-20 pb-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            PROOFDEED
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Verifiable Digital Certification for Government Records, Real Estate Transactions,
            Legal & Title Workflows, Notarization Services, and Vehicle Transfers.
          </p>

        </div>

      </section>


      {/* STORY */}

      <section className="pb-12">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-slate-600 leading-relaxed">
            ProofDeed creates tamper-evident certification for critical records.
            Each certification generates a cryptographic fingerprint anchored to
            an immutable timestamp allowing anyone to independently verify
            authenticity without storing the original document.
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

            <Step
              title="Document"
              desc="Original record submitted"
            />

            <Arrow />

            <Step
              title="SHA-256 Hash"
              desc="Cryptographic fingerprint"
            />

            <Arrow />

            <Step
              title="Blockchain Anchor"
              desc="Immutable timestamp"
            />

            <Arrow />

            <Step
              title="ProofDeed Certificate"
              desc="Public verification"
            />

          </div>

        </div>

      </section>


      {/* INDUSTRIES — TESLA STYLE */}

      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-24">

        {/* GOVERNMENT */}

        <Industry
          image={governmentImg}
          title="Government Certification"
          desc="Fraud prevention and public record integrity systems for agencies and compliance infrastructure."
          link="/government"
        />

        {/* INSTITUTIONAL */}

        <Industry
          image={documentImg}
          title="Institutional Certification"
          desc="Secure certification for banking, finance, legal documentation and real estate transactions."
          link="/document"
        />

        {/* AUTOMOTIVE */}

        <Industry
          image={autoImg}
          title="Automotive Certification"
          desc="VIN validation, title authentication and dealer verification infrastructure."
          link="/auto"
        />

      </section>


      {/* AFFILIATES */}

      <section className="bg-slate-100 py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Affiliate Program
          </h2>

          <p className="text-slate-600 mb-10">
            Revenue partnerships and API integrations for organizations introducing
            ProofDeed certification infrastructure.
          </p>

          <Link
            to="/affiliates"
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800"
          >
            Become a Partner
          </Link>

        </div>

      </section>


      <Footer />

    </div>
  )
}



function Step({ title, desc }) {
  return (
    <div className="border border-slate-200 rounded-lg p-6 w-56 bg-white shadow-sm">
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-sm text-slate-500">{desc}</div>
    </div>
  )
}


function Arrow() {
  return (
    <div className="text-2xl text-slate-400 hidden md:block">
      →
    </div>
  )
}


function Industry({ image, title, desc, link }) {

  return (

    <div className="grid md:grid-cols-2 gap-12 items-center">

      <img
        src={image}
        className="rounded-xl shadow-xl"
      />

      <div>

        <h3 className="text-4xl font-semibold mb-4">
          {title}
        </h3>

        <p className="text-slate-600 mb-6">
          {desc}
        </p>

        <Link
          to={link}
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800"
        >
          Learn More
        </Link>

      </div>

    </div>

  )
}
