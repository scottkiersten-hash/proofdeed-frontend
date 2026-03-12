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

  const priceIds = {
    "starter-monthly": "PRICE_STARTER_MONTHLY",
    "starter-annual": "PRICE_STARTER_YEARLY",
    "pro-monthly": "PRICE_PRO_MONTHLY",
    "pro-annual": "PRICE_PRO_YEARLY"
  };

  async function goToCheckout() {

    if (plan === "institutional") {
      window.location.href = "/contact";
      return;
    }

    try {

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          priceId: priceIds[plan]
        })
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Stripe checkout failed");
      }

    } catch (err) {

      console.error(err);
      alert("Network error");

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

        </div>


        {/* RIGHT SIDE PRICING */}

        <div>

          <div className="space-y-3 text-sm">

            <PlanRow
              title="Starter"
              subtitle="Monthly"
              details="25 certifications/month • 25MB per file • Single user • Dashboard access"
              price="$19 / month"
              active={plan === "starter-monthly"}
              onClick={() => setPlan("starter-monthly")}
            />

            <PlanRow
              title="Starter"
              subtitle="Annual"
              details="25 certifications/month • 25MB per file • Single user • Dashboard access"
              price="$190 / year"
              active={plan === "starter-annual"}
              onClick={() => setPlan("starter-annual")}
            />

            <PlanRow
              title="Professional"
              subtitle="Monthly"
              details="70 certifications/month • 50MB per file • Multi-user access • Priority support"
              price="$39 / month"
              active={plan === "pro-monthly"}
              onClick={() => setPlan("pro-monthly")}
            />

            <PlanRow
              title="Professional"
              subtitle="Annual"
              details="70 certifications/month • 50MB per file • Multi-user access • Priority support"
              price="$390 / year"
              active={plan === "pro-annual"}
              onClick={() => setPlan("pro-annual")}
            />

            <PlanRow
              title="Institutional"
              subtitle="Enterprise"
              details="Volume pricing • API access • Batch processing • Dedicated support"
              price="Custom"
              active={plan === "institutional"}
              onClick={() => setPlan("institutional")}
            />

          </div>


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


function PlanRow({ title, subtitle, details, price, active, onClick }) {

  return (

    <button
      onClick={onClick}
      className={`w-full flex justify-between items-start border rounded-lg px-6 py-4 ${
        active ? "border-blue-600 bg-blue-50" : "border-slate-200"
      }`}
    >

      <div className="text-left pr-6">

        <div className="font-medium text-slate-900">
          {title}
        </div>

        <div className="text-xs text-slate-500 mt-1">
          {subtitle}
        </div>

        <div className="text-xs text-slate-500 mt-2">
          {details}
        </div>

      </div>

      <div className="text-slate-600 whitespace-nowrap mt-1">
        {price}
      </div>

    </button>

  );

}
