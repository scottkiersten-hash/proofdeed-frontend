import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    title: '',
    vertical: '',
    volume: '',
    deployment: '',
    message: '',
    website: '', // honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Honeypot validation
    if (formData.website) {
      setError('Invalid submission detected.');
      return;
    }

    // Client-side validation
    if (!formData.name || !formData.organization || !formData.vertical || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      // For now, simulate submission to info@proofdeed.com
      // Backend will be implemented later
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
    } catch (err) {
      setError('An error occurred. Please try again or contact info@proofdeed.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      organization: '',
      title: '',
      vertical: '',
      volume: '',
      deployment: '',
      message: '',
      website: '',
    });
    setSuccess(false);
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
              Inquiry Received
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Thank you for your inquiry. Our team will review your request and respond to the email address provided within 1-2 business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetForm}
                className="px-6 py-3 bg-slate-900 text-white font-medium rounded-md hover:bg-slate-800 whitespace-nowrap cursor-pointer"
              >
                Submit Another Inquiry
              </button>
              <Link
                to="/"
                className="px-6 py-3 bg-white text-slate-900 font-medium rounded-md border border-slate-300 hover:bg-slate-50 whitespace-nowrap cursor-pointer"
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

      {/* Hero */}
      <section className="bg-slate-50 py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-medium tracking-wide mb-6">
            INSTITUTIONAL INQUIRY
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Request Information
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Submit your inquiry for institutional access, technical documentation, or procurement discussions.
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                placeholder="John Smith"
              />
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-slate-900 mb-2">
                Organization *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                placeholder="Organization Name"
              />
            </div>

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-900 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                placeholder="Your Title"
              />
            </div>

            {/* Vertical */}
            <div>
              <label htmlFor="vertical" className="block text-sm font-medium text-slate-900 mb-2">
                Vertical *
              </label>
              <select
                id="vertical"
                name="vertical"
                value={formData.vertical}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
              >
                <option value="">Select Vertical</option>
                <option value="document-certification">Document Certification</option>
                <option value="automotive-certification">Automotive Certification</option>
                <option value="government">Government</option>
                <option value="enterprise">Enterprise</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Estimated Volume */}
            <div>
              <label htmlFor="volume" className="block text-sm font-medium text-slate-900 mb-2">
                Estimated Volume (optional)
              </label>
              <input
                type="text"
                id="volume"
                name="volume"
                value={formData.volume}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                placeholder="e.g., 500 documents/month"
              />
            </div>

            {/* Deployment Preference */}
            <div>
              <label htmlFor="deployment" className="block text-sm font-medium text-slate-900 mb-2">
                Deployment Preference
              </label>
              <select
                id="deployment"
                name="deployment"
                value={formData.deployment}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent"
              >
                <option value="">Select Deployment</option>
                <option value="saas">SaaS</option>
                <option value="private-instance">Private Instance</option>
                <option value="api">API</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                maxLength={500}
                className="w-full px-4 py-3 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent resize-none"
                placeholder="Please describe your requirements, use cases, and any specific questions..."
              />
              <p className="text-xs text-slate-500 mt-2">
                {formData.message.length}/500 characters
              </p>
            </div>

            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-slate-900 text-white font-medium rounded-md hover:bg-slate-800 disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>

            <p className="text-xs text-slate-500 text-center">
              All inquiries are sent to info@proofdeed.com. Our team will respond within 1-2 business days.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
