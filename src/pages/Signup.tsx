import { useSearchParams } from 'react-router-dom';
import Header from '../components/feature/Header';
import Footer from '../components/feature/Footer';

export default function Signup() {
  const [searchParams] = useSearchParams();

  const vertical = searchParams.get('vertical') || 'document';
  const plan = searchParams.get('plan') || 'starter';

  const startCheckout = async () => {
    try {
      const res = await fetch('/api/checkout-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, vertical })
      });

      const data = await res.json();

      if (res.ok && data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Checkout failed');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-24 mt-16">
        <div className="max-w-xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold mb-4">
            Start {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan
          </h1>

          <p className="text-slate-600 mb-8">
            Vertical: <strong>{vertical}</strong>
          </p>

          <button
            onClick={startCheckout}
            className="w-full bg-slate-900 text-white py-4 rounded-md"
          >
            Continue to Payment
          </button>

        </div>
      </section>

      <Footer />
    </div>
  );
}
