import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlockchainPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1423]">
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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B1423]/95 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'} mt-10`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-white">
              ProofDeed
            </Link>
            <Link 
              to="/" 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Blockchain Anchoring &amp; Verification
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Permanent Proof. Independent Verification. Zero Custody Risk.
            </p>
            <p className="text-base text-slate-400 max-w-3xl mx-auto mt-6 leading-relaxed">
              ProofDeed uses cryptographic hashing and public blockchain anchoring to create immutable, time-stamped proof of document existence and integrity — without storing or exposing your data on-chain.
            </p>
          </div>

          {/* Visual Flow Diagram */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Hash-to-Blockchain Anchoring Flow
            </h2>
            
            <div className="relative">
              {/* Flow Container */}
              <div className="space-y-8">
                
                {/* Step 1: Document Input */}
                <div className="relative">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 border-2 border-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#0B1423]">
                      <i className="ri-file-text-line text-4xl text-blue-400"></i>
                    </div>
                    <div className="flex-1 border border-slate-700/50 rounded-lg p-6 bg-slate-900/20">
                      <h3 className="text-lg font-bold text-white mb-2">Your Document</h3>
                      <p className="text-sm text-slate-300">Original file remains on your device</p>
                      <p className="text-xs text-slate-500 mt-2 font-mono">example_deed.pdf (2.4 MB)</p>
                    </div>
                  </div>
                  {/* Arrow Down */}
                  <div className="absolute left-12 top-24 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
                  <div className="absolute left-11 top-32 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-blue-400"></div>
                </div>

                {/* Step 2: SHA-256 Hashing */}
                <div className="relative pt-8">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 border-2 border-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#0B1423]">
                      <i className="ri-fingerprint-line text-4xl text-blue-400"></i>
                    </div>
                    <div className="flex-1 border border-slate-700/50 rounded-lg p-6 bg-slate-900/20">
                      <h3 className="text-lg font-bold text-white mb-2">SHA-256 Hash Generation</h3>
                      <p className="text-sm text-slate-300 mb-3">Cryptographic fingerprint created locally</p>
                      <div className="bg-[#0B1423] border border-slate-700 rounded p-3">
                        <p className="text-xs font-mono text-blue-300 break-all">
                          a3f5d8c2e1b4f7a9c6d3e8b1f4a7c2d5e8b3f6a9c4d7e2b5f8a1c4d7e3b6f9a2
                        </p>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">256-bit unique identifier</p>
                    </div>
                  </div>
                  {/* Arrow Down */}
                  <div className="absolute left-12 top-24 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
                  <div className="absolute left-11 top-32 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-blue-400"></div>
                </div>

                {/* Step 3: Timestamp Creation */}
                <div className="relative pt-8">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 border-2 border-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#0B1423]">
                      <i className="ri-time-line text-4xl text-blue-400"></i>
                    </div>
                    <div className="flex-1 border border-slate-700/50 rounded-lg p-6 bg-slate-900/20">
                      <h3 className="text-lg font-bold text-white mb-2">Timestamp Package</h3>
                      <p className="text-sm text-slate-300 mb-3">Hash + timestamp prepared for blockchain</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-slate-400 leading-relaxed">Hash: a3f5d8c2e1b4f7a9...</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-slate-400 leading-relaxed">Time: 2024-01-15 14:32:18 UTC</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-slate-400 leading-relaxed">Proof ID: PD-2024-A3F5D8C2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Arrow Down */}
                  <div className="absolute left-12 top-24 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
                  <div className="absolute left-11 top-32 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-blue-400"></div>
                </div>

                {/* Step 4: Blockchain Transaction */}
                <div className="relative pt-8">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 border-2 border-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#0B1423]">
                      <i className="ri-links-line text-4xl text-blue-400"></i>
                    </div>
                    <div className="flex-1 border border-slate-700/50 rounded-lg p-6 bg-slate-900/20">
                      <h3 className="text-lg font-bold text-white mb-2">Blockchain Anchor</h3>
                      <p className="text-sm text-slate-300 mb-3">Permanent record on distributed ledger</p>
                      <div className="bg-[#0B1423] border border-slate-700 rounded p-3 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-slate-500">Block Height:</span>
                          <span className="text-xs font-mono text-blue-300">8,234,567</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-slate-500">Transaction:</span>
                          <span className="text-xs font-mono text-blue-300">0x7a3f...</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500">Network:</span>
                          <span className="text-xs font-mono text-blue-300">Public Chain</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-green-400 font-semibold">Confirmed & Immutable</span>
                      </div>
                    </div>
                  </div>
                  {/* Arrow Down */}
                  <div className="absolute left-12 top-24 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
                  <div className="absolute left-11 top-32 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-blue-400"></div>
                </div>

                {/* Step 5: Verification Certificate */}
                <div className="relative pt-8">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 border-2 border-green-400 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#0B1423]">
                      <i className="ri-shield-check-line text-4xl text-green-400"></i>
                    </div>
                    <div className="flex-1 border border-green-700/50 rounded-lg p-6 bg-green-900/10">
                      <h3 className="text-lg font-bold text-white mb-2">Proof Certificate</h3>
                      <p className="text-sm text-slate-300 mb-3">Downloadable verification report</p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#0B1423] border border-slate-700 rounded p-2">
                          <p className="text-xs text-slate-500 mb-1">Contains:</p>
                          <ul className="space-y-1">
                            <li className="text-xs text-slate-400">• Document hash</li>
                            <li className="text-xs text-slate-400">• Timestamp</li>
                            <li className="text-xs text-slate-400">• Block reference</li>
                          </ul>
                        </div>
                        <div className="bg-[#0B1423] border border-slate-700 rounded p-2">
                          <p className="text-xs text-slate-500 mb-1">Enables:</p>
                          <ul className="space-y-1">
                            <li className="text-xs text-slate-400">• Independent verify</li>
                            <li className="text-xs text-slate-400">• Legal proof</li>
                            <li className="text-xs text-slate-400">• Audit trail</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Side Label */}
              <div className="absolute -right-32 top-1/2 -translate-y-1/2 hidden xl:block">
                <div className="bg-slate-900/40 border border-slate-700/50 rounded-lg p-4 w-48">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong className="text-white">Zero custody:</strong> Your document never leaves your device. Only the hash travels.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Properties */}
            <div className="mt-12 grid md:grid-cols-3 gap-4">
              <div className="border border-slate-700/50 rounded-lg p-4 bg-slate-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <i className="ri-lock-line text-xl text-blue-400"></i>
                  <h4 className="text-sm font-bold text-white">Immutable</h4>
                </div>
                <p className="text-xs text-slate-400">Cannot be altered once recorded</p>
              </div>
              <div className="border border-slate-700/50 rounded-lg p-4 bg-slate-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <i className="ri-eye-line text-xl text-blue-400"></i>
                  <h4 className="text-sm font-bold text-white">Transparent</h4>
                </div>
                <p className="text-xs text-slate-400">Publicly verifiable on blockchain</p>
              </div>
              <div className="border border-slate-700/50 rounded-lg p-4 bg-slate-900/20">
                <div className="flex items-center gap-3 mb-2">
                  <i className="ri-shield-check-line text-xl text-blue-400"></i>
                  <h4 className="text-sm font-bold text-white">Private</h4>
                </div>
                <p className="text-xs text-slate-400">Document content never exposed</p>
              </div>
            </div>
          </div>

          {/* Section 1: The Core Concept */}
          <div className="mb-24">
            <div className="border border-slate-700/50 rounded-lg p-10 bg-slate-900/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                What Is Blockchain Anchoring?
              </h2>
              <p className="text-base text-slate-300 mb-6 leading-relaxed">
                Blockchain anchoring is the process of creating a cryptographic fingerprint (hash) of a document and recording that fingerprint on a public blockchain.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">The document itself is never placed on-chain.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">Only its SHA-256 hash is recorded.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">The blockchain provides a tamper-proof timestamp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">Anyone can independently verify the proof.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">If the document changes, even by one character, the hash changes.</span>
                </li>
              </ul>
              <p className="text-base text-white font-semibold mt-8">
                This creates mathematical certainty of integrity.
              </p>
            </div>
          </div>

          {/* Section 2: Step-by-Step Process */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Step-by-Step Process
            </h2>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/20">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border-2 border-blue-400 text-blue-400 rounded flex items-center justify-center flex-shrink-0 font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">Document Hashing</h3>
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      When a document is submitted:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400 leading-relaxed">ProofDeed generates a SHA-256 cryptographic hash.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400 leading-relaxed">This hash is a unique digital fingerprint.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400 leading-relaxed">The original document remains private.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/20">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border-2 border-blue-400 text-blue-400 rounded flex items-center justify-center flex-shrink-0 font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">Timestamp Anchoring</h3>
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      The hash is:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400 leading-relaxed">Anchored to a public blockchain transaction</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400 leading-relaxed">Recorded with block number and timestamp</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400 leading-relaxed">Permanently embedded in a distributed ledger</span>
                      </li>
                    </ul>
                    <p className="text-sm text-white font-semibold mt-4">
                      This establishes provable existence at a specific moment in time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/20">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border-2 border-blue-400 text-blue-400 rounded flex items-center justify-center flex-shrink-0 font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">Certificate Generation</h3>
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      ProofDeed generates a verification certificate containing:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400 leading-relaxed">Document hash</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400 leading-relaxed">Timestamp</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400 leading-relaxed">Blockchain network</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400 leading-relaxed">Block number</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400 leading-relaxed">Transaction reference</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400 leading-relaxed">Unique verification ID</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400 leading-relaxed">QR code for independent validation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Why This Matters */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Why This Matters
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/20">
                <h3 className="text-lg font-bold text-white mb-4">Immutability</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Public blockchains cannot be altered retroactively.
                </p>
              </div>

              <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/20">
                <h3 className="text-lg font-bold text-white mb-4">Independent Verification</h3>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Verification does not rely on ProofDeed servers. Anyone can:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-slate-400 leading-relaxed">Recalculate the document hash</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-slate-400 leading-relaxed">Compare it to the blockchain anchor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-slate-400 leading-relaxed">Confirm integrity independently</span>
                  </li>
                </ul>
              </div>

              <div className="border border-slate-700/50 rounded-lg p-8 bg-slate-900/20">
                <h3 className="text-lg font-bold text-white mb-4">No Data Exposure</h3>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  The original document is never placed on-chain.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Only a mathematical fingerprint is recorded. Sensitive data remains private.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Table Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              How ProofDeed Compares
            </h2>
            <p className="text-base text-slate-400 text-center mb-10 max-w-2xl mx-auto">
              Understanding the differences between verification methods
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left text-sm font-bold text-slate-400 border-b border-slate-700/50 bg-slate-900/40">
                      Feature
                    </th>
                    <th className="p-4 text-center text-sm font-bold text-white border-b border-slate-700/50 bg-[#F59E0B]/10">
                      <div className="flex items-center justify-center gap-2">
                        <i className="ri-shield-check-line text-[#F59E0B]"></i>
                        ProofDeed
                      </div>
                    </th>
                    <th className="p-4 text-center text-sm font-bold text-slate-300 border-b border-slate-700/50 bg-slate-900/40">
                      Traditional Notarization
                    </th>
                    <th className="p-4 text-center text-sm font-bold text-slate-300 border-b border-slate-700/50 bg-slate-900/40">
                      Centralized Timestamp Services
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 text-sm text-slate-300 border-b border-slate-700/30">
                      <strong>Verification Independence</strong>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30 bg-[#F59E0B]/5">
                      <div className="flex flex-col items-center">
                        <i className="ri-check-line text-green-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-400">Anyone can verify</span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30">
                      <div className="flex flex-col items-center">
                        <i className="ri-close-line text-red-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-500">Requires notary records</span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30">
                      <div className="flex flex-col items-center">
                        <i className="ri-close-line text-red-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-500">Requires vendor access</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-300 border-b border-slate-700/30">
                      <strong>Tamper Evidence</strong>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30 bg-[#F59E0B]/5">
                      <div className="flex flex-col items-center">
                        <i className="ri-check-line text-green-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-400">Cryptographic proof</span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30">
                      <div className="flex flex-col items-center">
                        <i className="ri-subtract-line text-yellow-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-500">Physical seals only</span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30">
                      <div className="flex flex-col items-center">
                        <i className="ri-subtract-line text-yellow-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-500">Database-dependent</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-300 border-b border-slate-700/30">
                      <strong>Single Point of Failure</strong>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30 bg-[#F59E0B]/5">
                      <div className="flex flex-col items-center">
                        <i className="ri-check-line text-green-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-400">Distributed ledger</span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30">
                      <div className="flex flex-col items-center">
                        <i className="ri-close-line text-red-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-500">Notary office records</span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30">
                      <div className="flex flex-col items-center">
                        <i className="ri-close-line text-red-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-500">Vendor servers</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-300 border-b border-slate-700/30">
                      <strong>Long-term Durability</strong>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30 bg-[#F59E0B]/5">
                      <div className="flex flex-col items-center">
                        <i className="ri-check-line text-green-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-400">Permanent on-chain</span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30">
                      <div className="flex flex-col items-center">
                        <i className="ri-subtract-line text-yellow-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-500">Record retention limits</span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30">
                      <div className="flex flex-col items-center">
                        <i className="ri-close-line text-red-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-500">Vendor viability risk</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-300 border-b border-slate-700/30">
                      <strong>Document Privacy</strong>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30 bg-[#F59E0B]/5">
                      <div className="flex flex-col items-center">
                        <i className="ri-check-line text-green-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-400">Hash only, no storage</span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30">
                      <div className="flex flex-col items-center">
                        <i className="ri-subtract-line text-yellow-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-500">Copies may be retained</span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30">
                      <div className="flex flex-col items-center">
                        <i className="ri-close-line text-red-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-500">Often stored on servers</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-300 border-b border-slate-700/30">
                      <strong>Speed</strong>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30 bg-[#F59E0B]/5">
                      <div className="flex flex-col items-center">
                        <i className="ri-check-line text-green-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-400">Minutes</span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30">
                      <div className="flex flex-col items-center">
                        <i className="ri-close-line text-red-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-500">Hours to days</span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-slate-700/30">
                      <div className="flex flex-col items-center">
                        <i className="ri-check-line text-green-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-500">Minutes</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-slate-300">
                      <strong>Cost</strong>
                    </td>
                    <td className="p-4 text-center bg-[#F59E0B]/5">
                      <div className="flex flex-col items-center">
                        <i className="ri-check-line text-green-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-400">Low, scalable</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <i className="ri-close-line text-red-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-500">Per-document fees</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <i className="ri-subtract-line text-yellow-400 text-xl mb-1"></i>
                        <span className="text-xs text-slate-500">Subscription-based</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 border border-slate-700/50 rounded-lg p-6 bg-slate-900/20">
              <div className="flex items-start gap-4">
                <i className="ri-information-line text-blue-400 text-xl flex-shrink-0 mt-0.5"></i>
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white">Note:</strong> ProofDeed complements — not replaces — traditional notarization. For documents requiring legal attestation of identity or witnessing, traditional notarization remains necessary. ProofDeed provides an additional layer of cryptographic integrity verification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section for Legal Professionals */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              FAQ for Legal Professionals
            </h2>
            <p className="text-base text-slate-400 text-center mb-10 max-w-2xl mx-auto">
              Addressing common blockchain misconceptions in legal contexts
            </p>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="border border-slate-700/50 rounded-lg bg-slate-900/20 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-base font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-blue-400 flex-shrink-0">Q:</span>
                    Does using blockchain mean my client&apos;s documents are stored on a public network?
                  </h3>
                  <div className="pl-7">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">No.</strong> The document itself is never uploaded to any blockchain. Only a SHA-256 cryptographic hash — a 64-character string derived from the document — is recorded. This hash cannot be reverse-engineered to reveal document contents. The original file remains entirely in your possession.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="border border-slate-700/50 rounded-lg bg-slate-900/20 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-base font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-blue-400 flex-shrink-0">Q:</span>
                    Is this related to cryptocurrency or speculative digital assets?
                  </h3>
                  <div className="pl-7">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">No.</strong> ProofDeed uses blockchain technology purely as a timestamping infrastructure — similar to how email uses internet protocols without being &quot;about&quot; the internet. We leverage the immutability and distributed nature of public blockchains for verification purposes only. No tokens, coins, or speculative assets are involved.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="border border-slate-700/50 rounded-lg bg-slate-900/20 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-base font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-blue-400 flex-shrink-0">Q:</span>
                    Will courts accept blockchain-anchored evidence?
                  </h3>
                  <div className="pl-7">
                    <p className="text-sm text-slate-300 leading-relaxed mb-3">
                      Blockchain timestamps are increasingly recognized in legal proceedings. Several jurisdictions have enacted legislation acknowledging blockchain records as valid evidence. The Federal Rules of Evidence (Rule 901) allow for authentication through &quot;evidence describing a process or system and showing that it produces an accurate result.&quot;
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      ProofDeed certificates provide the technical documentation needed to establish the reliability of the timestamping process for evidentiary purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="border border-slate-700/50 rounded-lg bg-slate-900/20 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-base font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-blue-400 flex-shrink-0">Q:</span>
                    What happens if ProofDeed ceases operations?
                  </h3>
                  <div className="pl-7">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">Your proof remains valid.</strong> Because the hash is anchored to a public blockchain, verification does not depend on ProofDeed&apos;s continued existence. Anyone with the original document and the certificate can independently verify the timestamp by recalculating the hash and checking it against the public blockchain record.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="border border-slate-700/50 rounded-lg bg-slate-900/20 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-base font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-blue-400 flex-shrink-0">Q:</span>
                    How does this differ from a traditional timestamp authority (TSA)?
                  </h3>
                  <div className="pl-7">
                    <p className="text-sm text-slate-300 leading-relaxed mb-3">
                      Traditional TSAs rely on centralized servers and require trust in a single organization. If that organization is compromised, goes offline, or ceases operations, verification becomes impossible or unreliable.
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Blockchain anchoring distributes trust across thousands of independent nodes. No single entity can alter the record, and verification remains possible as long as the blockchain network exists.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div className="border border-slate-700/50 rounded-lg bg-slate-900/20 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-base font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-blue-400 flex-shrink-0">Q:</span>
                    Does ProofDeed verify the authenticity or legality of document contents?
                  </h3>
                  <div className="pl-7">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">No.</strong> ProofDeed verifies only that a specific document existed in a specific form at a specific time. It does not validate signatures, verify identities, assess legal validity, or make any determination about document contents. It is a timestamp and integrity verification service only.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 7 */}
              <div className="border border-slate-700/50 rounded-lg bg-slate-900/20 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-base font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-blue-400 flex-shrink-0">Q:</span>
                    Can the blockchain record be subpoenaed or subject to discovery?
                  </h3>
                  <div className="pl-7">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      The blockchain record contains only a cryptographic hash — not the document itself. This hash reveals nothing about document contents and cannot be used to reconstruct the original file. The blockchain record is publicly accessible and can be referenced by any party, but it provides no confidential information.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 8 */}
              <div className="border border-slate-700/50 rounded-lg bg-slate-900/20 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-base font-bold text-white mb-3 flex items-start gap-3">
                    <span className="text-blue-400 flex-shrink-0">Q:</span>
                    What is the evidentiary weight of a ProofDeed certificate?
                  </h3>
                  <div className="pl-7">
                    <p className="text-sm text-slate-300 leading-relaxed mb-3">
                      A ProofDeed certificate provides cryptographic evidence that a document existed in its exact form at a specific timestamp. This can support claims regarding:
                    </p>
                    <ul className="space-y-2 mb-3">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400">Prior art and intellectual property disputes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400">Contract execution timing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400">Document integrity in chain-of-custody</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-400">Compliance documentation timing</span>
                      </li>
                    </ul>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      The certificate itself serves as documentation of the verification process for presentation to courts or opposing counsel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Preview Mockup */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Certificate Preview
            </h2>
            <p className="text-base text-slate-400 text-center mb-10 max-w-2xl mx-auto">
              What your ProofDeed verification certificate looks like
            </p>

            {/* Certificate Mockup */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                {/* Certificate Header */}
                <div className="bg-[#0B1423] px-8 py-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border-2 border-blue-400 rounded flex items-center justify-center">
                        <i className="ri-shield-check-line text-blue-400 text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">ProofDeed</h3>
                        <p className="text-xs text-slate-400">Blockchain Verification Certificate</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">Certificate ID</p>
                      <p className="text-sm font-mono text-blue-400">PD-2024-A3F5D8C2</p>
                    </div>
                  </div>
                </div>

                {/* Certificate Body */}
                <div className="px-8 py-8">
                  {/* Verification Status */}
                  <div className="flex items-center justify-center gap-3 mb-8 py-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-white text-lg"></i>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-green-700">Document Integrity Verified</p>
                      <p className="text-xs text-green-600">Cryptographic hash matches blockchain anchor</p>
                    </div>
                  </div>

                  {/* Document Information */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Document Information</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-xs text-slate-500 mb-1">File Name</p>
                        <p className="text-sm font-medium text-slate-800">property_deed_2024.pdf</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-xs text-slate-500 mb-1">File Size</p>
                        <p className="text-sm font-medium text-slate-800">2.4 MB</p>
                      </div>
                    </div>
                  </div>

                  {/* Hash Information */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Cryptographic Hash (SHA-256)</h4>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <p className="text-xs font-mono text-blue-400 break-all leading-relaxed">
                        a3f5d8c2e1b4f7a9c6d3e8b1f4a7c2d5e8b3f6a9c4d7e2b5f8a1c4d7e3b6f9a2
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      This unique fingerprint will change if even one character in the document is modified.
                    </p>
                  </div>

                  {/* Blockchain Anchor */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Blockchain Anchor</h4>
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                      <div className="grid grid-cols-2 divide-x divide-slate-200">
                        <div className="p-4">
                          <p className="text-xs text-slate-500 mb-1">Network</p>
                          <p className="text-sm font-medium text-slate-800">Public Blockchain</p>
                        </div>
                        <div className="p-4">
                          <p className="text-xs text-slate-500 mb-1">Block Height</p>
                          <p className="text-sm font-mono text-slate-800">8,234,567</p>
                        </div>
                      </div>
                      <div className="border-t border-slate-200 p-4">
                        <p className="text-xs text-slate-500 mb-1">Transaction Hash</p>
                        <p className="text-xs font-mono text-slate-700 break-all">
                          0x7a3f9b2c4d5e6f8a1b3c5d7e9f2a4b6c8d0e2f4a6b8c0d2e4f6a8b0c2d4e6f8
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timestamp */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Timestamp</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-xs text-slate-500 mb-1">Anchored At</p>
                        <p className="text-sm font-medium text-slate-800">January 15, 2024</p>
                        <p className="text-xs text-slate-600">14:32:18 UTC</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-xs text-slate-500 mb-1">Unix Timestamp</p>
                        <p className="text-sm font-mono text-slate-800">1705329138</p>
                      </div>
                    </div>
                  </div>

                  {/* QR Code and Verification */}
                  <div className="flex items-start gap-6 p-6 bg-slate-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-white border border-slate-200 rounded-lg flex items-center justify-center">
                        <div className="grid grid-cols-5 gap-0.5">
                          {[...Array(25)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-3 h-3 ${
                                [0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,6,12,18].includes(i) 
                                  ? 'bg-slate-800' 
                                  : 'bg-white'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 text-center mt-2">Scan to verify</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-800 mb-2">Independent Verification</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        This certificate can be verified independently without relying on ProofDeed servers. Scan the QR code or visit the verification URL to confirm the blockchain anchor.
                      </p>
                      <div className="bg-white border border-slate-200 rounded p-2">
                        <p className="text-xs text-slate-500 mb-1">Verification URL</p>
                        <p className="text-xs font-mono text-blue-600 break-all">
                          https://proofdeed.com/verify/PD-2024-A3F5D8C2
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate Footer */}
                <div className="bg-slate-100 px-8 py-4 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500">
                      This certificate provides cryptographic proof of document existence and integrity at the specified timestamp.
                    </p>
                    <p className="text-xs text-slate-400">Page 1 of 1</p>
                  </div>
                </div>
              </div>

              {/* Certificate Shadow/Depth Effect */}
              <div className="h-2 bg-gradient-to-b from-slate-300 to-transparent mx-4 rounded-b-lg"></div>
            </div>

            {/* Certificate Features */}
            <div className="mt-12 grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="border border-slate-700/50 rounded-lg p-4 bg-slate-900/20 text-center">
                <i className="ri-file-pdf-line text-2xl text-blue-400 mb-2"></i>
                <h4 className="text-sm font-bold text-white mb-1">PDF Export</h4>
                <p className="text-xs text-slate-400">Download for records</p>
              </div>
              <div className="border border-slate-700/50 rounded-lg p-4 bg-slate-900/20 text-center">
                <i className="ri-qr-code-line text-2xl text-blue-400 mb-2"></i>
                <h4 className="text-sm font-bold text-white mb-1">QR Verification</h4>
                <p className="text-xs text-slate-400">Instant mobile check</p>
              </div>
              <div className="border border-slate-700/50 rounded-lg p-4 bg-slate-900/20 text-center">
                <i className="ri-links-line text-2xl text-blue-400 mb-2"></i>
                <h4 className="text-sm font-bold text-white mb-1">Blockchain Link</h4>
                <p className="text-xs text-slate-400">Direct chain reference</p>
              </div>
              <div className="border border-slate-700/50 rounded-lg p-4 bg-slate-900/20 text-center">
                <i className="ri-share-line text-2xl text-blue-400 mb-2"></i>
                <h4 className="text-sm font-bold text-white mb-1">Shareable</h4>
                <p className="text-xs text-slate-400">Send to any party</p>
              </div>
            </div>
          </div>

          {/* Section 4: What Blockchain Is Used */}
          <div className="mb-24">
            <div className="border border-slate-700/50 rounded-lg p-10 bg-slate-900/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                What Blockchain Is Used?
              </h2>
              <p className="text-base text-slate-300 mb-6 leading-relaxed">
                ProofDeed anchors document hashes to established public blockchains with long-term network security and distributed validation.
              </p>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                Each anchor includes:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">Network identifier</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">Block height</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">Transaction hash</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">Timestamp reference</span>
                </li>
              </ul>
              <p className="text-base text-white font-semibold">
                This ensures durability beyond any single organization.
              </p>
            </div>
          </div>

          {/* Section 5: Verification Process */}
          <div className="mb-24">
            <div className="border border-slate-700/50 rounded-lg p-10 bg-slate-900/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                How to Verify a ProofDeed Certificate
              </h2>
              <ol className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <span className="text-blue-400 font-bold text-lg flex-shrink-0">1.</span>
                  <span className="text-sm text-slate-300 leading-relaxed">Upload the original document</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-400 font-bold text-lg flex-shrink-0">2.</span>
                  <span className="text-sm text-slate-300 leading-relaxed">ProofDeed recalculates the SHA-256 hash</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-400 font-bold text-lg flex-shrink-0">3.</span>
                  <span className="text-sm text-slate-300 leading-relaxed">The hash is compared to the anchored blockchain record</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-400 font-bold text-lg flex-shrink-0">4.</span>
                  <span className="text-sm text-slate-300 leading-relaxed">If they match, integrity is confirmed</span>
                </li>
              </ol>
              <div className="border-t border-slate-700/50 pt-6">
                <p className="text-sm text-slate-400 leading-relaxed">
                  No password. No login required. Mathematical verification only.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Legal & Regulatory Strength */}
          <div className="mb-24">
            <div className="border border-slate-700/50 rounded-lg p-10 bg-slate-900/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Legal &amp; Regulatory Strength
              </h2>
              <p className="text-base text-slate-300 mb-6 leading-relaxed">
                Blockchain anchoring supports:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">Tamper-evident audit trails</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">Chain-of-custody verification</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">Title documentation integrity</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">Notarial confirmation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">Government record preservation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 leading-relaxed">Compliance documentation</span>
                </div>
              </div>
              <div className="border-t border-slate-700/50 pt-6">
                <p className="text-sm text-slate-400 leading-relaxed">
                  ProofDeed does not replace legal process. It strengthens evidentiary integrity.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7: Infrastructure Philosophy */}
          <div className="mb-16">
            <div className="border border-slate-700/50 rounded-lg p-10 bg-slate-900/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Infrastructure Philosophy
              </h2>
              <p className="text-base text-slate-300 mb-6 leading-relaxed">
                ProofDeed is built on three principles:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-blue-400 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold text-sm">1</span>
                  </div>
                  <p className="text-lg text-white font-semibold mt-1">Do not trust.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-blue-400 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold text-sm">2</span>
                  </div>
                  <p className="text-lg text-white font-semibold mt-1">Verify independently.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-blue-400 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 font-bold text-sm">3</span>
                  </div>
                  <p className="text-lg text-white font-semibold mt-1">Anchor permanently.</p>
                </div>
              </div>
              <div className="border-t border-slate-700/50 pt-6 space-y-3">
                <p className="text-sm text-slate-400 leading-relaxed">
                  We do not rely on centralized database timestamps.
                </p>
                <p className="text-sm text-white font-semibold">
                  We rely on distributed cryptographic proof.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="border border-slate-700/50 rounded-lg p-10 text-center bg-slate-900/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Anchor Your Documents?
            </h2>
            <p className="text-base text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Create permanent, verifiable proof with cryptographic certainty.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://whale-app-9azz6.ondigitalocean.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#F59E0B] rounded-lg hover:bg-[#D97706] transition-all whitespace-nowrap cursor-pointer"
              >
                Get Proof
              </a>
              <Link
                to="/verify"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white border-2 border-slate-600 rounded-lg hover:border-slate-500 transition-colors whitespace-nowrap cursor-pointer"
              >
                Verify a Document
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0A1220] border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="text-sm font-bold text-white mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer block leading-relaxed">About Us</Link></li>
                <li><Link to="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer block leading-relaxed">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer block leading-relaxed">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/verify" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer block leading-relaxed">Verify a Document</Link></li>
                <li><Link to="/how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer block leading-relaxed">How ProofDeed Works</Link></li>
                <li><Link to="/blockchain" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer block leading-relaxed">Blockchain Anchoring</Link></li>
                <li><Link to="/faq" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer block leading-relaxed">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-3">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:info@proofdeed.com" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer block leading-relaxed">info@proofdeed.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-slate-300 leading-relaxed">
              Independent, Verifiable Proof — No Document Storage
            </p>
          </div>
          
          <div className="border-t border-slate-800 pt-6 mb-6">
            <p className="text-xs text-slate-500 leading-relaxed text-center max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> ProofDeed provides cryptographic timestamp verification only. ProofDeed is not a law firm, title company, or escrow service. No records are stored.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 text-center md:text-left leading-relaxed">© 2024 ProofDeed. All rights reserved.</p>
            <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-white transition-colors cursor-pointer leading-relaxed">
              Website Builder
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
