import { Link } from "react-router-dom";

export default function Document() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('/images/legal-hero.jpg')"
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32">

        {/* Label */}
        <div className="mb-6">
          <span className="text-sm uppercase tracking-wider text-slate-300 border border-slate-600 px-4 py-1 rounded-full">
            Institutional Certification Infrastructure
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
          Independent Document Certification
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-slate-300 max-w-2xl">
          Protect contracts, legal records, and institutional documentation
          with tamper-proof cryptographic certification and independent
          verification.
        </p>

        {/* Primary CTA */}
        <div className="mt-10 flex items-center gap-6">

          <Link
            to="/signup"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg"
          >
            Start Certification
          </Link>

          {/* Secondary link */}
          <Link
            to="/verify"
            className="text-slate-300 hover:text-white text-lg"
          >
            View Example Certificate →
          </Link>

        </div>

        {/* Trust text */}
        <p className="mt-10 text-sm text-slate-400 max-w-xl">
          Built for real estate transactions, legal records,
          institutional documentation, and compliance archives.
        </p>

      </div>

    </section>
  );
}
