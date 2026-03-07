import { useState } from "react";

export default function Document() {

  const [plan, setPlan] = useState("starter-monthly");

  const pricing = {
    "starter-monthly": "$19 / month",
    "starter-annual": "$190 / year",
    "pro-monthly": "$39 / month",
    "pro-annual": "$390 / year",
    "institutional": "Custom"
  };

  function goToCheckout() {

    if (plan === "starter-monthly") {
      window.location.href = "/api/create-checkout-session?price=PRICE_STARTER_MONTHLY";
    }

    if (plan === "starter-annual") {
      window.location.href = "/api/create-checkout-session?price=PRICE_STARTER_YEARLY";
    }

    if (plan === "pro-monthly") {
      window.location.href = "/api/create-checkout-session?price=PRICE_PRO_MONTHLY";
    }

    if (plan === "pro-annual") {
      window.location.href = "/api/create-checkout-session?price=PRICE_PRO_YEARLY";
    }

    if (plan === "institutional") {
      window.location.href = "/contact";
    }

  }

  return (

    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

        {/* LEFT SIDE */}

        <div>

          <span className="text-xs uppercase tracking-wider text-slate-500">
            Institutional Certification Infrastructure
          </span>

          <h1 className="mt-4 text-4xl font-semibold text-slate-900">
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

          <div className="space-y-3 text-sm">

            <PlanRow
              title="Starter"
              subtitle="Monthly"
              price="$19 / month"
              active={plan === "starter-monthly"}
              onClick={() => setPlan("starter-monthly")}
            />

            <PlanRow
              title="Starter"
              subtitle="Annual"
              price="$190 / year"
              active={plan === "starter-annual"}
              onClick={() => setPlan("starter-annual")}
            />

            <PlanRow
              title="Professional"
              subtitle="Monthly"
              price="$39 / month"
              active={plan === "pro-monthly"}
              onClick={() => setPlan("pro-monthly")}
            />

            <PlanRow
              title="Professional"
              subtitle="Annual"
              price="$390 / year"
              active={plan === "pro-annual"}
              onClick={() => setPlan("pro-annual")}
            />

            <PlanRow
              title="Institutional"
              subtitle="Enterprise"
              price="Custom"
              active={plan === "institutional"}
              onClick={() => setPlan("institutional")}
            />

          </div>


          {/* Bottom price block */}

          <div className="mt-10 flex items-center justify-between border-t pt-6">

            <div className="text-2xl font-semibold">
              {pricing[plan]}
            </div>

            <button
              onClick={goToCheckout}
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


function PlanRow({ title, subtitle, price, active, onClick }) {

  return (

    <button
      onClick={onClick}
      className={`w-full flex justify-between items-center border rounded-lg px-6 py-4 ${
        active ? "border-blue-600 bg-blue-50" : "border-slate-200"
      }`}
    >

      <div className="text-left">
        <div className="font-medium">{title}</div>
        <div className="text-xs text-slate-500">{subtitle}</div>
      </div>

      <div className="text-slate-600">
        {price}
      </div>

    </button>

  );

}
