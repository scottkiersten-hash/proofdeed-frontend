import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Auto() {

  const [billing, setBilling] = useState('monthly');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20automotive%20certification%20infrastructure%20with%20secure%20VIN%20validation%20systems%2C%20professional%20vehicle%20record%20verification%20technology%20showing%20digital%20title%20integrity%20platforms%2C%20clean%20minimalist%20automotive%20dealership%20environment%20with%20subtle%20blue%20accent%20lighting%2C%20institutional%20vehicle%20transfer%20certification%20aesthetic%2C%20bright%20and%20premium%20quality%20with%20reduced%20dark%20overlay&width=1920&height=800&seq=auto-cert-bright-hero-002&orientation=landscape"
            alt="Automotive certification infrastructure"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(14, 26, 47, 0.35), rgba(14, 26, 47, 0.25))' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Automotive Certification Infrastructure
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Independent Vehicle Record Certification
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              Tamper-evident certification and independent verification for vehicle titles, bill of sale records, and dealer transactions — without storing document contents.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center gap-4">
              <Link
                to="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-opacity hover:opacity-90"
                style={{ background: '#FF6B35', color: '#FFFFFF' }}
              >
                Start Vehicle Certification
              </Link>

              <Link
                to="/verify"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] hover:border-[#2563EB] transition-colors whitespace-nowrap cursor-pointer"
              >
                Verify Certificate
              </Link>

              <Link
                to="/inquiry"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] hover:border-[#2563EB] transition-colors whitespace-nowrap cursor-pointer"
              >
                Inquiry
              </Link>

              <Link
                to="/certificate/automotive"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border-2 border-white/80 text-white text-sm font-semibold rounded-lg hover:bg-[#2563EB] hover:border-[#2563EB] transition-colors whitespace-nowrap cursor-pointer"
              >
                View Sample Certificate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Automotive Certification Pricing
            </h2>

            <p className="text-lg text-slate-600">
              Choose monthly billing or save with annual pricing
            </p>
          </div>

          {/* Billing Toggle */}

          <div className="flex justify-center mb-12">

            <div className="bg-white border border-slate-200 rounded-lg p-1 flex">

              <button
                onClick={() => setBilling('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-semibold ${
                  billing === 'monthly'
                    ? 'bg-[#2563EB] text-white'
                    : 'text-slate-600'
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setBilling('annual')}
                className={`px-6 py-2 rounded-md text-sm font-semibold ${
                  billing === 'annual'
                    ? 'bg-[#2563EB] text-white'
                    : 'text-slate-600'
                }`}
              >
                Annual (Save 20%)
              </button>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {/* Starter */}

            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Starter
              </h3>

              <div className="mb-5 md:mb-6">

                {billing === 'monthly' && (
                  <>
                    <span className="text-3xl md:text-4xl font-bold text-slate-900">$19</span>
                    <span className="text-slate-600 ml-2">per month</span>
                  </>
                )}

                {billing === 'annual' && (
                  <>
                    <span className="text-3xl md:text-4xl font-bold text-slate-900">$190</span>
                    <span className="text-slate-600 ml-2">per year</span>
                  </>
                )}

              </div>

              <ul className="space-y-3 mb-6">
                <li>✓ 25 certifications/month</li>
                <li>✓ 25MB per file</li>
                <li>✓ Single user</li>
                <li>✓ Dashboard access</li>
              </ul>

              <Link
                to={`/signup?vertical=auto&plan=starter&billing=${billing}`}
                className="block w-full px-5 py-3 text-white font-semibold rounded-lg text-center"
                style={{ background: '#2563EB' }}
              >
                Starter Plan
              </Link>

            </div>


            {/* Professional */}

            <div className="bg-white border-2 border-[#2563EB] rounded-xl p-6 md:p-8">

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Professional
              </h3>

              <div className="mb-5 md:mb-6">

                {billing === 'monthly' && (
                  <>
                    <span className="text-3xl md:text-4xl font-bold text-slate-900">$39</span>
                    <span className="text-slate-600 ml-2">per month</span>
                  </>
                )}

                {billing === 'annual' && (
                  <>
                    <span className="text-3xl md:text-4xl font-bold text-slate-900">$390</span>
                    <span className="text-slate-600 ml-2">per year</span>
                  </>
                )}

              </div>

              <ul className="space-y-3 mb-6">
                <li>✓ 70 certifications/month</li>
                <li>✓ 50MB per file</li>
                <li>✓ Multi-user access</li>
                <li>✓ Priority support</li>
              </ul>

              <Link
                to={`/signup?vertical=auto&plan=professional&billing=${billing}`}
                className="block w-full px-5 py-3 text-white font-semibold rounded-lg text-center"
                style={{ background: '#FF6B35' }}
              >
                Start Professional Plan
              </Link>

            </div>


            {/* Institutional */}

            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Institutional
              </h3>

              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold text-slate-900">Custom</span>
              </div>

              <ul className="space-y-3 mb-6">
                <li>✓ Volume pricing</li>
                <li>✓ API access</li>
                <li>✓ Batch processing</li>
                <li>✓ Dedicated support</li>
              </ul>

              <Link
                to="/contact?vertical=automotive"
                className="block w-full px-5 py-3 text-white font-semibold rounded-lg text-center"
                style={{ background: '#2563EB' }}
              >
                Request Institutional
              </Link>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}
