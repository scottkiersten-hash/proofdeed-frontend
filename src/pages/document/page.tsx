import { Link } from "react-router-dom";

export default function Document() {
  return (
    <>
      <section className="relative bg-slate-950 text-white overflow-hidden">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/legal-hero.jpg')"
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-32">

          <div className="mb-6">
            <span className="text-sm uppercase tracking-wider text-slate-300 border border-slate-600 px-4 py-1 rounded-full">
              Institutional Certification Infrastructure
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
            Independent Document Certification
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            Protect contracts, legal records, and institutional documentation
            with tamper-proof cryptographic certification and independent
            verification.
          </p>

          <div className="mt-10 flex items-center gap-6">

            <Link
              to="/signup"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Start Certification
            </Link>

            <Link
              to="/verify"
              className="text-slate-300 hover:text-white text-lg"
            >
              View Example Certificate →
            </Link>

          </div>

          <p className="mt-10 text-sm text-slate-400 max-w-xl">
            Built for real estate transactions, legal records,
            institutional documentation, and compliance archives.
          </p>

        </div>
      </section>


      {/* PRICING SECTION */}

      <section className="bg-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Institutional Certification Pricing
          </h2>

          <p className="text-slate-600 mb-16 max-w-2xl mx-auto">
            Transparent pricing for institutional document certification.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Starter */}
            <div className="border rounded-xl p-10 shadow-sm">

              <h3 className="text-xl font-semibold mb-4">Starter</h3>

              <p className="text-4xl font-bold mb-6">
                $49
              </p>

              <p className="text-slate-500 mb-8">
                Basic document certification for individuals
                and small organizations.
              </p>

              <Link
                to="/signup"
                className="bg-slate-900 text-white px-6 py-3 rounded-lg"
              >
                Get Started
              </Link>

            </div>

            {/* Professional */}

            <div className="border rounded-xl p-10 shadow-md scale-105">

              <h3 className="text-xl font-semibold mb-4">
                Professional
              </h3>

              <p className="text-4xl font-bold mb-6">
                $199
              </p>

              <p className="text-slate-500 mb-8">
                Built for legal firms, real estate transactions,
                and institutional documentation workflows.
              </p>

              <Link
                to="/signup"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg"
              >
                Start Plan
              </Link>

            </div>

            {/* Enterprise */}

            <div className="border rounded-xl p-10 shadow-sm">

              <h3 className="text-xl font-semibold mb-4">
                Enterprise
              </h3>

              <p className="text-4xl font-bold mb-6">
                Custom
              </p>

              <p className="text-slate-500 mb-8">
                API integrations and large-scale certification
                infrastructure.
              </p>

              <Link
                to="/contact"
                className="bg-slate-900 text-white px-6 py-3 rounded-lg"
              >
                Contact Sales
              </Link>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}
