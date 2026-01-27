import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  
  // Verify section state
  const [verifyHash, setVerifyHash] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    proofId: string;
    timestamp: string;
    verificationText: string;
  } | null>(null);
  const [verificationError, setVerificationError] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const backendUrl = 'https://whale-app-9azz6.ondigitalocean.app/';

  const handleGetProofClick = () => {
    setShowEmailModal(true);
    setEmailError('');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email) {
      setEmailError('Email address is required');
      return;
    }
    
    if (!email.includes('@') || !email.includes('.') || email.length < 5) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Store email in localStorage for returning users
    localStorage.setItem('proofdeed_user_email', email);
    
    // Close modal and scroll to pricing
    setShowEmailModal(false);
    setTimeout(() => {
      scrollToPricing();
    }, 300);
  };

  const closeModal = () => {
    setShowEmailModal(false);
    setEmailError('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Beta Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold">Beta Live</span>
          </div>
          <span className="text-white/60">•</span>
          <span className="text-sm font-medium">Early access only</span>
          <span className="text-white/60">•</span>
          <span className="text-sm">Core verification features launching soon</span>
        </div>
      </div>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 px-6">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Started with ProofDeed</h3>
              <p className="text-sm text-slate-600">Enter your email to view pricing and create your first proof</p>
            </div>

            <form onSubmit={handleEmailSubmit}>
              <div className="mb-4">
                <label htmlFor="modal-email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="modal-email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 text-sm border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  autoFocus
                />
                {emailError && (
                  <p className="text-sm text-red-600 mt-2">{emailError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 text-base font-semibold text-white bg-[#F59E0B] rounded-lg hover:bg-[#D97706] transition-colors shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Continue to Pricing
              </button>
            </form>

            <p className="text-xs text-slate-500 mt-4 text-center">
              Your email is used only to deliver proof certificates. We don't spam.
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20business%20person%20reviewing%20important%20legal%20real%20estate%20documents%20and%20property%20deed%20papers%20on%20modern%20desk%20in%20bright%20office%20with%20natural%20window%20light%2C%20clean%20minimalist%20workspace%2C%20shallow%20depth%20of%20field%2C%20corporate%20photography%20style%2C%20high%20quality%20professional%20image%20with%20soft%20blue%20color%20grading%20and%20professional%20atmosphere&width=1920&height=1080&seq=proofdeed-hero-documents-001&orientation=landscape"
            alt="Professional reviewing real estate documents"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/65 to-slate-900/75"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
          <div className="mb-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-white mb-3 leading-tight">
              ProofDeed
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6">
              Legal-Grade Proof
            </h2>
            <p className="text-2xl md:text-3xl text-white font-semibold max-w-4xl mx-auto leading-relaxed mb-6">
              If a document matters, proving it existed matters more.
            </p>
            <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              ProofDeed creates permanent, tamper-proof proof of existence for your most important documents — anchored to the blockchain and independently verifiable forever.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button
              onClick={handleGetProofClick}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#F59E0B] rounded-lg hover:bg-[#D97706] transition-colors shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Get Proof
            </button>
          </div>
        </div>
      </section>

      {/* Core Truth Section - Digital Files Are Easy to Save */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Digital files are easy to save.<br />
            They're also easy to dispute.
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed mb-6">
            Courts, insurers, buyers, lenders, and auditors don't trust screenshots, PDFs, emails, or cloud timestamps.
          </p>
          <p className="text-2xl font-bold text-slate-900 mb-8">
            They trust independent, immutable proof.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            ProofDeed gives you that proof — without crypto wallets, technical knowledge, or long-term contracts.
          </p>
        </div>
      </section>

      {/* Saving vs Proving Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 border-2 border-slate-300 rounded-2xl p-8">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-6">
                <i className="ri-close-line text-2xl text-slate-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Saving a file proves you have it.</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                It does not prove when it existed, who owned it, or that it wasn't changed.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 border-2 border-cyan-300 rounded-2xl p-8 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                <i className="ri-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">ProofDeed creates permanent proof.</h3>
              <p className="text-lg text-white/95 leading-relaxed">
                Tamper-proof proof of existence for your most important documents — anchored to the blockchain and independently verifiable forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Simple + Credible */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How ProofDeed Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Upload your document</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Contracts, deeds, agreements, designs, records, or files of any kind.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">We generate a cryptographic fingerprint</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Your document is never altered or stored publicly.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fingerprint anchored to blockchain</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Creating a permanent, time-stamped proof that cannot be changed or deleted.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 font-bold text-2xl">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Verify anytime, independently</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Even years later — without relying on us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When People Actually Need ProofDeed */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              When people actually need ProofDeed
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Property & Real Estate Card */}
            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-default">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20title%20company%20office%20with%20escrow%20documents%20and%20property%20deed%20papers%20on%20desk%2C%20clean%20modern%20workspace%20with%20legal%20professionals%20reviewing%20closing%20paperwork%2C%20bright%20natural%20lighting%2C%20corporate%20real%20estate%20photography%20style%20with%20professional%20atmosphere&width=800&height=600&seq=proofdeed-title-escrow-001&orientation=landscape"
                alt="Property and real estate professionals"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Property &amp; Real Estate
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  Prove ownership records, disclosures, agreements, and timelines.
                </p>
              </div>
            </div>

            {/* Legal & Disputes Card */}
            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-default">
              <img 
                src="https://readdy.ai/api/search-image?query=Legal%20compliance%20professionals%20and%20attorneys%20reviewing%20audit%20documents%20and%20legal%20paperwork%20in%20modern%20law%20firm%20office%2C%20professional%20workspace%20with%20compliance%20files%20and%20legal%20documents%2C%20corporate%20photography%20with%20clean%20professional%20lighting&width=800&height=600&seq=proofdeed-legal-compliance-001&orientation=landscape"
                alt="Legal and disputes professionals"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Legal &amp; Disputes
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  Demonstrate that a document existed before a claim, change, or conflict.
                </p>
              </div>
            </div>

            {/* Business & IP Card */}
            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-default">
              <img 
                src="https://readdy.ai/api/search-image?query=Business%20professionals%20reviewing%20intellectual%20property%20documents%20and%20contracts%20in%20modern%20corporate%20office%2C%20clean%20workspace%20with%20design%20proposals%20and%20legal%20agreements%2C%20professional%20business%20photography%20with%20natural%20lighting&width=800&height=600&seq=proofdeed-business-ip-001&orientation=landscape"
                alt="Business and IP professionals"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Business &amp; IP
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  Protect contracts, proposals, designs, and internal records.
                </p>
              </div>
            </div>

            {/* Personal Records Card */}
            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-default">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20homeowner%20or%20property%20investor%20reviewing%20important%20property%20deed%20documents%20and%20ownership%20papers%20at%20home%20office%2C%20organized%20workspace%20with%20legal%20documents%2C%20warm%20natural%20lighting%2C%20lifestyle%20photography%20showing%20property%20ownership%20documentation&width=800&height=600&seq=proofdeed-property-owners-001&orientation=landscape"
                alt="Personal records and estate planning"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Personal Records
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  Estate planning, family agreements, certifications, and sensitive files.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Blockchain proof has already been used globally to establish timelines, prevent fraud, and resolve disputes where traditional records failed.
            </p>
          </div>
        </div>
      </section>

      {/* Tamper-Evidence Visual */}
      <section className="py-6 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Verify a Document at Any Time
            </h2>
            <p className="text-sm text-slate-300 mb-2 max-w-2xl mx-auto">
              Upload a document to verify it. ProofDeed compares the hash to blockchain records. Match = unchanged. Mismatch = altered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Original Document - Match */}
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-300">verification_check.log</span>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs font-mono text-emerald-400">VERIFIED</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-slate-900/60 rounded p-2 border border-slate-700/40">
                  <div className="text-xs font-mono text-slate-400 mb-1">document.pdf</div>
                  <div className="text-xs text-slate-500">Property: 123 Main St | Owner: John Smith</div>
                </div>

                <div className="flex items-center justify-center py-1">
                  <i className="ri-arrow-down-line text-slate-600 text-sm"></i>
                </div>

                <div className="bg-slate-900/60 rounded p-2 border border-emerald-900/20">
                  <div className="text-xs font-mono text-slate-400 mb-1">SHA-256 Hash</div>
                  <code className="text-xs font-mono text-emerald-400 break-all leading-relaxed">
                    a3b2c1d4e5f6789...
                  </code>
                </div>

                <div className="flex items-center space-x-2 bg-emerald-950/20 border border-emerald-800/20 rounded p-2">
                  <div className="w-4 h-4 bg-emerald-500/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-xs text-emerald-400"></i>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">Hash match confirmed</span>
                </div>
              </div>
            </div>

            {/* Modified Document - Mismatch */}
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-300">verification_check.log</span>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono text-red-400">FAILED</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-slate-900/60 rounded p-2 border border-red-900/20">
                  <div className="text-xs font-mono text-slate-400 mb-1">document.pdf</div>
                  <div className="text-xs text-slate-500">Property: 123 Main St | Owner: <span className="text-red-400">Jane Doe</span></div>
                </div>

                <div className="flex items-center justify-center py-1">
                  <i className="ri-arrow-down-line text-slate-600 text-sm"></i>
                </div>

                <div className="bg-slate-900/60 rounded p-2 border border-red-900/20">
                  <div className="text-xs font-mono text-slate-400 mb-1">SHA-256 Hash</div>
                  <code className="text-xs font-mono text-red-400 break-all leading-relaxed">
                    x9y8z7w6v5u4321...
                  </code>
                </div>

                <div className="flex items-center space-x-2 bg-red-950/20 border border-red-800/20 rounded p-2">
                  <div className="w-4 h-4 bg-red-500/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-close-line text-xs text-red-400"></i>
                  </div>
                  <span className="text-xs font-mono text-red-400">Hash mismatch detected</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs font-mono text-slate-400">
              Even a single character change produces a completely different hash
            </p>
          </div>
        </div>
      </section>

      {/* Independent Proof Section - WITH INTEGRATED MESSAGING */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Independent Proof — Without Storing Documents
                </h2>
                <p className="text-xl font-bold text-slate-900 mb-4">
                  This isn't storage. It's evidence.
                </p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-close-line text-sm text-slate-600"></i>
                  </div>
                  <p className="text-base text-slate-700">Cloud drives can be altered.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-close-line text-sm text-slate-600"></i>
                  </div>
                  <p className="text-base text-slate-700">Emails can be forged.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-close-line text-sm text-slate-600"></i>
                  </div>
                  <p className="text-base text-slate-700">Files can be replaced.</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 border-2 border-cyan-300 rounded-xl p-6 mb-6 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-check-line text-lg text-white"></i>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white mb-2">Blockchain proof can't.</p>
                    <p className="text-base text-white/95">That's the difference.</p>
                  </div>
                </div>
              </div>
              <p className="text-base text-slate-600 leading-relaxed">
                ProofDeed generates a cryptographic hash and timestamp. Your document never leaves your control.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Abstract%20technology%20visualization%20showing%20secure%20document%20processing%20with%20cryptographic%20hashing%20symbols%2C%20digital%20fingerprints%20flowing%20from%20documents%20into%20blockchain%20nodes%2C%20clean%20minimalist%20design%20with%20blue%20and%20gray%20tones%2C%20professional%20tech%20infrastructure%20aesthetic%2C%20no%20text%20overlays&width=800&height=600&seq=proofdeed-hash-tech-001&orientation=landscape"
                alt="Cryptographic hashing visualization"
                className="w-full h-full rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Immutable by Design Section - WITH INTEGRATED MESSAGING */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Digital%20blockchain%20visualization%20with%20interconnected%20immutable%20blocks%2C%20permanent%20audit%20trail%20represented%20by%20linked%20cryptographic%20chains%2C%20modern%20tech%20aesthetic%20with%20subtle%20blue%20lighting%2C%20professional%20infrastructure%20design%20showing%20permanence%20and%20security&width=800&height=600&seq=proofdeed-blockchain-immutable-001&orientation=landscape"
                alt="Immutable blockchain infrastructure"
                className="w-full h-full rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Immutable by Design
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Once created, proofs cannot be altered, deleted, or rewritten.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Each proof forms part of a permanent audit trail.
              </p>
              <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600 border-2 border-cyan-300 rounded-xl p-6 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                <p className="text-base font-semibold text-white mb-2">
                  Traditional storage can fail. Blockchain proof endures.
                </p>
                <p className="text-sm text-white/95">
                  Your proof exists independently — verifiable by anyone, anywhere, without relying on ProofDeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Legal Teams Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Built for Legal, Title &amp; Compliance Teams
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Designed for organizations that require neutral, verifiable evidence — not signatures or storage.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-sm text-blue-600"></i>
                  </div>
                  <span className="text-slate-700">Audit-ready verification reports</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-sm text-blue-600"></i>
                  </div>
                  <span className="text-slate-700">Independent third-party verification</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-sm text-blue-600"></i>
                  </div>
                  <span className="text-slate-700">Immutable blockchain timestamps</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-sm text-blue-600"></i>
                  </div>
                  <span className="text-slate-700">No document custody or storage risk</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20legal%20team%20reviewing%20compliance%20documents%20in%20modern%20law%20office%2C%20title%20company%20professionals%20working%20with%20property%20documents%2C%20clean%20corporate%20environment%20with%20laptops%20and%20legal%20papers%2C%20professional%20business%20photography%20with%20natural%20lighting&width=800&height=600&seq=proofdeed-legal-teams-001&orientation=landscape"
                alt="Legal and compliance professionals at work"
                className="w-full h-full rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Simple pricing for permanent proof
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Each proof creates an immutable record anchored in time.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* One-Time Proof - New Option */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-slate-300 transition-colors">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">One-Time Proof</h3>
                <p className="text-slate-600 leading-relaxed">Single-document proof, delivered by email</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-slate-900">$9</span>
                  <span className="text-slate-500 ml-2">one-time</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">One document upload</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Email required</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">No password</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">No full account creation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Proof certificate delivered via email</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Proof certificates can be independently verified at any time</span>
                </li>
              </ul>

              <a 
                href={backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-8 py-4 text-base font-semibold text-white bg-[#F59E0B] rounded-lg hover:bg-[#D97706] transition-colors shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer text-center"
              >
                Create One-Time Proof
              </a>
            </div>

            {/* Basic Plan */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-slate-300 transition-colors">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Basic</h3>
                <p className="text-slate-600 leading-relaxed">Ongoing document proof for individuals & property owners</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-slate-900">$29</span>
                  <span className="text-slate-500 ml-2">/ month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Includes 25 proofs per month</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Up to 25 MB per document</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Blockchain timestamp per proof</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Proof history dashboard</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Standard processing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Email support</span>
                </li>
              </ul>

              <a 
                href={backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-8 py-4 text-base font-semibold text-slate-700 bg-white border-2 border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-colors whitespace-nowrap cursor-pointer text-center"
              >
                Start Basic
              </a>
            </div>

            {/* Professional Plan - Most Popular */}
            <div className="bg-white rounded-2xl border-2 border-blue-600 p-8 relative shadow-lg">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <div className="bg-blue-600 text-white px-6 py-2 rounded-full">
                  <span className="text-sm font-bold whitespace-nowrap">Most Popular</span>
                </div>
              </div>
              
              <div className="mb-6 mt-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Professional</h3>
                <p className="text-slate-600 leading-relaxed">For real estate professionals &amp; small firms</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-slate-900">$79</span>
                  <span className="text-slate-500 ml-2">/ month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Includes 250 proofs per month</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Up to 25 MB per document</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Priority processing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Team / firm usage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">API access (Coming Soon)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Priority support</span>
                </li>
              </ul>

              <a 
                href={backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-8 py-4 text-base font-semibold text-white bg-[#F59E0B] rounded-lg hover:bg-[#D97706] transition-colors shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer text-center"
              >
                Start Professional
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-slate-300 transition-colors">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
                <p className="text-slate-600 leading-relaxed">For title companies, law firms, and platforms</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-slate-900">Custom</span>
                  <span className="text-slate-500 ml-2">pricing</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">High-volume proofing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">API access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Batch uploads</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Audit logs and compliance exports</span>
                </li>
                <li className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-600 mt-1 flex-shrink-0"></i>
                  <span className="text-slate-700">Dedicated support</span>
                </li>
              </ul>

              <div className="mb-6 pb-6 border-b border-slate-100">
                <p className="text-sm text-slate-600">
                  Contact us for volume pricing
                </p>
              </div>

              <a 
                href="mailto:info@proofdeed.com?subject=Enterprise Inquiry"
                className="block w-full px-8 py-4 text-base font-semibold text-slate-700 bg-white border-2 border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-colors whitespace-nowrap cursor-pointer text-center"
              >
                Talk to Sales
              </a>
            </div>
          </div>

          {/* Enterprise Add-Ons (Coming Soon) */}
          <div className="mt-8 text-center">
            <div className="bg-slate-50 rounded-xl p-6 max-w-4xl mx-auto">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Enterprise Add-Ons (Coming Soon)</h4>
              <div className="grid md:grid-cols-2 gap-2 mb-2">
                <div className="text-sm text-slate-600 leading-tight">
                  <i className="ri-check-line text-slate-400 mr-2"></i>
                  Large-file batch uploads (no size-based storage, hash-only processing)
                </div>
                <div className="text-sm text-slate-600 leading-tight">
                  <i className="ri-check-line text-slate-400 mr-2"></i>
                  Secure title company drop zones
                </div>
                <div className="text-sm text-slate-600 leading-tight">
                  <i className="ri-check-line text-slate-400 mr-2"></i>
                  Automated nightly batch proofing
                </div>
                <div className="text-sm text-slate-600 leading-tight">
                  <i className="ri-check-line text-slate-400 mr-2"></i>
                  Chain-of-custody export reports
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Pricing for these capabilities will be usage-based and tailored to operational volume.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Each proof supports documents up to 25 MB.<br />
              Enterprise plans support larger files and batch workflows.
            </p>
            <p className="text-slate-600 leading-relaxed">
              All plans include SHA-256 hashing, blockchain timestamping, and downloadable proof certificates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Create Proof in Minutes */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Create Proof in Minutes
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed mb-4">
            One document or thousands.<br />
            Individuals, professionals, and organizations.
          </p>
          <p className="text-lg text-slate-600 mb-8">
            Start with a single proof — no long-term commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleGetProofClick}
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#F59E0B] rounded-lg hover:bg-[#D97706] transition-colors shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Get Proof
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">About Us</Link></li>
                <li><Link to="/privacy" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/how-it-works" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">How Verification Works</Link></li>
                <li><Link to="/verify" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Verify a Proof</Link></li>
                <li><Link to="/faq" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">FAQ</Link></li>
                <li><span className="text-sm text-slate-400 cursor-default block leading-relaxed">API Documentation <span className="text-xs">(Coming Soon)</span></span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:info@proofdeed.com" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">info@proofdeed.com</a></li>
              </ul>
            </div>
          </div>
          
          {/* Footer Microcopy */}
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              Permanent proof. Independent verification. Built for the moments when it actually matters.
            </p>
          </div>
          
          {/* Footer Disclaimer */}
          <div className="border-t border-slate-300 pt-6 mb-6">
            <p className="text-xs text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> ProofDeed provides cryptographic timestamp verification only. ProofDeed is not a law firm, title company, or escrow service. No records are stored.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center md:text-left leading-relaxed">© 2024 ProofDeed. All rights reserved.</p>
            <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-blue-600 transition-colors cursor-pointer leading-relaxed">
              Website Builder
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
