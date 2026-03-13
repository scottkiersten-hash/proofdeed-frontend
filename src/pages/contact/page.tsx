import { Link, useSearchParams } from 'react-router-dom';
import { useState, FormEvent, useEffect } from 'react';
import { apiPost, validateHoneypot, ERROR_MESSAGES } from '../../lib/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const vertical = searchParams.get('vertical') || '';

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    vertical: vertical,
    message: '',
    website: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [leadId, setLeadId] = useState('');

  useEffect(() => {
    setFormData(prev => ({ ...prev, vertical }));
  }, [vertical]);

  const getVerticalTitle = () => {
    switch (vertical) {
      case 'government':
        return 'Government Solutions';
      case 'legal':
        return 'Legal & Title Services';
      case 'automotive':
        return 'Automotive Solutions';
      case 'affiliate':
        return 'Affiliate Partnership';
      default:
        return 'Contact ProofDeed';
    }
  };

  const getVerticalDescription = () => {
    switch (vertical) {
      case 'government':
        return 'Request institutional access to ProofDeed government solutions. Our team will review your inquiry and respond within 1-2 business days.';
      case 'legal':
        return 'Contact our legal and title services team to discuss implementation, integration, and partnership opportunities.';
      case 'automotive':
        return 'Connect with our automotive solutions team to explore vehicle record certification and verification capabilities.';
      case 'affiliate':
        return 'Join the ProofDeed affiliate network. Our partnership team will review your application and respond within 2-3 business days.';
      default:
        return 'Contact ProofDeed to discuss certification solutions, technical integration, or partnership opportunities.';
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateHoneypot(formData.website)) {
      setError('Invalid submission detected.');
      return;
    }

    if (!formData.name || !formData.organization || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    // ✅ FIXED EMAIL REGEX
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await apiPost('/api/contact', {
        name: formData.name,
        organization: formData.organization,
        email: formData.email,
        phone: formData.phone,
        vertical: formData.vertical,
        message: formData.message,
      });

      if (response.success) {
        setSuccess(true);
        setLeadId(response.leadId || '');
      } else {
        setError(response.error || ERROR_MESSAGES.SUBMISSION_FAILED);
      }
    } catch {
      setError(ERROR_MESSAGES.NETWORK_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      vertical: vertical,
      message: '',
      website: '',
    });
    setSuccess(false);
    setLeadId('');
    setError('');
  };

  if (success) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="py-32 bg-white mt-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <i className="ri-checkbox-circle-fill text-4xl text-green-600"></i>
            </div>

            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Request Received
            </h1>

            <p className="text-lg text-slate-600 mb-8">
              Thank you for contacting ProofDeed. Our team will review your inquiry and respond within 1-2 business days.
            </p>

            {leadId && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
                <p className="text-sm text-slate-600 mb-2">Reference ID</p>
                <p className="text-xl font-mono font-bold text-slate-900">{leadId}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetForm}
                className="px-6 py-3 bg-slate-900 text-white rounded-md hover:bg-slate-800"
              >
                Submit Another Request
              </button>

              <Link
                to="/"
                className="px-6 py-3 bg-white text-slate-900 border border-slate-300 rounded-md hover:bg-slate-50"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-slate-50 py-20 mt-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-block px-4 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-medium mb-6">
            {vertical ? vertical.toUpperCase() : 'CONTACT'}
          </div>

          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            {getVerticalTitle()}
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {getVerticalDescription()}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <input
              type="hidden"
              name="vertical"
              value={formData.vertical}
            />

            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Organization *</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                maxLength={500}
                className="w-full px-4 py-3 border border-slate-300 rounded-md"
              />
              <p className="text-xs text-slate-500 mt-2">
                {formData.message.length}/500 characters
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-slate-900 text-white rounded-md hover:bg-slate-800 disabled:bg-gray-400"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>

          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
