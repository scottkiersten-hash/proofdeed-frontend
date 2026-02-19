import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function TechnicalPackage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          {/* Back Link */}
          <Link
            to="/procurement"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer mb-8"
          >
            <i className="ri-arrow-left-line text-lg"></i>
            Back to Procurement
          </Link>

          {/* Document Header */}
          <div className="border-b border-slate-200 pb-8 mb-10">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
              ProofDeed
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3">
              Government &amp; Institutional Technical Package
            </h1>
            <p className="text-base text-slate-500">
              Version 1.0
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg text-slate-700 font-medium mb-10">
            Independent, Verifiable Certification Infrastructure
          </p>

          {/* Executive Summary */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Executive Summary</h2>
            <p className="text-base text-slate-700 leading-relaxed">
              ProofDeed provides tamper-evident cryptographic certification for documents and institutional records without storing document contents.
            </p>
          </section>

          {/* Core Architecture */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Core Architecture</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">SHA-256 hashing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">Public blockchain anchoring (Polygon PoS)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">Immutable timestamps</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">Unique verification IDs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">No document storage</span>
              </li>
            </ul>
          </section>

          {/* Security Model */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Security Model</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">TLS 1.2+ encryption</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">No document content on-chain</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">Stateless API</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">Environment-isolated infrastructure</span>
              </li>
            </ul>
          </section>

          {/* Deployment Models */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Deployment Models</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">Secure SaaS</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">Private instance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">API-only integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">Enterprise custom deployment</span>
              </li>
            </ul>
          </section>

          {/* Disaster Recovery */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Disaster Recovery &amp; Business Continuity</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">Cloud infrastructure redundancy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">Backup procedures</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">Incident response framework</span>
              </li>
            </ul>
          </section>

          {/* Compliance Alignment */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Compliance Alignment</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">Audit-ready architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">Minimal metadata exposure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base text-slate-700">Designed for regulated workflows</span>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="mb-10 border-t border-slate-200 pt-8">
            <p className="text-base text-slate-700">
              Contact: <a href="mailto:info@proofdeed.com" className="text-slate-900 font-medium hover:underline cursor-pointer">info@proofdeed.com</a>
            </p>
          </section>

          {/* Disclaimer */}
          <div className="border-t border-slate-200 pt-6">
            <p className="text-sm text-slate-500 leading-relaxed">
              ProofDeed provides cryptographic certification services only. Not a law firm, escrow provider, or government authority.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
