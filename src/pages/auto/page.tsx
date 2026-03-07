import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";

export default function Auto() {

  const [plan, setPlan] = useState("starter-monthly");

  const pricing = {
    "starter-monthly": "$19 / month",
    "starter-annual": "$190 / year",
    "pro-monthly": "$39 / month",
    "pro-annual": "$390 / year",
    "institutional": "Custom Pricing"
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
      window.location.href = "/contact?vertical=automotive";
    }

  }

  return (

    <div className="min-h-screen bg-white">

      <Header />

      {/* HERO */}

      <section className="relative py-24 overflow-hidden mt-16">

        <div className="absolute inset-0">

          <img
            src="https://readdy.ai/api/search-image?query=modern%20automotive%20dealership%20environment%20with%20vehicle%20record%20verification%20technology%2C%20professional%20VIN%20validation%20systems%20for%20title%20transfers%20and%20bill%20of%20sale%20records%2C%20bright%20clean%20dealership%20office%20setting%20with%20cars%20and%20digital%20document%20systems%2C%20premium%20automotive%20certification%20infrastructure&width=1920&height=800"
            alt="Automotive certification infrastructure"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-900/30"></div>

        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <span className="text-xs uppercase tracking-wider text-white/80">
              Automotive Certification Infrastructure
            </span>

            <h1 className="text-5xl font-bold text-white mt-4">
              Independent Vehicle Record Certification
            </h1>

            <p className="text-lg text-slate-200 mt-6">
              Tamper-evident certification and independent verification for vehicle
              titles, bill of sale records, and dealer transactions.
            </p>

          </div>

        </div>

      </section>


      {/* PRICING + INFO */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">


          {/* LEFT SIDE */}

          <div>

            <h2 className="text-3xl font-semibold text-slate-900">
              Automotive Certification Use Cases
            </h2>

            <p className="mt-4 text-slate-600 max-w-xl">
              Protect vehicle ownership records and dealership transactions
              with tamper-proof cryptographic certification.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12 text-sm text-slate-700">

              <div>Dealership Sales Records</div>
              <div>Private Vehicle Sales</div>

              <div>VIN Verification</div>
              <div>Title Transfers</div>

              <div>Dealer Compliance</div>
              <div>Vehicle History Records</div>

            </div>

          </div>


          {/* RIGHT SIDE TESLA STYLE */}

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


            {/* PRICE BLOCK */}

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

      <Footer />

    </div>

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
