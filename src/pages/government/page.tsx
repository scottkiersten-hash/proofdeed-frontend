import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";
import GovernmentCertificate from "../../components/feature/GovernmentCertificate";

export default function Government() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="relative py-24 overflow-hidden mt-16">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=United%20States%20Capitol%20building%20with%20digital%20security%20overlay%20showing%20government%20record%20systems%20and%20public%20integrity%20infrastructure%2C%20professional%20institutional%20technology%20with%20blue%20and%20cyan%20lighting%20effects&width=1920&height=800"
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-900/30" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Verifiable Public Record Integrity
            </h1>

            <p className="text-lg text-slate-200 mb-8 max-w-2xl">
              ProofDeed provides tamper-evident cryptographic certification
              for public records and regulatory documentation —
              without replacing existing systems of record.
            </p>

            <Link
              to="/procurement"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg"
              style={{ background: "#FF6B35", color: "#FFFFFF" }}
            >
              Inquiry / Procurement & Compliance Documentation
            </Link>
          </div>
        </section>

        <section className="py-20 bg-white text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Government Record Certification
          </h2>

          <button
            onClick={() => setShowCertificate(true)}
            className="px-6 py-3 bg-slate-900 text-white rounded-lg"
          >
            View Sample Certificate
          </button>
        </section>

        {showCertificate && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setShowCertificate(false)}
          >
            <div
              className="bg-white p-6 rounded-lg max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <GovernmentCertificate />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
