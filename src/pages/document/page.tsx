import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function InstitutionalCertification() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section (Restored Image Background) */}
      <section className="relative py-28 overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20business%20meeting%20with%20legal%20and%20finance%20professionals%20reviewing%20documents%20in%20bright%20modern%20office%20environment%20natural%20light%20institutional%20atmosphere%20clean%20corporate%20aesthetic&width=1920&height=900&orientation=landscape"
            alt="Institutional Certification"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-white">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider">
                Institutional Certification
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Digital Certification for Regulated Transactions
            </h1>

            <p className="text-xl mb-8 leading-relaxed">
              Cryptographic integrity certification for banking documentation,
              legal records, real estate transfers, financial instruments,
              and institutional documentation — without storing document contents.
            </p>

            <Link
              to="#pricing"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-lg transition-opacity hover:opacity-90"
              style={{ background: '#2563EB', color: '#FFFFFF' }}
            >
              View Certification Plans
            </Link>

          </div>
        </div>
      </section>

      {/* Pricing Section (Restored Rich Layout) */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Certification Plans
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Starter */}
            <div className="bg-white border border-slate-200 rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="mb-8">
                <span className="text-5xl font-bold">$19</span>
                <span className="ml-2 text-slate-600">per month</span>
              </div>

              <ul className="space-y-4 text-slate-700 mb-10">
                <li>✓ 25 certifications per month</li>
                <li>✓ 25MB per file</li>
                <li>✓ Single user</li>
                <li>✓ Dashboard access</li>
              </ul>

              <Link
                to="/signup?plan=starter&vertical=document&billing=monthly"
                className="block w-full py-3 text-white text-center font-semibold rounded-lg"
                style={{ background: '#2563EB' }}
              >
                Start Starter
              </Link>
            </div>

            {/* Professional */}
            <div className="relative bg-white border-2 border-blue-600 rounded-2xl p-10 shadow-xl">

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                Preferred
              </div>

              <h3 className="text-2xl font-bold mb-4">Professional</h3>

              <div className="mb-8">
                <span className="text-5xl font-bold">$39</span>
                <span className="ml-2 text-slate-600">per month</span>
              </div>

              <ul className="space-y-4 text-slate-700 mb-10">
                <li>✓ 70 certifications per month</li>
                <li>✓ 50MB per file</li>
                <li>✓ Multi-user access</li>
                <li>✓ Priority support</li>
              </ul>

              <Link
                to="/signup?plan=pro&vertical=document&billing=monthly"
                className="block w-full py-3 text-white text-center font-semibold rounded-lg"
                style={{ background: '#FF6B35' }}
              >
                Start Professional
              </Link>
            </div>

            {/* Institutional */}
            <div className="bg-white border border-slate-200 rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-4">Institutional</h3>

              <div className="mb-8">
                <span className="text-5xl font-bold">Custom</span>
              </div>

              <ul className="space-y-4 text-slate-700 mb-10">
                <li>✓ Volume pricing</li>
                <li>✓ API integration</li>
                <li>✓ Batch processing</li>
                <li>✓ SLA guarantees</li>
                <li>✓ Dedicated support</li>
              </ul>

              <Link
                to="/signup?plan=enterprise&vertical=document"
                className="block w-full py-3 text-white text-center font-semibold rounded-lg"
                style={{ background: '#2563EB' }}
              >
                Configure Institutional
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works (Restored) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            How Certification Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            <div>
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">1</div>
              <p>SHA-256 fingerprint generated</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">2</div>
              <p>Timestamp recorded</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">3</div>
              <p>Anchored to blockchain</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">4</div>
              <p>Permanent verification ID issued</p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
