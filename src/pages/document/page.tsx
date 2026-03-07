import { useState } from "react";

export default function Document() {
  const [billing, setBilling] = useState("monthly");
  const [plan, setPlan] = useState("starter");

  function goToStripe() {
    if (plan === "starter") {
      window.location.href = `/api/stripe-checkout?plan=starter&billing=${billing}`;
    }

    if (plan === "professional") {
      window.location.href = `/api/stripe-checkout?plan=professional&billing=${billing}`;
    }

    if (plan === "institutional") {
      window.location.href = "/contact";
    }
  }

  const prices = {
    starter: {
      monthly: 19,
      annual: 15
    },
    professional: {
      monthly: 39,
      annual: 31
    }
  };

  const currentPrice =
    plan === "institutional"
      ? "Custom Pricing"
      : billing === "monthly"
        ? `$${prices[plan].monthly} / month`
        : `$${prices[plan].annual} / month`;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

        {/* LEFT SIDE */}

        <div>
          <span className="text-xs uppercase tracking-wider text-slate-500">
            Institutional Certification Infrastructure
          </span>

          <h1 className="mt-4 text-4xl font-semibold text-slate-900 leading-tight">
            Independent Document Certification
          </h1>

          <p className="mt-4 text-slate-600 max-w-xl">
            Protect contracts, legal records, and institutional documentation
            with tamper-proof cryptographic certification and independent verification.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 text-sm text-slate-700">
            <div>Law Firms</div>
            <div>Title & Escrow</div>
            <div>Mortgage & Lending</div>
            <div>Private Agreements</div>
            <div>Homeowners</div>
            <div>Institutional Records</div>
          </div>
        </div>

        {/* RIGHT SIDE PRICING */}

        <div>

          {/* BILLING TOGGLE */}

          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-lg text-sm ${
                billing === "monthly"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 border border-slate-200"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("annual")}
              className={`px-4 py-2 rounded-lg text-sm ${
                billing === "annual"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 border border-slate-200"
              }`}
            >
              Annual (Save 20%)
            </button>
          </div>

          {/* PLAN ROWS */}

          <div className="space-y-3">

            <button
              onClick={() => setPlan("starter")}
              className={`w-full flex justify-between items-center border rounded-lg px-6 py-4 text-sm ${
                plan === "starter"
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200"
              }`}
            >
              <span className="font-medium">Starter</span>
              <span className="text-slate-600">
                {billing === "monthly" ? "$19 / month" : "$15 / month"}
              </span>
            </button>

            <button
              onClick={() => setPlan("professional")}
              className={`w-full flex justify-between items-center border rounded-lg px-6 py-4 text-sm ${
                plan === "professional"
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200"
              }`}
            >
              <span className="font-medium">Professional</span>
              <span className="text-slate-600">
                {billing === "monthly" ? "$39 / month" : "$31 / month"}
              </span>
            </button>

            <button
              onClick={() => setPlan("institutional")}
              className={`w-full flex justify-between items-center border rounded-lg px-6 py-4 text-sm ${
                plan === "institutional"
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200"
              }`}
            >
              <span className="font-medium">Institutional</span>
              <span className="text-slate-600">Custom</span>
            </button>
          </div>

          {/* PRICE BLOCK */}

          <div className="mt-10 flex items-center justify-between border-t pt-6">
            <div className="text-2xl font-semibold">
              {currentPrice}
            </div>

            <button
              onClick={goToStripe}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
