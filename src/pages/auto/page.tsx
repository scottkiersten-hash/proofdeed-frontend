import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Auto() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Pricing Section Only Shown Here For Brevity */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Automotive Certification Pricing
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Transparent pricing for vehicle record certification
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {/* Starter */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
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
            <div className="relative bg-white rounded-xl p-6 md:p-8"
                 style={{ border: '2px solid #2563EB' }}>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
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
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
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
