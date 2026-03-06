import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white text-slate-900">

      {/* HERO */}

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Trust the Record. Verify the Moment.
            </h1>

            <p className="text-lg text-slate-600 mb-8">
              Independent certification infrastructure for documents,
              vehicle records, and institutional documentation.
            </p>

            <Link
              to="/institutional"
              className="inline-block bg-black text-white px-8 py-4 rounded-md text-sm font-medium"
            >
              Generate Certification
            </Link>

          </div>

          {/* HERO VISUAL */}

          <div className="bg-slate-100 rounded-xl p-8">

            <div className="text-center space-y-4 text-sm">

              <div className="bg-white p-4 rounded shadow">
                Document
              </div>

              <div>↓</div>

              <div className="bg-white p-4 rounded shadow">
                SHA-256 Hash
              </div>

              <div>↓</div>

              <div className="bg-white p-4 rounded shadow">
                Blockchain Anchor
              </div>

              <div>↓</div>

              <div className="bg-white p-4 rounded shadow">
                ProofDeed Certificate
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-12">
            How ProofDeed Works
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-sm">

            <div>
              <h3 className="font-semibold mb-2">Upload Document</h3>
              <p className="text-slate-600">
                Generate a cryptographic fingerprint of the record.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Generate Hash</h3>
              <p className="text-slate-600">
                SHA-256 proof guarantees document integrity.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Anchor Record</h3>
              <p className="text-slate-600">
                Timestamp secured using blockchain infrastructure.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Verify Anytime</h3>
              <p className="text-slate-600">
                Anyone can instantly confirm authenticity.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INDUSTRIES */}

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-12">
            Industries
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <Link
              to="/institutional"
              className="border rounded-lg p-8 hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-3">
                Institutional Certification
              </h3>
              <p className="text-slate-600 text-sm">
                Protect contracts, corporate records, and institutional
                documentation with independent verification.
              </p>
            </Link>

            <Link
              to="/automotive"
              className="border rounded-lg p-8 hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-3">
                Automotive Certification
              </h3>
              <p className="text-slate-600 text-sm">
                Secure vehicle titles, ownership records, and
                transaction documentation.
              </p>
            </Link>

            <Link
              to="/government"
              className="border rounded-lg p-8 hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-3">
                Government Certification
              </h3>
              <p className="text-slate-600 text-sm">
                Immutable certification for public records,
                regulatory documentation, and archives.
              </p>
            </Link>

          </div>

        </div>
      </section>

      {/* TECHNOLOGY */}

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-8">
            Certification Infrastructure
          </h2>

          <p className="text-slate-600 mb-10">
            ProofDeed creates tamper-proof certification using
            cryptographic hashing and blockchain timestamping.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-sm">

            <div>
              <h3 className="font-semibold mb-2">
                Cryptographic Hashing
              </h3>
              <p className="text-slate-600">
                Every document receives a SHA-256 fingerprint.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Blockchain Timestamp
              </h3>
              <p className="text-slate-600">
                Anchored for permanent independent verification.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Instant Verification
              </h3>
              <p className="text-slate-600">
                Anyone can confirm authenticity using the certificate ID.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}

      <section className="py-24 px-6 text-center">

        <h2 className="text-3xl font-semibold mb-6">
          Create Your First Certification
        </h2>

        <Link
          to="/institutional"
          className="inline-block bg-black text-white px-10 py-4 rounded-md text-sm font-medium"
        >
          Generate Certification
        </Link>

      </section>

    </div>
  );
}
