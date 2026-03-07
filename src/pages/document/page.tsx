import { Link } from "react-router-dom";

export default function Document() {
  return (
    <>
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

          {/* LEFT SIDE — INFORMATION */}

          <div>

            <span className="text-sm uppercase tracking-wider text-slate-500 border border-slate-300 px-4 py-1 rounded-full">
              Institutional Certification Infrastructure
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-900 leading-tight">
              Independent Document Certification
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Protect contracts, legal records, and institutional documentation
              with tamper-proof cryptographic certification and independent
              verification.
            </p>

            <p className="mt-6 text-slate-500 max-w-xl">
              Built for real estate transactions, legal records,
              institutional documentation, and compliance archives.
            </p>


            {/* USE CASE GRID */}

            <div className="mt-16 grid grid-cols-2 gap-10">

              <UseCase
                title="Law Firms"
                text="Certify contracts, affidavits, court filings and legal correspondence with cryptographic proof."
              />

              <UseCase
                title="Title & Escrow"
                text="Protect title commitments, settlement statements and recorded instruments."
              />

              <UseCase
                title="Mortgage & Lending"
                text="Create permanent proof for loan documents and compliance records."
              />

              <UseCase
                title="Private Agreements"
                text="Secure partnership agreements and private business contracts."
              />

              <UseCase
                title="Homeowners"
                text="Protect deeds, property documents and personal records."
              />

              <UseCase
                title="Institutional Records"
                text="Enterprise-grade certification for corporate documentation."
              />

            </div>

          </div>


          {/* RIGHT SIDE — PRICING */}

          <div>

            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              Certification Pricing
            </h2>

            <div className="space-y-6">

              {/* Starter */}

              <div className="border rounded-xl p-8 flex justify-between items-center">

                <div>

                  <h3 className="text-xl font-semibold">
                    Starter
                  </h3>

                  <p className="text-slate-500">
                    Basic certification for individuals and small organizations.
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-3xl font-bold mb-2">
                    $49
                  </p>

                  <Link
                    to="/signup"
                    className="bg-slate-900 text-white px-5 py-2 rounded-lg"
                  >
                    Order
                  </Link>

                </div>

              </div>


              {/* Professional */}

              <div className="border rounded-xl p-8 flex justify-between items-center shadow-md">

                <div>

                  <h3 className="text-xl font-semibold">
                    Professional
                  </h3>

                  <p className="text-slate-500">
                    Built for legal firms, real estate transactions
                    and institutional documentation workflows.
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-3xl font-bold mb-2">
                    $199
                  </p>

                  <Link
                    to="/signup"
                    className="bg-orange-500 text-white px-5 py-2 rounded-lg"
                  >
                    Order
                  </Link>

                </div>

              </div>


              {/* Enterprise */}

              <div className="border rounded-xl p-8 flex justify-between items-center">

                <div>

                  <h3 className="text-xl font-semibold">
                    Enterprise
                  </h3>

                  <p className="text-slate-500">
                    API integrations and enterprise certification infrastructure.
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-3xl font-bold mb-2">
                    Custom
                  </p>

                  <Link
                    to="/contact"
                    className="bg-slate-900 text-white px-5 py-2 rounded-lg"
                  >
                    Contact
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}


function UseCase({ title, text }) {
  return (

    <div>

      <h3 className="font-semibold text-slate-900 mb-2">
        {title}
      </h3>

      <p className="text-slate-500 text-sm">
        {text}
      </p>

    </div>

  );
}
