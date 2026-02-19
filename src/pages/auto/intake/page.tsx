import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { apiPost, validateHoneypot, createFormData, API_ENDPOINTS } from '../../../lib/api';

export default function AutoIntake() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vin: '',
    buyer: '',
    seller: '',
    price: '',
    state: '',
    file: null as File | null,
    website: '', // honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [proofId, setProofId] = useState('');

  const US_STATES = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Honeypot validation
    if (!validateHoneypot(formData.website)) {
      setError('Invalid submission detected.');
      return;
    }

    // Client-side validation
    if (!formData.vin.trim()) {
      setError('VIN is required.');
      return;
    }

    if (!formData.buyer.trim()) {
      setError('Buyer name is required.');
      return;
    }

    if (!formData.seller.trim()) {
      setError('Seller name is required.');
      return;
    }

    if (!formData.price.trim()) {
      setError('Transaction price is required.');
      return;
    }

    if (!formData.state) {
      setError('State is required.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData
      const submitData = createFormData({
        vin: formData.vin.trim(),
        buyer: formData.buyer.trim(),
        seller: formData.seller.trim(),
        price: formData.price.trim(),
        state: formData.state,
        file: formData.file,
      });

      // Submit to API
      const response = await apiPost(API_ENDPOINTS.AUTO.INTAKE, submitData);

      if (response.success) {
        setSuccess(true);
        setProofId(response.proofId || 'N/A');
      } else {
        setError(response.error);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, file });
  };

  const resetForm = () => {
    setFormData({
      vin: '',
      buyer: '',
      seller: '',
      price: '',
      state: '',
      file: null,
      website: '',
    });
    setSuccess(false);
    setProofId('');
    setError('');
  };

  if (success) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-check-line text-4xl text-white"></i>
            </div>
            <h1 className="text-4xl font-bold text-black mb-4">
              Vehicle Document Certified
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Your automotive transaction has been successfully certified with tamper-evident proof.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-xl mb-8">
              <p className="text-sm text-slate-600 mb-2">Proof ID</p>
              <p className="text-2xl font-mono font-bold text-black break-all">
                {proofId}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/verify"
                className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap cursor-pointer"
              >
                Verify This Proof
              </Link>
              <button
                onClick={resetForm}
                className="px-8 py-4 border-2 border-black text-black rounded-lg font-semibold hover:bg-slate-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                Certify Another Document
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 mb-6 cursor-pointer transition-colors"
            >
              <i className="ri-arrow-left-line"></i>
              Back
            </button>
            <h1 className="text-4xl font-bold text-black mb-4">
              Vehicle Document Certification
            </h1>
            <p className="text-xl text-slate-600">
              Submit vehicle transaction details to create tamper-evident proof
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border-2 border-slate-200 rounded-xl p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">{error}</p>
              </div>
            )}

            {/* VIN */}
            <div className="mb-6">
              <label htmlFor="vin" className="block text-sm font-semibold text-black mb-2">
                Vehicle Identification Number (VIN) *
              </label>
              <input
                type="text"
                id="vin"
                value={formData.vin}
                onChange={(e) => setFormData({ ...formData, vin: e.target.value })}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none text-sm"
                placeholder="Enter 17-character VIN"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Buyer */}
            <div className="mb-6">
              <label htmlFor="buyer" className="block text-sm font-semibold text-black mb-2">
                Buyer Name *
              </label>
              <input
                type="text"
                id="buyer"
                value={formData.buyer}
                onChange={(e) => setFormData({ ...formData, buyer: e.target.value })}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none text-sm"
                placeholder="Full legal name of buyer"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Seller */}
            <div className="mb-6">
              <label htmlFor="seller" className="block text-sm font-semibold text-black mb-2">
                Seller Name *
              </label>
              <input
                type="text"
                id="seller"
                value={formData.seller}
                onChange={(e) => setFormData({ ...formData, seller: e.target.value })}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none text-sm"
                placeholder="Full legal name of seller"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Price */}
            <div className="mb-6">
              <label htmlFor="price" className="block text-sm font-semibold text-black mb-2">
                Transaction Price *
              </label>
              <input
                type="text"
                id="price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none text-sm"
                placeholder="$0.00"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* State */}
            <div className="mb-6">
              <label htmlFor="state" className="block text-sm font-semibold text-black mb-2">
                State *
              </label>
              <select
                id="state"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none text-sm cursor-pointer"
                required
                disabled={isSubmitting}
              >
                <option value="">Select state</option>
                {US_STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* File Upload (Optional) */}
            <div className="mb-6">
              <label htmlFor="file" className="block text-sm font-semibold text-black mb-2">
                Supporting Document (Optional)
              </label>
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none text-sm cursor-pointer"
                accept=".pdf,.jpg,.jpeg,.png"
                disabled={isSubmitting}
              />
              <p className="text-xs text-slate-500 mt-2">
                Accepted formats: PDF, JPG, PNG (Max 10MB)
              </p>
            </div>

            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              {isSubmitting ? 'Submitting...' : 'Create Certification Proof'}
            </button>

            <p className="text-xs text-slate-500 mt-4 text-center">
              By submitting, you confirm the accuracy of the information provided
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
