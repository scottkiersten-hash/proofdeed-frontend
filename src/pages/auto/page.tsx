import { useState } from "react";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";

export default function Automotive() {
  const [plan, setPlan] = useState("starter-monthly");

  const pricing = {
    "starter-monthly": "$19 / month",
    "starter-annual": "$190 / year",
    "pro-monthly": "$39 / month",
    "pro-annual": "$390 / year",
    institutional: "Custom Pricing",
  };

  function goToCheckout() {
    if (plan === "starter-monthly") {
      window.location.href =
        "/api/create-checkout-session?price=PRICE_STARTER_MONTHLY";
    }

    if (plan === "starter-annual") {
      window.location.href =
        "/api/create-checkout-session?price=PRICE_STARTER_YEARLY";
    }

    if (plan === "pro-monthly") {
      window.location.href =
        "/api/create-checkout-session?price=PRICE_PRO_MONTHLY";
    }

    if (plan === "pro-annual") {
      window.location.href =
        "/api/create-checkout-session?price=PRICE_PRO_YEARLY";
    }

    if (plan === "institutional") {
      window.location.href = "/contact?vertical=automotive";
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-500">
              Automotive Certification Infrastructure
            </span>

            <h1 className="mt-4 text-4xl font-semibold text-slate-900">
              Built for Dealers, Buyers, and Sellers
            </h1>

            <p className="mt-4 text-slate-600 max-w-xl">
              Secure VIN validation and title integrity for automotive
              professionals and vehicle transactions using tamper-evident
              certification.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <FeatureCard
                icon="🚗"
                title="VIN Transfer Certification"
                description="Create immutable proof of vehicle ownership transfers at the moment of sale with cryptographic verification."
              />

              <FeatureCard
                icon="📄"
                title="Title Integrity Validation"
                description="Verify title authenticity and detect alterations with tamper-evident certification infrastructure."
              />

              <FeatureCard
                icon="✔️"
                title="Dealer Compliance Records"
                description="Maintain permanent audit trails for bill of sale documents, odometer disclosures, and dealership transaction records."
              />

            </div>
          </div>

          {/* RIGHT SIDE PRICING */}
          <div>
            <div className="space-y-3 text-sm">
              <PlanRow
                title="Starter"
                subtitle="Monthly"
                details="25 certifications/month • 25MB per file"
                price="$19 / month"
                active={plan === "starter-monthly"}
                onClick={() => setPlan("starter-monthly")}
              />

              <PlanRow
                title="Starter"
                subtitle="Annual"
                details="25 certifications/month • 25MB per file"
                price="$190 / year"
                active={plan === "starter-annual"}
                onClick={() => setPlan("starter-annual")}
              />

              <PlanRow
                title="Professional"
                subtitle="Monthly"
                details="70 certifications/month • 50MB per file"
                price="$39 / month"
                active={plan === "pro-monthly"}
                onClick={() => setPlan("pro-monthly")}
              />

              <PlanRow
                title="Professional"
                subtitle="Annual"
                details="70 certifications/month • 50MB per file"
                price="$390 / year"
                active={plan === "pro-annual"}
                onClick={() => setPlan("pro-annual")}
              />

              <PlanRow
                title="Institutional"
                subtitle="Enterprise"
                details="Volume pricing • API access • Batch processing"
                price="Custom"
                active={plan === "institutional"}
                onClick={() => setPlan("institutional")}
              />
            </div>

            <div className="mt-10 flex items-center justify-between border-t pt-6">
              <div className="text-2xl font-semibold">{pricing[plan]}</div>

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

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border rounded-xl p-6 text-left">
      <div className="text-2xl mb-3">{icon}</div>
      <div className="font-semibold text-slate-900">{title}</div>
      <p className="text-sm text-slate-600 mt-2">{description}</p>
    </div>
  );
}

function PlanRow({
  title,
  subtitle,
  details,
  price,
  active,
  onClick,
}: {
  title: string;
  subtitle: string;
  details: string;
  price: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex justify-between items-start border rounded-lg px-6 py-4 ${
        active ? "border-blue-600 bg-blue-50" : "border-slate-200"
      }`}
    >
      <div className="text-left pr-6">
        <div className="font-medium text-slate-900">{title}</div>
        <div className="text-xs text-slate-500 mt-1">{subtitle}</div>
        <div className="text-xs text-slate-500 mt-2">{details}</div>
      </div>

      <div className="text-slate-600 whitespace-nowrap mt-1">{price}</div>
    </button>
  );
}
