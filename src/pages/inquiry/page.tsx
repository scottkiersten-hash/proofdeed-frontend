import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { apiPost } from '../../lib/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    title: '',
    vertical: '',
    volume: '',
    deployment: '',
    message: '',
    website: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.website) {
      setError('Invalid submission detected.');
      return;
    }

    if (!formData.name || !formData.email || !formData.organization || !formData.vertical || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
     const response = await apiPost('/api/inquiry', {
        name: formData.name,
        email: formData.email,
        message: `
Organization: ${formData.organization}
Title: ${formData.title}
Vertical: ${formData.vertical}
Estimated Volume: ${formData.volume}
Deployment: ${formData.deployment}

Message:
${formData.message}
        `,
      });

      if (response.success) {
        setSuccess(true);
      } else {
        setError(response.error || 'Submission failed.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
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
      email: '',
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
              Thank you. Our team will respond within 1-2 business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetForm}
                className="px-6 py-3 bg-slate-900 text-white font-medium rounded-md hover:bg-slate-800"
              >
                Submit Another Inquiry
              </button>
              <Link
                to="/"
                className="px-6 py-3 bg-white text-slate-900 font-medium rounded-md border border-slate-300 hover:bg-slate-50"
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

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Full Name *
              </label>
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
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Email Address *
              </label>
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
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Organization *
              </label>
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
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Vertical *
              </label>
              <select
                name="vertical"
                value={formData.vertical}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-md"
              >
                <option value="">Select Vertical</option>
                <option value="document-certification">Document Certification</option>
                <option value="automotive-certification">Automotive Certification</option>
                <option value="government">Government</option>
                <option value="enterprise">Enterprise</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded-md"
              />
            </div>

            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              style={{ display: 'none' }}
            />

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-slate-900 text-white font-medium rounded-md hover:bg-slate-800 disabled:bg-gray-400"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>

          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
