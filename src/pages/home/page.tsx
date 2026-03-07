```tsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/feature/Header'
import Footer from '../../components/feature/Footer'

export default function Home() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
            Verifiable Digital Certification for Government Records, Real Estate Transactions,
            Legal & Title Workflows, Notarization Services, and Vehicle Transfers.
          </p>

        </div>

      </section>


      {/* STORY */}

      <section className="pb-10">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-slate-600 leading-relaxed">
            ProofDeed creates tamper-evident certification for critical records.
            Each certification generates a cryptographic fingerprint anchored to an immutable
            timestamp allowing anyone to independently verify authenticity without storing
            the original document.
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


      {/* INDUSTRIES — TESLA STYLE HORIZONTAL SCROLL */}

      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Industries
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-4">

            {/* GOVERNMENT */}

            <IndustryCard
              title="Government Certification"
              desc="Fraud prevention and public record integrity systems for agencies and compliance infrastructure."
              image="https://images.unsplash.com/photo-1541872703-74c5e44368f9"
              link="/government"
            />

            {/* INSTITUTIONAL */}

            <IndustryCard
              title="Institutional Certification"
              desc="Secure certification for banking, legal documentation, real estate transactions and financial records."
              image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
              link="/document"
            />

            {/* AUTOMOTIVE */}

            <IndustryCard
              title="Automotive Certification"
              desc="VIN validation, title authentication and dealer record verification infrastructure."
              image="https://images.unsplash.com/photo-1493238792000-8113da705763"
              link="/auto"
            />

          </div>

        </div>

      </section>


      {/* AFFILIATES */}

      <section className="bg-slate-100 py-20">

        <div
```
