import { useSearchParams } from 'react-router-dom';
import Header from '../components/feature/Header';
import Footer from '../components/feature/Footer';

export default function Signup() {

  const [searchParams] = useSearchParams();

  const vertical = searchParams.get('vertical') || 'document';

  let plan = searchParams.get('plan') || 'starter';

  // normalize plan names
  if (plan === 'pro') {
    plan = 'professional';
  }

  let billing = searchParams.get('billing') || 'monthly';

  // normalize billing naming
  if (billing === 'yearly') {
    billing = 'annual';
  }

  const startCheckout = async () => {

    try {

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          plan,
          billing,
          vertical,
          successUrl: window.location.origin + '/success',
          cancelUrl: window.location.origin + '/' + vertical + '#pricing'
        })
      });

      const data = await res.json();

      if (res.ok && data.url) {

        window.location.href = data.url;

      } else {

        alert(data.error || 'Checkout failed');

      }

    } catch (err) {

      console.error('Checkout error:', err);
      alert('Network error');

    }

  };

  const planTitle =
    plan === 'professional'
      ? 'Professional'
      : 'Starter';

  return (

    <div className="min-h-screen bg-white">

      <Header />

      <section className="py-24 mt-16">

        <div className="max-w-xl mx-auto px-6 text-center">

          <h1 className="text-4xl font-bold mb-4">
            Start {planTitle} Plan
          </h1>

          <p className="text-slate-600 mb-2">
            Vertical: <strong>{vertical}</strong>
          </p>

          <p className="text-slate-600 mb-8">
            Billing: <strong>{billing}</strong>
          </p>

          <button
            onClick={startCheckout}
            className="w-full bg-slate-900 text-white py-4 rounded-md hover:bg-black transition-colors"
          >
            Continue to Payment
          </button>

        </div>

      </section>

      <Footer />

    </div>

  );

}
