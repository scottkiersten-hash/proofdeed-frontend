import { useState, FormEvent } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const FORM_URL = 'https://readdy.ai/api/form/d6apr9fmvg9ih2c7aof0';

export default function Affiliates() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    website_url: '',
    industry: '',
    estimated_monthly_referrals: '',
    notes: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showCommissionDetails, setShowCommissionDetails] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!formData.name || !formData.company || !formData.email || !formData.industry) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const body = new URLSearchParams();
      body.append('name', formData.name);
      body.append('company', formData.company);
      body.append('email', formData.email);
      body.append('website_url', formData.website_url);
      body.append('industry', formData.industry);
      body.append('estimated_monthly_referrals', formData.estimated_monthly_referrals);
      body.append('notes', formData.notes);
      body.append('request_type', 'affiliate');

      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          website_url: '',
          industry: '',
          estimated_monthly_referrals: '',
          notes: '',
          honeypot: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById('affiliate-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCommission = () => {
    document.getElementById('commission-model')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20enterprise%20partnership%20meeting%20in%20modern%20glass%20office%20building%2C%20corporate%20executives%20reviewing%20digital%20contracts%20and%20revenue%20analytics%20on%20large%20screens%2C%20institutional%20collaboration%20with%20subtle%20warm%20lighting%20accents%2C%20clean%20minimalist%20business%20environment%20showing%20partnership%20growth%20charts%20and%20network%20connections&width=1920&height=800&seq=affiliate-hero-rebuild-001&orientation=landscape"
            alt="Partner with ProofDeed"
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(14, 26, 47, 0.40), rgba(14, 26, 47, 0.30))',
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Affiliate Program
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Partner With ProofDeed
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
              Earn recurring commissions by introducing document certification to legal, automotive,
              and institutional clients.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={scrollToForm}
                className="inline-block px-7 py-4 min-h-[56px] text-base font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-opacity hover:opacity-90"
                style={{ background: '#FF6B35', color: '#FFFFFF' }}
              >
                Apply to Become an Affiliate
              </button>
              <button
                onClick={scrollToCommission}
                className="text-base font-medium text-white/80 hover:text-white underline underline-offset-4 cursor-pointer transition-colors"
              >
                View Commission Structure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Who It&apos;s For
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professionals and organizations positioned to introduce certification infrastructure
              to their networks
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-xl border border-slate-200">
              <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center mb-5">
                <i className="ri-scales-3-line text-xl text-slate-700"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Law Firms</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Offer tamper-evident certification as a value-added service for contracts,
                affidavits, and court filings.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-slate-200">
              <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center mb-5">
                <i className="ri-home-4-line text-xl text-slate-700"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Title Companies</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Integrate certification into closing workflows and title insurance processes for
                clients.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-slate-200">
              <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center mb-5">
                <i className="ri-user-star-line text-xl text-slate-700"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Consultants</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Recommend certification infrastructure to enterprise and institutional clients
                across verticals.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-slate-200">
              <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center mb-5">
                <i className="ri-car-line text-xl text-slate-700"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Industry Professionals</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Automotive dealers, compliance providers, and SaaS platforms serving
                document-intensive industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Model */}
      <section id="commission-model" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Commission Model
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Recurring revenue share with transparent tracking and monthly payouts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <div className="text-5xl font-bold text-slate-900 mb-3">30%</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Recurring Subscription Commission
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Earn 30% recurring revenue on all subscription plans purchased by clients you refer.
                Commission continues as long as the client maintains an active subscription.
              </p>
              <button
                onClick={() => setShowCommissionDetails(!showCommissionDetails)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                {showCommissionDetails ? 'Hide Details' : 'View Detailed Breakdown'}
                <i className={`ri-arrow-${showCommissionDetails ? 'up' : 'down'}-s-line`}></i>
              </button>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <div className="text-5xl font-bold text-slate-900 mb-3">20%</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Enterprise Referral Bonus
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Receive 20% contract revenue share on enterprise and institutional deals you
                introduce. Quarterly settlements for custom implementations.
              </p>
              <button
                onClick={() => setShowCommissionDetails(!showCommissionDetails)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                {showCommissionDetails ? 'Hide Details' : 'View Detailed Breakdown'}
                <i className={`ri-arrow-${showCommissionDetails ? 'up' : 'down'}-s-line`}></i>
              </button>
            </div>
          </div>

          {/* Expanded Commission Details */}
          {showCommissionDetails && (
            <div className="max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Detailed Commission Breakdown
              </h3>
              
              <div className="space-y-8">
                {/* Subscription Commission Details */}
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i className="ri-refresh-line text-slate-700"></i>
                    30% Recurring Subscription Commission
                  </h4>
                  <div className="space-y-3 ml-8">
                    <div className="flex items-start gap-3">
                      <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                      <div>
                        <p className="text-slate-700 font-semibold">Starter Plan ($19/month)</p>
                        <p className="text-slate-600 text-sm">You earn: <strong>$5.70/month</strong> per active subscriber</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                      <div>
                        <p className="text-slate-700 font-semibold">Professional Plan ($39/month)</p>
                        <p className="text-slate-600 text-sm">You earn: <strong>$11.70/month</strong> per active subscriber</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                      <div>
                        <p className="text-slate-700 font-semibold">Commission Duration</p>
                        <p className="text-slate-600 text-sm">Recurring monthly payments continue for the lifetime of the subscription. If a client remains subscribed for 12 months, you earn 12 months of commission.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                      <div>
                        <p className="text-slate-700 font-semibold">Plan Upgrades</p>
                        <p className="text-slate-600 text-sm">If a referred client upgrades from Starter to Professional, your commission automatically increases to 30% of the new plan amount.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enterprise Commission Details */}
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i className="ri-building-line text-slate-700"></i>
                    20% Enterprise Referral Bonus
                  </h4>
                  <div className="space-y-3 ml-8">
                    <div className="flex items-start gap-3">
                      <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                      <div>
                        <p className="text-slate-700 font-semibold">Institutional Contracts</p>
                        <p className="text-slate-600 text-sm">Earn 20% of the total contract value for enterprise and government deals you introduce. Example: $50,000 annual contract = <strong>$10,000 commission</strong></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                      <div>
                        <p className="text-slate-700 font-semibold">Payment Schedule</p>
                        <p className="text-slate-600 text-sm">Enterprise commissions are paid quarterly following contract execution and initial payment receipt.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                      <div>
                        <p className="text-slate-700 font-semibold">Multi-Year Contracts</p>
                        <p className="text-slate-600 text-sm">For multi-year enterprise agreements, commission is calculated on the total contract value and paid according to the client's payment schedule.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                      <div>
                        <p className="text-slate-700 font-semibold">Custom Implementations</p>
                        <p className="text-slate-600 text-sm">Private instance deployments and API-only integrations qualify for the 20% enterprise rate.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Terms */}
                <div className="pt-6 border-t border-slate-300">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Additional Terms</h4>
                  <div className="space-y-2 ml-8">
                    <p className="text-slate-600 text-sm flex items-start gap-2">
                      <i className="ri-arrow-right-s-line text-slate-700 mt-0.5"></i>
                      <span><strong>No commission caps:</strong> Unlimited earning potential based on referral volume and client retention</span>
                    </p>
                    <p className="text-slate-600 text-sm flex items-start gap-2">
                      <i className="ri-arrow-right-s-line text-slate-700 mt-0.5"></i>
                      <span><strong>Attribution window:</strong> 90-day cookie tracking ensures you receive credit for referred clients</span>
                    </p>
                    <p className="text-slate-600 text-sm flex items-start gap-2">
                      <i className="ri-arrow-right-s-line text-slate-700 mt-0.5"></i>
                      <span><strong>Minimum payout:</strong> No minimum threshold — all earned commissions are paid monthly</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Transparent Tracking & Monthly Payouts */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Transparent Tracking &amp; Monthly Payouts
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200">
                <i className="ri-bar-chart-box-line text-xl text-slate-700"></i>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Real-Time Tracking Dashboard
                </h3>
                <p className="text-sm text-slate-600">
                  Monitor referrals, conversions, and earnings with full transparency
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200">
                <i className="ri-money-dollar-circle-line text-xl text-slate-700"></i>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Monthly Payouts</h3>
                <p className="text-sm text-slate-600">
                  Recurring monthly payouts via Stripe Connect with no minimum threshold
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200">
                <i className="ri-link text-xl text-slate-700"></i>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Unique Referral Links
                </h3>
                <p className="text-sm text-slate-600">
                  Personalized tracking links with attribution across all verticals
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200">
                <i className="ri-file-list-3-line text-xl text-slate-700"></i>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Detailed Reporting
                </h3>
                <p className="text-sm text-slate-600">
                  Monthly statements with full breakdown of referral activity and earnings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Brand Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Compliance &amp; Brand Guidelines
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Maintain institutional positioning across all partner communications
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                <p className="text-slate-700">
                  <strong>Infrastructure-focused messaging:</strong> Position ProofDeed as
                  certification infrastructure, not a consumer product.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                <p className="text-slate-700">
                  <strong>No speculative language:</strong> Avoid terms like
                  &quot;revolutionary,&quot; &quot;game-changing,&quot; or crypto-hype terminology.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                <p className="text-slate-700">
                  <strong>Accurate capability claims:</strong> Only reference features and
                  capabilities documented in official materials.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-check-line text-slate-700 text-lg mt-0.5"></i>
                <p className="text-slate-700">
                  <strong>Co-branded materials available:</strong> Use approved marketing collateral
                  and sales materials provided through the partner portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="affiliate-form" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Affiliate Application
            </h2>
            <p className="text-lg text-slate-600">
              Complete the form below. Our partnership team will respond within 48 hours.
            </p>
          </div>

          <form
            id="affiliate-application-form"
            data-readdy-form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl border border-slate-200"
          >
            {/* Honeypot */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-900 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Organization name"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-900 text-sm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-900 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Website</label>
                <input
                  type="url"
                  name="website_url"
                  value={formData.website_url}
                  onChange={handleChange}
                  placeholder="https://yourcompany.com"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-900 text-sm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Industry *
                </label>
                <select
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-900 text-sm"
                >
                  <option value="">Select industry</option>
                  <option value="law-firm">Law Firm</option>
                  <option value="title-escrow">Title &amp; Escrow</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="automotive">Automotive</option>
                  <option value="consulting">Consulting</option>
                  <option value="saas-platform">SaaS Platform</option>
                  <option value="compliance">Compliance Provider</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Estimated Monthly Referrals
                </label>
                <select
                  name="estimated_monthly_referrals"
                  value={formData.estimated_monthly_referrals}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-900 text-sm"
                >
                  <option value="">Select range</option>
                  <option value="1-10">1–10</option>
                  <option value="10-50">10–50</option>
                  <option value="50-200">50–200</option>
                  <option value="200+">200+</option>
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-900 mb-2">Notes</label>
              <textarea
                name="notes"
                rows={4}
                maxLength={500}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Tell us about your audience and how you plan to introduce ProofDeed"
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-900 resize-none text-sm"
              />
              <p className="text-xs text-slate-500 mt-1">{formData.notes.length}/500 characters</p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">
                  Application submitted successfully. Our partnership team will contact you within 48
                  hours.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">
                  Submission failed. Please try again or contact us directly at
                  info@proofdeed.com.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-7 py-4 min-h-[52px] text-base font-semibold rounded-lg transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              style={{ background: '#FF6B35', color: '#FFFFFF' }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Affiliate Application'}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
