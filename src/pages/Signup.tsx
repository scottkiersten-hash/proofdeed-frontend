import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiPost } from '../lib/api';
import Header from '../components/feature/Header';
import Footer from '../components/feature/Footer';

export default function Signup() {
  const [searchParams] = useSearchParams();

  const vertical = searchParams.get('vertical') || 'document';
  const plan = searchParams.get('plan') || 'starter';

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await apiPost('/api/signup', {
        email,
        vertical,
        plan
      });

      if (response.success) {
        setSuccess(true);
      } else {
        setError(response.error || 'Signup failed.');
      }
    } catch {
      setError('Network error.');
    } finally {
      setLoading(false);
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

          {success ? (
            <div className="bg-green-50 border border-green-200 p-6 rounded-md">
              <p className="text-green-800">
                Signup successful. Next step: billing integration.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSignup} className="space-y-6 text-left">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 p-4 rounded-md">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 text-white py-4 rounded-md"
              >
                {loading ? 'Processing...' : 'Continue'}
              </button>

            </form>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}
