import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Procurement() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Professional%20government%20procurement%20meeting%20in%20modern%20institutional%20boardroom%20with%20executives%20reviewing%20official%20documents%20and%20digital%20screens%20showing%20compliance%20data%2C%20bright%20natural%20lighting%20through%20large%20windows%2C%20clean%20corporate%20environment%20with%20warm%20tones%2C%20high%20quality%20professional%20photography%20showing%20diverse%20team%20of%20officials%20collaborating%20on%20enterprise%20technology%20evaluation%2C%20premium%20institutional%20aesthetic&width=1920&height=800&seq=procurement-hero-001&orientation=landscape"
            alt="Government and Enterprise Procurement"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(11, 20, 35, 0.40), rgba(14, 26, 47, 0.30))' }}></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Government &amp; Enterprise Procurement
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              ProofDeed Certification Infrastructure
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Verifiable digital certification infrastructure designed for government agencies, regulated institutions, legal organizations, and enterprise systems.
            </p>

            <Link
              to="/inquiry"
              className="inline-block px-7 py-4 text-base font-semibold rounded-lg whitespace-nowrap cursor-pointer transition-opacity hover:opacity-90"
              style={{ background: '#2563EB', color: '#FFFFFF' }}
            >
              Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 1: Institutional Architecture & Platform Positioning */}
      <section id="architecture" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Institutional Architecture &amp; Platform Positioning
          </h2>

          {/* Platform Positioning */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Platform Positioning</h3>
            <div className="prose prose-slate max-w-none">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                ProofDeed operates as a non-custodial, non-authoritative certification and verification layer.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                It does not replace systems of record, modify source documents, or assume ownership or control of institutional data.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                ProofDeed provides independently verifiable cryptographic evidence that a record existed in a specific state at a specific point in time.
              </p>
            </div>
          </div>

          {/* Architecture Overview */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Architecture Overview</h3>
            <div className="prose prose-slate max-w-none">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                ProofDeed generates a SHA-256 cryptographic hash of submitted records.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 mb-6">
                <h4 className="text-lg font-bold text-slate-900 mb-4">The hash is:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-base text-slate-700">Time-stamped</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-base text-slate-700">Anchored to a public blockchain network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-base text-slate-700">Assigned a unique verification ID</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-base text-slate-700">Independently verifiable without requiring access to the original document</span>
                  </li>
                </ul>
              </div>

              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                No document content is written to the blockchain. Only the cryptographic hash and minimal verification metadata are anchored.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                This allows third parties to independently confirm record integrity without exposing sensitive data.
              </p>
            </div>
          </div>

          {/* Legal & Evidentiary Position */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Legal &amp; Evidentiary Position</h3>
            <div className="prose prose-slate max-w-none">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                ProofDeed certifications support audit, compliance, transparency, and dispute resolution workflows.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                They do not constitute legal advice, notarization, or admissibility determinations.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Acceptance and evidentiary weight are determined by the reviewing authority, court, or regulatory body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Deployment, Procurement & Institutional Engagement */}
      <section id="deployment" className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Deployment, Procurement &amp; Institutional Engagement
          </h2>

          {/* Deployment Models */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Deployment Models</h3>
            <div className="grid gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-cloud-line text-lg text-slate-700"></i>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Secure SaaS</h4>
                  <p className="text-sm md:text-base text-slate-600">Managed infrastructure with enterprise security</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-server-line text-lg text-slate-700"></i>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Private Instance</h4>
                  <p className="text-sm md:text-base text-slate-600">Dedicated infrastructure for controlled environments</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-plug-line text-lg text-slate-700"></i>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">API-Only Integration</h4>
                  <p className="text-sm md:text-base text-slate-600">Headless certification service</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-settings-3-line text-lg text-slate-700"></i>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Custom Enterprise Configurations</h4>
                  <p className="text-sm md:text-base text-slate-600">Tailored deployment architectures</p>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Capability */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Integration Capability</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6">
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">REST API</h4>
                <p className="text-sm md:text-base text-slate-600">Programmatic integration for automated workflows</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6">
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">Batch Processing</h4>
                <p className="text-sm md:text-base text-slate-600">High-volume certification interfaces</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6">
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">Secure Upload Workflows</h4>
                <p className="text-sm md:text-base text-slate-600">User-facing submission portals</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6">
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">Embedded Verification Rendering</h4>
                <p className="text-sm md:text-base text-slate-600">White-label certificate display</p>
              </div>
            </div>
          </div>

          {/* Procurement Pathways */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Procurement Pathways</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6">
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">Pilot / POC</h4>
                <p className="text-sm md:text-base text-slate-600">Limited-scope engagements for evaluation</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6">
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">Enterprise Subscription</h4>
                <p className="text-sm md:text-base text-slate-600">Ongoing service agreements</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6">
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">RFP / RFQ</h4>
                <p className="text-sm md:text-base text-slate-600">Formal procurement processes</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6">
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">Prime or Subcontract</h4>
                <p className="text-sm md:text-base text-slate-600">Partnership arrangements</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 sm:col-span-2">
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">Custom Institutional Pricing</h4>
                <p className="text-sm md:text-base text-slate-600">Flexible models aligned to organizational requirements (not publicly displayed)</p>
              </div>
            </div>
          </div>

          {/* Service Levels & Support */}
          <div className="mb-12" id="service-levels">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Service Levels &amp; Support</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 md:p-6 bg-white border border-slate-200 rounded-xl">
                <i className="ri-file-text-line text-xl text-slate-700 mt-1"></i>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Defined SLAs</h4>
                  <p className="text-sm md:text-base text-slate-600">Contractual uptime and performance guarantees</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 md:p-6 bg-white border border-slate-200 rounded-xl">
                <i className="ri-customer-service-2-line text-xl text-slate-700 mt-1"></i>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Dedicated Technical Support</h4>
                  <p className="text-sm md:text-base text-slate-600">Priority channels for operational assistance</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 md:p-6 bg-white border border-slate-200 rounded-xl">
                <i className="ri-alert-line text-xl text-slate-700 mt-1"></i>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Escalation Paths</h4>
                  <p className="text-sm md:text-base text-slate-600">Defined procedures for operational issues</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 md:p-6 bg-white border border-slate-200 rounded-xl">
                <i className="ri-refresh-line text-xl text-slate-700 mt-1"></i>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Change Management</h4>
                  <p className="text-sm md:text-base text-slate-600">Coordination for planned updates and maintenance</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 md:p-6 bg-white border border-slate-200 rounded-xl">
                <i className="ri-book-open-line text-xl text-slate-700 mt-1"></i>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Integration Assistance</h4>
                  <p className="text-sm md:text-base text-slate-600">Technical resources and onboarding support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Controls */}
          <div className="mb-12" id="security-controls">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Security Controls</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-5 bg-white border border-slate-200 rounded-xl">
                <i className="ri-shield-check-line text-xl text-slate-700 mt-1"></i>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">TLS 1.2+</h4>
                  <p className="text-sm text-slate-600">Encrypted data transmission</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white border border-slate-200 rounded-xl">
                <i className="ri-user-settings-line text-xl text-slate-700 mt-1"></i>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">Role-Based Access Controls</h4>
                  <p className="text-sm text-slate-600">Granular permission management</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white border border-slate-200 rounded-xl">
                <i className="ri-file-list-3-line text-xl text-slate-700 mt-1"></i>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">Immutable Audit Logging</h4>
                  <p className="text-sm text-slate-600">Complete activity tracking</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white border border-slate-200 rounded-xl">
                <i className="ri-admin-line text-xl text-slate-700 mt-1"></i>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">Controlled Admin Access</h4>
                  <p className="text-sm text-slate-600">Limited privileged operations</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white border border-slate-200 rounded-xl sm:col-span-2">
                <i className="ri-radar-line text-xl text-slate-700 mt-1"></i>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">Infrastructure Monitoring</h4>
                  <p className="text-sm text-slate-600">Real-time operational visibility</p>
                </div>
              </div>
            </div>
          </div>

          {/* Disaster Recovery & Business Continuity */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">Disaster Recovery &amp; Business Continuity</h3>
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
                ProofDeed is designed with operational resilience as a core principle. The platform operates on redundant infrastructure with environment isolation and continuous monitoring to ensure service stability.
              </p>

              <h4 className="text-base md:text-lg font-bold text-slate-900 mb-3">Infrastructure Redundancy</h4>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
                ProofDeed operates within managed cloud infrastructure designed to minimize single points of failure. Services are containerized and can be redeployed rapidly in the event of interruption.
              </p>

              <h4 className="text-base md:text-lg font-bold text-slate-900 mb-3">Backup &amp; Restoration</h4>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
                Configuration and operational data are backed up on a scheduled basis. Restoration procedures are documented and reviewed during institutional onboarding.
              </p>

              <h4 className="text-base md:text-lg font-bold text-slate-900 mb-3">Blockchain Continuity</h4>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
                Because certification proofs are anchored to a public blockchain network (Polygon PoS), verification continuity does not depend solely on application infrastructure. Anchored hashes remain independently verifiable even during service interruption.
              </p>

              <h4 className="text-base md:text-lg font-bold text-slate-900 mb-3">Monitoring &amp; Recovery</h4>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6">
                Infrastructure-level monitoring and alerting systems support rapid response to service degradation. Recovery planning procedures are reviewed with enterprise clients where required.
              </p>

              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Operational resilience documentation is available within the complete Technical Package.
              </p>
            </div>
          </div>

          {/* Data Residency */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Data Residency</h3>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Configurable based on institutional requirements and applicable regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Package Download */}
      <section id="technical-package" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-6">
            <i className="ri-file-download-line text-3xl text-slate-700"></i>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Complete Technical Package
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Download the full procurement documentation bundle including architecture, security, compliance alignment, deployment models, and integration specifications.
          </p>
          <Link
            to="/technical-package"
            className="inline-flex items-center gap-2 px-7 py-4 bg-slate-900 text-white text-base font-semibold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-file-text-line text-xl"></i>
            View Technical Package
          </Link>
          <p className="text-sm text-slate-500 mt-4">
            No email capture required. Direct access.
          </p>
        </div>
      </section>

      {/* RFP Framework Download */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-6">
            <i className="ri-file-text-line text-3xl text-slate-700"></i>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Structured RFP Response Framework
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Download our structured RFP response framework template with pre-populated technical specifications, compliance documentation references, and integration details.
          </p>
          <Link
            to="/rfp-framework"
            className="inline-flex items-center gap-2 px-7 py-4 bg-slate-900 text-white text-base font-semibold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-file-text-line text-xl"></i>
            View RFP Response Framework
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Frequently Asked Procurement Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Does ProofDeed replace our system of record?
              </h3>
              <p className="text-base text-slate-700">
                No. ProofDeed operates as an independent certification layer.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Is document content stored on-chain?
              </h3>
              <p className="text-base text-slate-700">
                No. Only cryptographic hashes and verification metadata are anchored.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Can ProofDeed operate in a private environment?
              </h3>
              <p className="text-base text-slate-700">
                Yes. Private and controlled deployments are available.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Are SLAs available?
              </h3>
              <p className="text-base text-slate-700">
                Yes. Defined service levels are available for enterprise engagements.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                Does ProofDeed provide legal advice?
              </h3>
              <p className="text-base text-slate-700">
                No. ProofDeed provides cryptographic certification only.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
