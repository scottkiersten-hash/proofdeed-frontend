import { useState, FormEvent, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Verify() {
  const navigate = useNavigate();

  const [verificationId, setVerificationId] = useState('');
  const [sha256Hash, setSha256Hash] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (honeypot) return;

    setIsVerifying(true);
    setError('');
    setVerificationResult(null);

    try {

      const response = await fetch(`/api/verify/${verificationId}`);

      const data = await response.json();

      if (!data.success) {
        setError("Certificate not found.");
      } else {
        setVerificationResult(data.certification);
      }

    } catch (err) {
      setError("Verification service unavailable.");
    }

    setIsVerifying(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 mb-8 cursor-pointer transition-colors"
          >
            <i className="ri-arrow-left-line"></i>
            Back
          </button>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Verify Certificate
            </h1>
            <p className="text-xl text-slate-600">
              Enter a ProofDeed Certification ID to independently verify document authenticity.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-12 mb-8">
            <form onSubmit={handleSubmit}>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Certification ID
                </label>

                <input
                  type="text"
                  value={verificationId}
                  onChange={(e) => setVerificationId(e.target.value)}
                  placeholder="Example: PD-1773300832102"
                  className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  SHA-256 Hash (Optional)
                </label>

                <input
                  type="text"
                  value={sha256Hash}
                  onChange={(e) => setSha256Hash(e.target.value)}
                  placeholder="Optional document hash"
                  className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg font-mono"
                />
              </div>

              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
              />

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full px-9 py-4 bg-slate-900 text-white text-base font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                {isVerifying ? 'Verifying Certificate...' : 'Verify Certificate'}
              </button>

            </form>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {verificationResult && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-checkbox-circle-line text-2xl text-green-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Certificate Verified
                  </h3>
                  <p className="text-sm text-slate-600">
                    This certificate is authentic.
                  </p>
                </div>
              </div>

              <div className="space-y-4">

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                    Certification ID
                  </p>
                  <p className="text-sm font-medium">
                    {verificationResult.certification_id}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                    Document Hash
                  </p>
                  <p className="text-sm font-mono break-all">
                    {verificationResult.hash}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                    Timestamp
                  </p>
                  <p className="text-sm">
                    {new Date(verificationResult.created_at).toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                    Blockchain Transaction
                  </p>

                  <a
                    href={`https://polygonscan.com/tx/${verificationResult.polygon_tx}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm font-mono break-all hover:underline"
                  >
                    {verificationResult.polygon_tx}
                  </a>

                </div>

              </div>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
