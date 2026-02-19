import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Verify() {
  const navigate = useNavigate();
  const [verificationId, setVerificationId] = useState('');
  const [sha256Hash, setSha256Hash] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (honeypot) {
      return;
    }

    setIsVerifying(true);

    // Simulate API call to POST /api/validate
    setTimeout(() => {
      setVerificationResult({
        valid: true,
        documentHash: sha256Hash || 'a3f5b8c9d2e1f4a7b6c5d8e9f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0',
        timestamp: '2024-01-15T14:30:00Z',
        blockchainTx: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
        verificationId: verificationId || '76A2-89D3-4FEC-1D5B',
        documentType: 'Property Deed',
        parties: ['John Smith', 'Jane Doe']
      });
      setIsVerifying(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
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
              Enter your verification ID or SHA-256 hash to independently verify certificate authenticity and integrity
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-12 mb-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="verificationId" className="block text-sm font-semibold text-slate-900 mb-2">
                  Verification ID *
                </label>
                <input
                  type="text"
                  id="verificationId"
                  value={verificationId}
                  onChange={(e) => setVerificationId(e.target.value)}
                  placeholder="e.g., 76A2-89D3-4FEC-1D5B"
                  className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="sha256Hash" className="block text-sm font-semibold text-slate-900 mb-2">
                  SHA-256 Hash (Optional)
                </label>
                <input
                  type="text"
                  id="sha256Hash"
                  value={sha256Hash}
                  onChange={(e) => setSha256Hash(e.target.value)}
                  placeholder="Optional: Enter document hash for additional verification"
                  className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent font-mono"
                />
              </div>

              {/* Honeypot field */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full px-9 py-4 min-h-[56px] bg-slate-900 text-white text-base font-semibold rounded-lg hover:bg-slate-800 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed cursor-pointer whitespace-normal"
              >
                {isVerifying ? 'Verifying Certificate...' : 'Verify Certificate'}
              </button>
            </form>
          </div>

          {verificationResult && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-checkbox-circle-line text-2xl text-green-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Certificate Verified</h3>
                  <p className="text-sm text-slate-600">This certificate is authentic and independently verified</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Verification ID
                  </p>
                  <p className="text-sm text-slate-900 font-medium">
                    {verificationResult.verificationId}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Document Type
                  </p>
                  <p className="text-sm text-slate-900 font-medium">
                    {verificationResult.documentType}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    SHA-256 Hash
                  </p>
                  <p className="text-sm text-slate-900 font-mono break-all">
                    {verificationResult.documentHash}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Timestamp
                  </p>
                  <p className="text-sm text-slate-900">
                    {new Date(verificationResult.timestamp).toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Blockchain Transaction
                  </p>
                  <p className="text-sm text-slate-900 font-mono break-all">
                    {verificationResult.blockchainTx}
                  </p>
                </div>

                {verificationResult.parties && (
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                      Parties
                    </p>
                    <p className="text-sm text-slate-900">
                      {verificationResult.parties.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-12 bg-slate-50 rounded-xl p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              How Independent Verification Works
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                <span>Enter your unique Verification ID received when the record was certified</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                <span>Optionally provide the SHA-256 hash for additional verification</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                <span>System retrieves metadata and blockchain anchor information</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                <span>Verification is independent and does not require ProofDeed access</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
