import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FAQPage() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Are my records stored on ProofDeed?",
      answer: "No. ProofDeed never stores your records. Only a cryptographic hash and timestamp are recorded, ensuring privacy while providing independently verifiable proof of existence."
    },
    {
      question: "Is this legally valid?",
      answer: "ProofDeed creates an immutable, timestamped record that can support evidentiary and audit use cases. Customers should consult legal counsel regarding jurisdiction-specific requirements."
    },
    {
      question: "Can title companies upload records in bulk?",
      answer: "Yes. Bulk uploads, system integrations, and batch processing are available on Enterprise plans and designed for operational workflows."
    },
    {
      question: "Can proofs be altered or deleted?",
      answer: "No. Once created, a proof cannot be changed or removed. This immutability is core to the platform's integrity."
    },
    {
      question: "How does ProofDeed protect my privacy?",
      answer: "Your documents are processed entirely in your browser. Only a cryptographic hash (digital fingerprint) is sent to our backend for blockchain timestamping. The hash cannot be reversed to recreate your document, and we never see or store your actual files."
    },
    {
      question: "What is a cryptographic hash?",
      answer: "A cryptographic hash is a unique digital fingerprint of your document created using the SHA-256 algorithm. Any change to the document, even a single character, produces a completely different hash. This makes it perfect for detecting tampering."
    },
    {
      question: "How long does proof creation take?",
      answer: "Proof creation typically takes just a few seconds. The hash is generated instantly in your browser, and blockchain timestamping happens within moments."
    },
    {
      question: "Can I verify a proof without ProofDeed?",
      answer: "Yes. Proofs are independently verifiable using the blockchain record. Anyone with the proof ID and document can verify authenticity without needing a ProofDeed account or platform access."
    },
    {
      question: "What file types are supported?",
      answer: "ProofDeed currently supports PDF, DOC, DOCX, and TXT files. Additional formats may be added based on user demand."
    },
    {
      question: "How much does ProofDeed cost?",
      answer: "ProofDeed offers three plans: Starter ($29/month for up to 100 proofs), Professional ($99/month for up to 1,000 proofs), and Enterprise (custom pricing for high-volume users). See our pricing page for full details."
    },
    {
      question: "What happens if ProofDeed shuts down?",
      answer: "Because proofs are anchored to a public blockchain, they remain verifiable even if ProofDeed ceases operations. The blockchain record is permanent and independent of our platform."
    },
    {
      question: "Can I use ProofDeed for contracts or agreements?",
      answer: "ProofDeed provides proof that a document existed at a specific time. It does not replace e-signatures, notarization, or legal execution of contracts. It's best used as supplementary evidence of document integrity and existence."
    }
  ];

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

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'} mt-10`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-slate-900">
              ProofDeed
            </Link>
            <Link 
              to="/" 
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to know about ProofDeed's cryptographic proof and verification service
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:border-slate-300 transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <i className={`ri-arrow-down-s-line text-2xl text-slate-400 transition-transform flex-shrink-0 ${openFaqIndex === index ? 'rotate-180' : ''}`}></i>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-base text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Reach out for personalized support or enterprise inquiries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:info@proofdeed.com?subject=FAQ Inquiry"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                Contact Support
              </a>
              <a 
                href="https://whale-app-9azz6.ondigitalocean.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-700 bg-white border-2 border-slate-300 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Proof
              </a>
            </div>
          </div>
        </div>
      </div>

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
                <li><Link to="/verify" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">Verify a Document</Link></li>
                <li><Link to="/how-it-works" className="text-sm text-slate-600 hover:text-blue-600 transition-colors cursor-pointer block leading-relaxed">How ProofDeed Works</Link></li>
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
          
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              Independent, Verifiable Proof — No Document Storage
            </p>
          </div>
          
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
