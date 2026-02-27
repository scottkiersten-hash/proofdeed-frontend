import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Auto() {

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
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Independent Vehicle Record Certification
            </h1>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Automotive Certification Pricing
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Transparent pricing for vehicle record certification
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            {/* Starter */}
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Starter
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$19</span>
                <span className="text-slate-600 ml-2">per month</span>
              </div>
              <Link
                to="/signup?vertical=auto&plan=starter"
                className="block w-full px-7 py-3.5 text-white font-semibold rounded-lg text-center"
                style={{ background: '#2563EB' }}
              >
                Starter Plan
              </Link>
            </div>

            {/* Professional */}
            <div className="relative bg-white rounded-xl p-8"
                 style={{ border: '2px solid #2563EB' }}>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Professional
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">$39</span>
                <span className="text-slate-600 ml-2">per month</span>
              </div>
              <Link
                to="/signup?vertical=auto&plan=pro"
                className="block w-full px-7 py-3.5 text-white font-semibold rounded-lg text-center"
                style={{ background: '#FF6B35' }}
              >
                Start Professional Plan
              </Link>
            </div>

            {/* Institutional */}
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Institutional
              </h3>
              <Link
                to="/contact?vertical=auto"
                className="block w-full px-7 py-3.5 text-white font-semibold rounded-lg text-center"
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
