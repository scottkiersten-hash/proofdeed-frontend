import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function RfpFramework() {
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
              Structured RFP Response Framework
            </h1>
            <p className="text-base text-slate-500">
              Procurement &amp; Institutional Review Template
            </p>
          </div>

          {/* Introduction */}
          <p className="text-base text-slate-700 leading-relaxed mb-10">
            This framework provides standardized language for procurement and institutional review of ProofDeed certification infrastructure.
          </p>

          {/* Section 1 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-3">
              <span className="text-sm font-bold text-slate-400 mt-0.5">01</span>
              <h2 className="text-lg font-bold text-slate-900">Executive Overview</h2>
            </div>
            <div className="ml-10">
              <p className="text-base text-slate-700 leading-relaxed">
                ProofDeed is a non-custodial cryptographic certification platform that generates SHA-256 hashes of submitted records and anchors them to a public blockchain network (Polygon PoS) for independent verification. No document content is stored or written to the blockchain.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-3">
              <span className="text-sm font-bold text-slate-400 mt-0.5">02</span>
              <h2 className="text-lg font-bold text-slate-900">System Architecture</h2>
            </div>
            <div className="ml-10">
              <p className="text-base text-slate-700 leading-relaxed mb-3">
                Core components include cryptographic hash generation, blockchain anchoring, verification ID assignment, and certificate issuance. The platform operates as a stateless certification layer with no persistent document storage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base text-slate-700">SHA-256 cryptographic hashing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base text-slate-700">Polygon PoS blockchain anchoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base text-slate-700">Unique verification ID generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base text-slate-700">Verifiable certificate issuance</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-3">
              <span className="text-sm font-bold text-slate-400 mt-0.5">03</span>
              <h2 className="text-lg font-bold text-slate-900">Security Controls</h2>
            </div>
            <div className="ml-10">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base text-slate-700">TLS 1.2+ encryption for all data transmission</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base text-slate-700">Role-based access controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base text-slate-700">Immutable audit logging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base text-slate-700">Controlled administrative access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base text-slate-700">Infrastructure monitoring</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-3">
              <span className="text-sm font-bold text-slate-400 mt-0.5">04</span>
              <h2 className="text-lg font-bold text-slate-900">Deployment Models</h2>
            </div>
            <div className="ml-10">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base text-slate-700">Secure SaaS (managed infrastructure)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base text-slate-700">Private instance (dedicated environment)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base text-slate-700">API-only integration (headless)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base text-slate-700">Enterprise custom deployment</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-3">
              <span className="text-sm font-bold text-slate-400 mt-0.5">05</span>
              <h2 className="text-lg font-bold text-slate-900">API &amp; Integration</h2>
            </div>
            <div className="ml-10">
              <p className="text-base text-slate-700 leading-relaxed">
                ProofDeed provides REST API access for programmatic certification, batch processing interfaces for high-volume workflows, secure upload workflows for user-facing portals, and embedded verification rendering for white-label certificate display.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-3">
              <span className="text-sm font-bold text-slate-400 mt-0.5">06</span>
              <h2 className="text-lg font-bold text-slate-900">Disaster Recovery &amp; Continuity</h2>
            </div>
            <div className="ml-10">
              <p className="text-base text-slate-700 leading-relaxed">
                The platform operates on redundant cloud infrastructure with environment isolation. Backup and restoration procedures are documented and reviewed during institutional onboarding. Blockchain-anchored hashes remain independently verifiable even during service interruption.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <div className="flex items-start gap-4 mb-3">
              <span className="text-sm font-bold text-slate-400 mt-0.5">07</span>
              <h2 className="text-lg font-bold text-slate-900">Service Levels</h2>
            </div>
            <div className="ml-10">
              <p className="text-base text-slate-700 leading-relaxed">
                Defined SLAs are available for enterprise engagements. Service level commitments include uptime guarantees, response time targets, escalation paths, and change management coordination. Specific terms are established within written agreements.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <div className="flex items-start gap-4 mb-3">
              <span className="text-sm font-bold text-slate-400 mt-0.5">08</span>
              <h2 className="text-lg font-bold text-slate-900">Compliance Positioning</h2>
            </div>
            <div className="ml-10">
              <p className="text-base text-slate-700 leading-relaxed">
                ProofDeed is designed with audit-ready architecture, minimal metadata exposure, and support for regulated workflows. The platform does not replace systems of record or provide legal determinations. Compliance alignment is evaluated on a per-engagement basis.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-10 border-t border-slate-200 pt-8">
            <p className="text-base text-slate-700">
              For customized RFP engagement contact: <a href="mailto:info@proofdeed.com" className="text-slate-900 font-medium hover:underline cursor-pointer">info@proofdeed.com</a>
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
