'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import GovernmentCertificate from '@/components/feature/GovernmentCertificate';

export default function Government() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden mt-16">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1585432959449-b1c2f45f1c68?q=80&w=2070&auto=format&fit=crop"
              alt="Government Record Integrity Infrastructure"
              className="w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(15, 23, 42, 0.35), rgba(15, 23, 42, 0.25))'
              }}
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Government & Institutional Infrastructure
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                Verifiable Public Record Integrity
              </h1>

              <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                ProofDeed provides tamper-evident cryptographic certification
                for public records and regulatory documentation —
                without replacing existing systems of record or storing document contents.
              </p>

              <Link
                href="/procurement"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg"
                style={{ background: '#FF6B35', color: '#FFFFFF' }}
              >
                Inquiry / Procurement & Compliance Documentation
              </Link>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Core Capabilities
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Independent infrastructure designed for audit,
              oversight, and defensible verification.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Cryptographic Hashing
              </h3>
              <p className="text-slate-600 text-sm">
                SHA-256 fingerprint generation ensures tamper-evident
                proof of record integrity.
              </p>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Secure Timestamping
              </h3>
              <p className="text-slate-600 text-sm">
                Server-recorded timestamps create defensible certification records.
              </p>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Independent Verification
              </h3>
              <p className="text-slate-600 text-sm">
                Third parties can verify record integrity without internal access.
              </p>
            </div>
          </div>
        </section>

        {/* Certificate Preview */}
        <section className="py-20 bg-slate-50 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Government Record Certification
            </h2>

            <button
              onClick={() => setShowCertificate(true)}
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800"
            >
              View Sample Certificate
            </button>
          </div>
        </section>

        {showCertificate && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setShowCertificate(false)}
          >
            <div className="relative w-full max-w-2xl">
              <button
                onClick={() => setShowCertificate(false)}
                className="absolute -top-10 right-0 text-white text-3xl"
              >
                ×
              </button>
              <div onClick={(e) => e.stopPropagation()}>
                <GovernmentCertificate />
              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}
