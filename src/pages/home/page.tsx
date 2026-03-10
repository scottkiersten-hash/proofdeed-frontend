export default function Home() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Certify Documents Instantly
        </h1>

        <p className="text-xl text-gray-600 mb-10">
          Tamper-proof document certification secured on blockchain.
        </p>

        <div className="flex justify-center gap-4 mb-16">
          <a
            href="/certify"
            className="bg-black text-white px-8 py-4 rounded-lg text-lg"
          >
            Certify Document
          </a>

          <a
            href="/verify"
            className="border border-black px-8 py-4 rounded-lg text-lg"
          >
            Verify Certificate
          </a>
        </div>
      </section>

      {/* INDUSTRY VERTICALS */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-sky-100 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Government</h3>
              <p className="text-sm text-gray-700">
                Secure certification for public records.
              </p>
            </div>

            <div className="bg-sky-200 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Automotive</h3>
              <p className="text-sm text-gray-700">
                Authenticate vehicle documentation.
              </p>
            </div>

            <div className="bg-sky-300 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <p className="text-sm text-gray-700">
                Certify contracts and legal documents.
              </p>
            </div>

            <div className="bg-sky-400 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Business</h3>
              <p className="text-sm text-gray-700">
                Protect agreements and records.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
